
import Vue from 'vue'

Vue.filter('handleImg',(imgUrl)=>{
    let arr = imgUrl.split('/')
    return 'https://p0.meituan.net/128.180/movie/'+arr[arr.length-1]
})

Vue.filter('handleDate',(date)=>{
    let arr = date.split('-')
    let day = new Date(date).getDay()
    switch(isNowDay(day)){
        case 0: return formatDate('今天',arr[1],arr[2])
        case 1: return formatDate('明天',arr[1],arr[2])
        case 2: return formatDate('后天',arr[1],arr[2])
        default: {
            switch(day){
                case 0: return formatDate('周天',arr[1],arr[2])
                case 1: return formatDate('周一',arr[1],arr[2])
                case 2: return formatDate('周二',arr[1],arr[2])
                case 3: return formatDate('周三',arr[1],arr[2])
                case 4: return formatDate('周四',arr[1],arr[2])
                case 5: return formatDate('周五',arr[1],arr[2])
                case 6: return formatDate('周六',arr[1],arr[2])
            }
        } 
    }
})

function isNowDay(day){
    let _day = new Date().getDay();
    // if(_day != 6) _day+=1
    // else _day = 0
    console.log(day,_day)
    return (Math.abs( _day-day))
}

function formatDate(w,m,d){
    return w + m +'月'+ d +'日'
}