<template>
  <div class="homeNavBar">
    <nav-bar class="home-nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from 'components/common/navBar/NavBar'
export default {
  components:{
    NavBar
  }
}
</script>
<style lang="less" scoped>
.homeNavBar{
  .home-nav-bar{
    background-color: var(--color-tint);
    color: #fff;
  }
}
</style>