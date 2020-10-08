<template>
  <div class="detail-swiper">
    <van-swipe class="my-swipe" style="height: 300px;" :autoplay="3000" indicator-color="white">    
      <van-swipe-item v-for="(item,index) in topImages" :key="index">
        <img :src="item" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>  
</template>
<script>
export default {
  props: {
    topImages:{
      type:Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style lang="less" scoped>
.detail-swiper{
  img{
    width: 100%;
  }
}
</style>