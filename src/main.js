import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 引入全局通用样式
import '@styles/main.scss'
// 移动端适配
import '@libs/flexible'

import '@libs'
import bus from '@utils/emit'


// import router from '@router' 
import router from './router/index'


new Vue({
  router,
  render: h => h(App)
  // render:(createElement)=>{
  //   return createElement(App)
  // }
}).$mount('#app')


//                            _ooOoo_
//                           o8888888o
//                           88" . "88
//                           (| -_- |)
//                            O\ = /O
//                        ____/`---'\____
//                      .   ' \\| |// `.
//                       / \\||| : |||// \
//                     / _||||| -:- |||||- \
//                       | | \\\ - /// | |
//                     | \_| ''\---/'' | |
//                      \ .-\__ `-` ___/-. /
//                   ___`. .' /--.--\ `. . __
//                ."" '< `.___\_<|>_/___.' >'"".
//               | | : `- \`.;`\ _ /`;.`/ - ` : | |
//                 \ \ `-. \_ __\ /__ _/ .-` / /
//         ======`-.____`-.___\_____/___.-`____.-'======
//                            `=---='
//
//         .............................................
//                  佛祖保佑             永无BUG
