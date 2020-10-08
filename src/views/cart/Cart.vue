<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>
<script>
import NavBar from 'components/common/navBar/NavBar'
import CartList from './childComp/CartList'
import CartBottomBar from './childComp/CartBottomBar'

import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      count: 0,
      cartList: []
    }
  },
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    ...mapGetters(['cartLength','cartList'])
  }
}
</script>
<style lang="less" scoped>
  #cart{
    .nav-bar{
      background-color: var(--color-tint);
      color: #fff;
      font-weight: 700;
    }
  }
</style>