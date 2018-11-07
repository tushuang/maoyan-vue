import Vue from 'vue'

import ajax from '@utils/ajax'
// 可以将axios 挂载在 Vue的原型上 所有的组件都可以用


import "@utils/filters"
Vue.prototype.$http = ajax 