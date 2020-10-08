<template>
  <div class="detail-bar">
    <nav-bar>
      <div class="left" slot="left" @click="back">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div class="center" slot="center">
        <div v-for="(item,index) in title" :key="index" 
        :class="{red: index===currentIndex}"
        @click="navClick(index)">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>  
</template>
<script>
import NavBar from 'components/common/navBar/NavBar'
export default {
  data() {
    return{
      title:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  components: {
    NavBar
  },
  methods: {
    navClick(index) {
      this.currentIndex = index
      this.$emit('navClick',index)
    },
    back() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
.detail-bar{
  background-color: #fff;
  .left{
    line-height: 44px;
    img{
      margin-top: 10px;
      margin-left: 20px;
    }
  }
  .center{
    display: flex;
    div{
      font-size: 14px;
      flex: 1;
    }
    .red{
      color: var(--color-tint);
    }
  }
}
</style>