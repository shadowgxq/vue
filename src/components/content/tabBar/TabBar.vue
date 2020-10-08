<template>
  <div class="tab-bar">
    <div class="tab-bar-item" @click="selectedM(1)">
      <router-link to="/home"></router-link>
      <div ><i class="iconfont icon-Homehomepagemenu" :class="{red : selected[0]}"></i></div>
      <div :class="{red : selected[0]}">首页</div>
    </div>
    <div class="tab-bar-item" @click="selectedM(2)">
      <router-link to="/category"></router-link>
      <div ><i class="iconfont icon-categoryselected" :class="{red : selected[1]}"></i></div>
      <div :class="{red : selected[1]}">分类</div>
    </div>
    <div class="tab-bar-item" @click="selectedM(3)">
      <router-link to="/cart"></router-link>
      <div ><i class="iconfont icon-shop-cart-" :class="{red : selected[2]}"></i></div>
      <div :class="{red : selected[2]}">购物车</div>
    </div>
    <div class="tab-bar-item" @click="selectedM(4)">
      <router-link to="/profile"></router-link>
      <div ><i class="iconfont icon-my" :class="{red : selected[3]}"></i></div>
      <div :class="{red : selected[3]}">我的</div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
      return{
        selected:[true,false,false,false]
      }
    },
    created() {
      const router = this.$router.history.router.options.routes
      const currentRouter = this.$route.path
      const res = router.findIndex(item => item.path === currentRouter)
      this.selectedM(res)
    },
    methods: {
      selectedM(index) {
        this.selected.forEach( item => {
          this.selected.shift()
          this.selected.push(false)
        })
        this.selected.splice(index-1,1,true)
      }
    }
}
</script>
<style lang="less" scoped>
.tab-bar{
  color: #000;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 49px;
  z-index: 10;
  background-color: rgba(100,100,100,.1);
  .tab-bar-item{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    a{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 49px;
      opacity: 0;
    }
    .iconfont{
      font-size: 25px
    }
    .red{
      color: red;
    }
  }
}
</style>