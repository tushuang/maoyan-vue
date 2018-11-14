
import ajax from '@utils/ajax'
import _ from 'lodash'
import {CHANGE_CITY} from './mutation_types'

const actions = {
    // 先获得城市的定位信息
    async getCurrentPosition(context,payload){
        // 获得城市信息
        let cities = await ajax({
            url:'/my/dianying/cities.json',
        })
        let positionCity = await ajax({
            url:'/ps/location/ip',
            params: {
                ak: 'EajH3hpCLeGgNMbnPqbVl1Bm9PWGD0HO'
            }
        },true)
        //  得到信息后 再去提交mutation
        if(positionCity.data.status === 0){
            let name = positionCity.data.content.address.replace('市','')
            let index = _.findIndex(cities.cts,function(item){
                return item.nm == '北京'
            })
            if(index!=-1){
                var id = cities.cts[index].id
            }
            context.commit({
                type:CHANGE_CITY,
                city:{
                    id,
                    name
                },
                cities:cities.cts
            })
        }
    }
}

export default actions