import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Swipe, SwipeItem ,Toast, Button, Icon} from 'vant';

import 'assets/css/base.css'
import 'assets/font/iconfont.css'

Vue.prototype.$bus =  new Vue()

Vue.use(Swipe).use(SwipeItem).use(Toast).use(Button).use(Icon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
