<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="info-header">
      <div class="rate">用户评价</div>
      <div class="more">更多</div>
    </div>
    <div class="info-body">
      <div class="user"><img :src="commentInfo.user.avatar" alt=""></div>
      <div class="user-name">{{commentInfo.user.uname}}</div>
    </div>
    <div class="info-content">
      <span>{{ commentInfo.content}}</span>
    </div>
    <div class="bottom">
      <div class="date">{{ commentInfo.created | showDate}}</div>
      <div class="size">{{ commentInfo.style }}</div>
    </div>
  </div>  
</template>
<script>
import {formatDate} from 'common/util.js'
export default {
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    showDate(value) {
      const date = new Date(value*1000)
      return formatDate(date,'yyyy-MM-dd')
    }
  }
}
</script>
<style lang="less" scoped>
.comment-info{
  padding: 10px;
  .info-header{
    display: flex;
    padding: 5px;
    border-bottom: 1px solid rgba(100,100,100,.1);
    .rate{
      font-size: 16px;
      width: 90%;
    }
    .more{
      font-size: 12px;
      color: #222;
    }
  }
  .info-body{
    padding: 10px;
     display: flex;
     height: 64px;
    .user{
      border-radius: 50%;
      overflow: hidden;  
      img{
        width: 40px;
      }
    }
    .user-name{
      color: #222;
      line-height: 44px;
      margin-left: 20px;
    }
  }
  .info-content{
    padding: 10px;
    color: #777;
    font-size: 14px;
  }
  .bottom{
    padding: 0 10px;
    display: flex;
    font-size: 12px;
     color: #999;
  }
}
</style>