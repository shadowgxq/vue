<template>
  <div class="homeSwiper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <div v-for="item in banner" :key="item.acm">
       <van-swipe-item class="img"><img :src="item.image" alt="" @load="bannerLoad"></van-swipe-item>
      </div>
    </van-swipe>
  </div>  
</template>
<script>
export default {
  props: {
    banner:{
      type:Array,
      default() {
        return []
      }
    }
  },
  methods: {
    bannerLoad() {
      this.$emit('bannerLoad')
    }
  }
}
</script>
<style>
.my-swipe .van-swipe-item {
    height: 195px;
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
  }
  .img img{
    width: 100%;
  }
</style>