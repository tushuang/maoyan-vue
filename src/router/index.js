import Vue from 'vue'
import VueRouter from 'vue-router'

import homeComponent from '@pages/home/home'
import cinemaComponent from '@pages/cinema/cinema'
import detailComponent from '@pages/detail/detail'

const routes = [
    { path: '/', redirect: '/home' }, // 配置重定向
    { path: '/home', name:'home', component: homeComponent },
    { path:'/cinema', name:'cinema', component: cinemaComponent},
    { path:'/detail/:id', name:'detail', component: detailComponent}
]

// Vue.use(VueRouter)
const router = new VueRouter({
    mode:'history',
    routes // (缩写) 相当于 routes: routes
})

Vue.use(VueRouter)

export default router   