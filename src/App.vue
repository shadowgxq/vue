<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <tab-bar></tab-bar>
    
  </div>
</template>
<script>
import TabBar from 'components/content/tabBar/TabBar'
export default {
  name: 'Home',
  components: {
    TabBar
  }
}
</script>
<style lang="less">

</style>
