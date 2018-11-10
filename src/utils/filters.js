
import Vue from 'vue'

Vue.filter('handleImg',(imgUrl)=>{
    let arr = imgUrl.split('/')
    return 'https://p0.meituan.net/128.180/movie/'+arr[arr.length-1]
})

Vue.filter('handleDate',(date)=>{
    let arr = date.split('-')
    let day = new Date(date).getDay()
    switch(isNowDay(date)){
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

function isNowDay(d){
    var td=new Date();
    td=new Date(td.getFullYear(),td.getMonth(),td.getDate());
    var od=new Date(d);
    od=new Date(od.getFullYear(),od.getMonth(),od.getDate());
    var xc=(od-td)/1000/60/60/24;
    console.log(xc)
    if(xc==0){
       return 0;
    }else if(xc<2){
       return 1;
    }else if(xc<3){
       return 2;
    }
}

function formatDate(w,m,d){
    return w + m +'月'+ d +'日'
}