import Vue from "vue";
import VueRouter from "vue-router";

import homeComponent from "@pages/home/home";
import cinemaComponent from "@pages/cinema/cinema";
import cinemaDetail from "@pages/cinemaDetail/cinemaDetail";
import detailComponent from "@pages/detail/detail";
import filmIntroComponent from "@pages/detail/filmIntro";
import homeMoviesList from "@c/common/home-components/homeMoviesList";
import comingList from "@c/common/home-components/homeComingList";
import myPage from "@pages/my/my";
import loginPage from "@pages/my/login";
import accountForm from "@c/common/login-type/account";
import phoneForm from "@c/common/login-type/phone";
import notFound from "@pages/notFound/notFound";
import citysList from "@pages/citys/citys";
import order from "@pages/order/order";
import searchComponent from "@pages/search/search";
import SelectSeat from "@pages/selectSeat";

const routes = [
  { path: "/", redirect: "/home/MovieOnInfoList" }, // 配置重定向
  {
    path: "/home",

    component: homeComponent,
    children: [
      {
        path: "MovieOnInfoList",
        name: "home",
        component: homeMoviesList
      },
      {
        path: "comingList",
        name: "home",
        component: comingList
      }
    ]
  },
  { path: "/cinema", name: "cinema", component: cinemaComponent },
  { path: "/cinemaDetail", name: "cinemaDetail", component: cinemaDetail },
  { path: "/search", name: "search", component: searchComponent },
  {
    path: "/detail/:id",
    name: "detail",
    component: detailComponent,
    props: true
  },
  {
    path: "/filmIntro/:id",
    name: "filmIntro",
    component: filmIntroComponent,
    props: true
  },
  { path: "/profile", name: "profile", component: myPage },
  { path: "/order", name: "order", component: order },
  { path: "/citys", name: "citys", component: citysList },
  {
    path: "/login",
    name: "login",
    component: loginPage,
    children: [
      {
        path: "account",
        name: "login",
        component: accountForm
      },
      {
        path: "phone",
        name: "login",
        component: phoneForm
      }
    ]
  },
  { path: "/seats", name: "seats", component: SelectSeat, beforeEnter: (to, from, next) => {
    let userInfo = localStorage.getItem('userInfo');
    if(userInfo){
      next()
    }else{
      next('/login/account')
    }
  } },
  { path: "/notFound", name: "notFound", component: notFound },
  { path: "**", redirect: "/notFound" }
];

// Vue.use(VueRouter)
const router = new VueRouter({
  mode: "history",
  routes // (缩写) 相当于 routes: routes
});

Vue.use(VueRouter);

export default router;
