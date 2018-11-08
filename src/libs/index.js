import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import ajax from '@utils/ajax'
// 可以将axios 挂载在 Vue的原型上 所有的组件都可以用


import "@utils/filters"

import bus from '@utils/emit'

Vue.use(VueAwesomeSwiper)
Vue.prototype.$http = ajax 
Vue.prototype.$bus = bus