<template>
  <div v-if="Object.keys(goods).length !== 0" class="detail-base-info">
    <div class="title">{{goods.desc}}</div>
    <div class="price">
      <span class="newPrice">{{goods.newPrice}}</span>
      <span class="oldPrice">{{ goods.oldPrice }}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>  
    <div class="tip">
      <div v-for="(item,index) in goods.columns" :key="index">
        {{item}}
      </div>
    </div>
    <div class="serve">
      <div v-for="(item,index) in goods.services" :key="index">
        <span><img :src="item.icon||''" alt=""></span><span>{{ item.name }}</span>
      </div>
    </div>
  </div>  
</template>
<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed:  {
    length() {
      return this.goods.services.length-1
    }
  }
}
</script>
<style lang="less" scoped>
  .detail-base-info{
    .title{
      margin: 5px;
      color: #222;
      font-size: 16px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .price{
      padding: 5px;
      position: relative;
      .newPrice{
        color: var(--color-tint);
        font-size: 24px;
      }
      .oldPrice{
        color: #999;
        font-size: 14px;
        text-decoration: line-through;
      }
      .discount{
        position: absolute;
        top: 2px;
        margin: 0px 0px 0px 5px;
        padding: 2px 5px;
        font-size: 12px;
        background-color:rgb(241, 62, 58);
        color: #fff;
        border-radius: 8px;
      }
    }
    .tip{
      padding: 10px 5px;
      display: flex;
      font-size: 12px;
      color: #999;
      border-bottom: 1px solid rgba(0,0,0,.1);
      div{
        flex: 1;
        display: flex;
        justify-content: center;
      }
    }
    .serve{
      padding: 15px 0px;
      display: flex;
      justify-content: space-between;
      white-space: nowrap;
      overflow: hidden;
      border-bottom: 5px solid rgba(100, 100, 100, .1);
      div{
        padding: 0 10px;
        span{
          font-size: 12px;
          img{
            width: 14px;
            height: 14px;
          }
        }
      }
    }
  }
</style>