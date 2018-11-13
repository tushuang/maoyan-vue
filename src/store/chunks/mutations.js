
import {CHANGE_CITY} from './mutation_types'

const mutations = {
    [CHANGE_CITY]:(state,payload)=>{
        state.city = payload.city,
        state.cities = payload.cities
    }
}

export default mutations