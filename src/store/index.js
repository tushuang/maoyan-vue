import Vue from 'vue'
import Vuex from 'vuex'

import {saveCityInfo} from './plugins'

Vue.use(Vuex)

import chunks from './chunks'

const store = new Vuex.Store({
    modules:{
        chunks
    },
    plugins:[saveCityInfo]
})
export default store
