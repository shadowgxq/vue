<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>  
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
  .nav-bar{
    display: flex;
    height: 44px;
    .left{
      width: 60px;
    }
    .center{
      flex: 1;
      text-align: center;
      line-height: 44px;
    }
    .right{
      width: 60px;
    }
  }
</style>