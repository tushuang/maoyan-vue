import Vue from 'vue'
import VueRouter from 'vue-router'

import homeComponent from '@pages/home/home'
import cinemaComponent from '@pages/cinema/cinema'
import detailComponent from '@pages/detail/detail'
import homeMoviesList from '@c/common/home-components/homeMoviesList'
import comingList from '@c/common/home-components/homeComingList'
import myPage from '@pages/my/my'
import loginPage from '@pages/my/login'
import accountForm from '@c/common/login-type/account'
import phoneForm from '@c/common/login-type/phone'
import notFound from '@pages/notFound/notFound'

const routes = [
    { path: '/', redirect: '/home/MovieOnInfoList' }, // 配置重定向
    { 
        path: '/home', 
        
        component: homeComponent ,
        children: [
            {
              path: 'MovieOnInfoList',
              name:'home', 
              component: homeMoviesList
            },
            {
              path: 'comingList',
              component: comingList
            }
        ]
    },
    { path:'/cinema', name:'cinema', component: cinemaComponent},
    { path:'/detail/:id', name:'detail', component: detailComponent},
    { path:'/profile', name:'profile', component: myPage},
    { path:'/login', name:'login', component: loginPage,
        children: [
            {
            path: 'account',
            component: accountForm
            },
            {
            path: 'phone',
            component: phoneForm
            }
        ]
    },
 { path:'/notFound', name:'notFound', component: notFound},
 { path: '**',redirect: '/notFound'}
]

// Vue.use(VueRouter)
const router = new VueRouter({
    mode:'history',
    routes // (缩写) 相当于 routes: routes
})

Vue.use(VueRouter)

export default router   