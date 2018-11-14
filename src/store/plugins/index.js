
import mutations from "../chunks/mutations";
import {CHANGE_CITY} from '../chunks/mutation_types'
// 一刷新数据就会没有 所以准备在每次提交mutation时都存一次
// 所以选择了plugin plugin会在每次提交mutation之后执行



const saveCityInfo = (store) => {
    store.subscribe((mutation, state)=>{
        // 不必要每次提交mutation时都提交 要判断提交的mutation类型
        if(mutation.type === 'chunks/'+ CHANGE_CITY){
            localStorage.city = JSON.stringify(mutation.payload.city)
            if(mutation.payload.cities) localStorage.cities = JSON.stringify(mutation.payload.cities);
        }
        
    })
}

export {saveCityInfo}