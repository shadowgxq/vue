<template>
  <div class="check-button" :class="{check: isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>  
</template>
<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="less" scoped>
  .check-button{
    border-radius: 50%;
    border: 2px soild #aaa;
  }
  .check{
      border-color: red;
      background-color: red;
    }
</style>