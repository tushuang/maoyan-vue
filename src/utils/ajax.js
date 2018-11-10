
import axios from 'axios'
import { Indicator } from 'mint-ui';

const ajax = ( options ,all = false)=>{
    Indicator.open({
        text: '加载中...',
        spinnerType: 'triple-bounce'
    });
    return new Promise((resolve, rejected)=>{
        axios(options).then(res=>{
           all? resolve(res): resolve(res.data)
           Indicator.close()
        }).catch((err)=>{
            console.log(数据请求失败)
            Indicator.close()
            rejected(err)
        })
    })
    
    
}

export default ajax