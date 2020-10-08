
<template>
  <div class="profile">
     <nav-bar class="nav-bar">
        <div class="center" slot="center">仿蘑菇街商城</div>
      </nav-bar>
      <div class="login">
         <div class="img">
         </div>
         <div class="login-login">
            <div>登录/注册</div>
            <div class="phone"><span></span>暂无绑定手机号</div>
         </div>
         <div class="arrow">
            <span>></span>
         </div>
      </div>
      <div class="account">
         <div class="acount-child"> 
            <div>0.00元</div>
            <div>我的余额</div>
         </div>
         <div class="acount-child"> 
            <div>0个</div>
            <div>我的优惠</div>
         </div>
         <div class="acount-child"> 
            <div>0分</div>
            <div>我的积分</div>
         </div>
         
      </div>
      <div class="message">
         <div>
            <span></span>
            我的消息
         </div>
         <div>
            <span></span>
            积分商城
         </div>
         <div>
            <span></span>
            会员卡
         </div>
      </div>
      <div class="shopping">
         <div>
            <span></span>
            我的购物车
         </div>
         <div>
            <span></span>
            下载购物的APP
         </div>
      </div>
  </div>
</template>
<script>
import NavBar from 'components/common/navBar/NavBar'
export default {
   name:'Profile',
   components: {
      NavBar
   }
}
</script>
<style lang="less" scoped>
   .profile{
      width: 100vw;
      .nav-bar{
         background-color: var(--color-tint);
         .center{
            color: #fff;
         }
      }
      .login{
         padding: 10px 10px;
         background-color: var(--color-tint);
         display: flex;
         align-items: center;
         color: #fff;
         .img{
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-color: #fff;
           
         }
         .login-login{
            margin-left: 20px;
            .phone{
             font-size: 12px;
            }
         }
         .arrow{
            margin-left: 180px;
         }
      }
      .account{
         width: 100%;
         display: flex;
         border-bottom: 10px solid rgba(100,100,100,.2);
         .acount-child{
            padding: 30px 0;
            text-align: center;
            flex: 1;
            border-right: 1px solid rgba(100,100,100,.3);
            div{
               &:nth-child(1){
                  color: red;
                  font-size: 18px;
                  font-weight: 700;
               }
               &:nth-child(2){
                  margin-top: 10px;
                  font-size: 14px;
               }
            }
         }
      }
      .message{
         color: #000;
         padding: 10px;
         border-bottom: 5px solid rgba(100,100,100,.2);
         div{
            padding: 15px 0px;
             border-bottom: 1px solid rgba(100,100,100,.1);
         }
      }
      .shopping{
         color: #000;
         padding: 10px;
         div{
            padding: 15px 0px;
             border-bottom: 1px solid rgba(100,100,100,.1);
         }
      }
   }
</style>