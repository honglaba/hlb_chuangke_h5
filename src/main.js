// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import fastClick from 'fastclick'
import VueClipboard from 'vue-clipboard2'
// import VueLazyload from 'vue-lazyload'
import Headerx from '@/components/common/headerx/headerx'
import myHeader from 'components/common/headerx/header'
import Footerx from '@/components/common/footerx/footerx'
import { ToastPlugin, ConfirmPlugin, AlertPlugin, LoadingPlugin, Loading } from 'vux'
import md5 from 'js-md5'
// import BScroll from 'better-scroll'
// import VueScroller from 'vue-scroller'
// import { ENV } from 'tools/env'
import { ConsoleFun } from 'tools/util'
// import VConsole from 'vconsole' // 调试
import VueLazyload from 'vue-lazyload'

/* eslint-disable no-new */
// if (ENV) new VConsole()
// new VConsole()

// Vue.use(VueScroller)
fastClick.attach(document.body)

// 自定义请求头
axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'
Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.$md5 = md5
Vue.prototype.$printf = ConsoleFun

// 全局组件
Vue.component('my-header', myHeader) // 自定义头部
Vue.component('Headerx', Headerx)
Vue.component('Footerx', Footerx)
Vue.component('x-loading', Loading)
// Vue.component('BScroll', BScroll)

Vue.use(ToastPlugin, {type: 'text', time: 1500})
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)
Vue.use(AlertPlugin)
Vue.use(VueClipboard)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '../static/images/商品默认图.png',
  loading: '../static/images/商品默认图.png',
  attempt: 1
})

Vue.filter('mobilePhoneFilter', val => { // 手机号码过滤器
  if (!val) return '未绑定'
  return val.slice(0, 3) + '****' + val.slice(7, 12)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
