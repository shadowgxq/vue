<template>
  <div class="detailShopInfo">
    <div class="logo">
      <div class="shop-logo"><img :src="shop.logo" alt=""></div>
      <div class="shop-name">{{shop.name}}</div>
    </div>
    <div class="shop-message">
      <div class="seller">
        <div>
          <div class="sells">{{shop.sells | sellCountFilter}}</div>
          <div class="seller-text">总销量</div>
        </div>
        <div>
          <div class="sells">{{shop.goodsCount}}</div>
          <div class="seller-text">全部宝贝</div>
        </div>
      </div>
      <div class="evaluate">
        <div class="evaluate-item" v-for="(item, index) in shop.score" :key="index">
          <div class="item">{{item.name}}</div>
          <div  :class="item.isBetter ? 'red' : 'green'">
            <span>{{item.score}} </span>
            <span class="high-low">
              <span v-if="item.isBetter">高</span>
              <span v-else>低</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="into">进店逛逛</div>
  </div>
</template>
<script>
export default {
  props: {
    shop: {
      type:Object,
      default() {}
    }
  },
  filters: {
      sellCountFilter: function (value) {
        if (value < 10000) return value;
        return (value/10000).toFixed(1) + '万'
      }
  }
}
</script>
<style lang="less" scoped>
.detailShopInfo{
  padding-bottom: 25px;
  border-bottom: 5px solid rgba(100,100,100,.1);
  .logo{
    display: flex;
    padding: 10px 5px;
    .shop-logo{
      width: 50px;
      height: 50px;
      border: 1px solid #ccc;
      border-radius: 50%;
      overflow: hidden;
      img{
        width: 45px;
        height: 45px;
      }
    }
    .shop-name{
      margin: 20px 0px 0px 10px;
    }
  }
  .shop-message{
    padding: 10px 20px;
    display: flex;
    justify-content: space-around;
    .seller{
      width: 45%;
      display: flex;
      border-right:2px solid rgba(100,100,100,.1) ;
      div{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .sells{
        font-size: 20px;
        color: #222;
      }
      .seller-text{
        font-size: 12px;
        color: #222;
      }
      }
      

    }
    .evaluate{
      .evaluate-item{
        display: flex;
        font-size: 14px;
        color: #222;
        .item{
          margin-right: 20px;
        }
        .green{
          color: #5ea732;
          .high-low{
            background-color: #5ea732;
            color: #fff;
          }
        }
        .red{
          color: red;
           .high-low{
            background-color: red;
            color: #fff;

          }
        }
      }
    }
  }
  .into{
    width: 130px;
    text-align: center;
    border-radius: 10px;
    background-color: #f2f5f8;
    padding: 5px 10px;
    margin: 0 auto;
  }
}
</style>