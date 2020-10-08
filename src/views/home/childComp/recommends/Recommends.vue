<template>
  <div class="recommends">
    <div class="mainre">
      <div class="recommends-item" v-for="item in recommends" :key="item.acm">
        <div><img :src="item.image" alt=""></div>
        <div>{{item.title}}</div>
      </div>  
    </div>  
  </div>  
</template>
<script>
export default {
  props: {
    recommends: {
      type:Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style lang="less" scoped>
.recommends{
  border-bottom: 10px solid rgba(100,100,100,.1);
  padding: 20px 10px;
  .mainre{
    display: flex;
    .recommends-item{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img{
        width: 70px;
      }
    }
  }
}
</style>