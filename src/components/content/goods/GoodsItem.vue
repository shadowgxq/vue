<template>
  <div class="goods-item" @click="itemClick">
    <div><img :src="showImage" alt="" @load="imgLoad"></div>
    <div class="desc">
      <div class="title">{{ item.title }}</div>
      <div class="quantity">
        <div class="price">{{ item.price}}</div>
        <div class="collect"><van-icon name="star-o" />{{ item.cfav}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item:{
      type:Object
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit('itemImgLoad')
    },
    itemClick() {
      this.$router.push('/detail/'+this.item.iid)
    }
  },
  computed: {
    showImage() {
      return this.item.img || this.item.image || this.item.show.img
    }
  }
}
</script>
<style lang="less" scoped>
  .goods-item{
    padding: 10px 5px;
    width: 50vw;
    background-color: white;
    img{
      width: 100%;
      border-radius: 5px;
    }
    .desc{
      .title{
        font-size: 12px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .quantity{
        position: relative;
        display: flex;
        justify-content: space-around;
        font-size: 12px;
        padding: 0 40px;
        .price{
          color: var(--color-tint);
        }
      }
    }
  }
</style>