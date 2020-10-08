<template>
  <div id="detail">
    <detail-nav-bar @navClick="navClick" ref="nav"></detail-nav-bar>
    <BScroll class="wrapper" ref="scroll"
    @scroll='scroll'
    >
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo"  @detailImageLoad="detailImageLoad"></detail-goods-info>
      <detail-param-info :paramInfo="paramInfo" ref="param"></detail-param-info>
      <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>
      <detail-good :goods="recommends" ref="recommend"></detail-good>
    </BScroll>
    <back-top v-show="isShow" @click.native="backTop"></back-top>
    <detail-buttom-bar @addToCart="addToCart"></detail-buttom-bar>
  </div>
</template>
<script>

import DetailNavBar from './childComp/DetailNavBar'
import DetailSwiper from './childComp/DetailSwiper'
import DetailBaseInfo from './childComp/DetailBaseInfo'
import DetailShopInfo from './childComp/DetailShopInfo'
import DetailGoodsInfo from './childComp/DetailGoodsInfo'
import DetailParamInfo from './childComp/DetailParamInfo'
import DetailCommentInfo from './childComp/DetailCommentInfo'
import DetailButtomBar from './childComp/DetailBottomBar'

import {itemListenerMixin} from 'common/mixin.js'
import {debounce} from 'common/util.js'

import BackTop from 'components/content/backTop/BackTop'

import DetailGood from 'components/content/goods/Goods'
import {getDetail, getRecommend, Goods, Shop, GoodsParam} from 'network/detail.js'

import BScroll from 'components/common/scroll/Scroll'
export default {
  name: 'Detail',
  data() {
    return {
      iid:null,
      topImages: null,
      goods:{},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      goods: {},
      recommends:[],
      isShow: false,
      themeTopYs: [],
      currentIndex: 0,
      getThemeTopY: null
    }
  },
  mixins: [itemListenerMixin],
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailGood,
    DetailButtomBar,
    BScroll,
    BackTop
  },
  methods: {
    detailImageLoad() {
      this.refresh()
      this.getThemeTopY()
    },
    scroll(position) {
      const positionY = -position.y
      let length = this.themeTopYs.length
      for( let i = 0; i<length; i++) {
        if(this.currentIndex != i && (positionY > this.themeTopYs[i] && positionY < this.themeTopYs[i + 1])){
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
      this.isShow = -position.y >= 1000
    },
    backTop() {
      this.$refs.scroll.scrollTo(0,0,1000)
    },
    addToCart() {
      const product = {}
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc  = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      this.$store.dispatch('addCart', product).then( res => {
      console.log('res');
      this.$toast(res)      
      })
    },
    navClick(index) {
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],1000)
    }
  },
  created() {
    this.iid = this.$route.params.iid
    getDetail(this.iid).then( res => {
      console.log(res);
      const data = res.result
      this.topImages = data.itemInfo.topImages
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      )
      this.shop = new Shop(data.shopInfo)
      this.detailInfo = data.detailInfo;
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      )
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }
      this.getThemeTopY = debounce( ()=> {
        this.themeTopYs = [];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.param.$el.offsetTop - 44);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 44);
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 44);
        this.themeTopYs.push(Number.MAX_VALUE);
      },500)
    })
    getRecommend().then(res => {
      this.recommends = res.data.list;
    });
  },
  mounted() {
  },
  destroyed() {
    this.$bus.$off('itemImgLoad', this.itemImgListener)
  }
}
</script>
<style lang="less" scoped>
  #detail{
    width: 100vw;
    height: 100vh;
    position: relative;
    .wrapper{
      height: calc(~"100% - 49px - 44px");
      overflow: hidden;
  }
  }
</style>