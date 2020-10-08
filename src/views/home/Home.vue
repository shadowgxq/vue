<template>
  <div id="home">
    <home-nav-bar></home-nav-bar>
    <back-top @click.native="backTop" v-show="isShow"></back-top>
    <tab-control class="control1" :title="tabTitleName" @itemClick="itemClick" ref="control1" v-show="tabControlShow"></tab-control>
    <BScroll class="wrapper"
    @pullingUp="pullingUp"
    @scroll="scroll" ref="scroll">
      <home-swiper :banner="banner" @bannerLoad="bannerLoad"></home-swiper>
      <recommends :recommends="recommends"></recommends>
      <feature-view></feature-view>
      <tab-control :title="tabTitleName" @itemClick="itemClick" ref="control2"></tab-control>
      <goods :goods="goods[currentType].list"></goods>
    </BScroll>
  </div>  
</template>
<script>
import BScroll from 'components/common/scroll/Scroll'

import TabControl from 'components/content/tabControl/TabControl'
import Goods from 'components/content/goods/Goods'
import BackTop from 'components/content/backTop/BackTop'
import HomeNavBar from './childComp/homeNavBar/HomeNavBar'
import HomeSwiper from './childComp/homeSwiper/HomeSwiper'
import Recommends from './childComp/recommends/Recommends'
import FeatureView from './childComp/featureView/FeatureView'

import {itemListenerMixin} from 'common/mixin'

import {getHomeMultidata, getHomeGoodsdata} from 'network/home.js'

export default {
  name: 'Home',
  components: {
    HomeNavBar,
    HomeSwiper,
    Recommends,
    FeatureView,
    BScroll,
    TabControl,
    Goods,
    BackTop,
  },
  data() {
    return{
      banner:[],
      recommends:[],
      tabTitleName: ['流行','新款','精选'],
      goods: {
        'pop': {page: 0, list:[]},
        'new': {page: 0, list:[]},
        'sell': {page: 0, list:[]}
      },
      currentType: 'pop',
      isShow: false,
      controlTop:0,
      tabControlShow: false,
      saveY: 0

    }
  },
  methods: {
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
      });
      getHomeGoodsdata(type,page).then(res => {
        const add = res.data.list
        this.goods[type].list.push(...add)
        this.goods[type].page += 1
        this.$refs.scroll.finishPullUp()
        this.$toast.clear()
      })
    },
    itemClick(index) {
      switch(index){
        case 0 :
          this.currentType = 'pop'
          break;
        case 1 :
          this.currentType = 'new'
          break;
        case 2 :
          this.currentType = 'sell'
          break;
      }
      this.$refs.control1.currentIndex = index
      this.$refs.control2.currentIndex = index
    },
    pullingUp() {
      this.getHomeGoods(this.currentType)
    },
    backTop() {
      this.$refs.scroll.scrollTo(0,0,1000)
    },
    scroll(position) {
      this.isShow = -position.y >= 1000
      this.tabControlShow = -position.y >= this.controlTop
    },
    bannerLoad() {
      this.controlTop = this.$refs.control2.$el.offsetTop
    }
  },
  mixins: [itemListenerMixin],
  created() {
    getHomeMultidata().then(res => {
      this.banner = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
    this.bannerLoad()
  },
  updated() {
   
  },
  activated() {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.saveY,0)
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y
    this.$bus.$off('itemImgLoad',this.itemImgListener)
  }
}
</script>
<style lang="less" scoped>
#home{
  width: 100vw;
  height: 100vh;
  position: relative;
  .wrapper{
    height: calc(~"100% - 49px - 44px");
    overflow: hidden;
  }
  .control1{
    width: 100%;
    position: fixed;
    top: 44px;
    z-index: 9;
    background-color: #fff;
  }
}
</style>