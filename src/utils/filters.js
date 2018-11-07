
import Vue from 'vue'

Vue.filter('handleImg',(imgUrl)=>{
    let arr = imgUrl.split('/')
    return 'https://p0.meituan.net/128.180/movie/'+arr[arr.length-1]
})