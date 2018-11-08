
import axios from 'axios'


const ajax = ( options ,all = false)=>{
    return new Promise((resolve, rejected)=>{
        axios(options).then(res=>{
           all? resolve(res): resolve(res.data)
        }).catch((err)=>{
            console.log(数据请求失败)
            rejected(err)
        })
    })
    
    
}

export default ajax