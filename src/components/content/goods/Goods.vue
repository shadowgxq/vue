<template>
  <div class="goods">
    <goods-item class="goods-item" v-for="(item,index) in goods" :key="index" :item="item">
      
    </goods-item>
  </div>
</template>
<script>
import GoodsItem from './GoodsItem'
export default {
  props: {
    goods:{
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodsItem
  }
}
</script>
<style lang="less" scoped>
.goods{
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
}
</style>