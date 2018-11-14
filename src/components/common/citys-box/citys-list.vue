<template>
    <mt-index-list>
        <citys-crosswise></citys-crosswise>
        <mt-index-section
        v-for = "(value, key) in cities"
        :key  = "key"
        :index="key"
        >
            <mt-cell
            v-for = "city in value"
            :key  = "city.id"
            :title= "city.nm" 
            @click.native="changeCurrentCity(city.id,city.nm)"
            ></mt-cell>
        </mt-index-section>
    </mt-index-list>   
</template>


<script>

import cities from '@utils'
import citysCrosswise from '@c/common/citys-box/citys-crosswise'
import { IndexList, IndexSection, Cell } from 'mint-ui'
import { mapMutations } from 'vuex'
import { CHANGE_CITY } from '@/store/chunks/mutation_types'

export default {
  components: {
        citysCrosswise,
        [IndexList.name]: IndexList,
        [IndexSection.name]: IndexSection,
        [Cell.name]: Cell
    },
    methods:{
        // 点击城市时 改变state中当前城市的信息 需要提交mutation去改
        changeCurrentCity(id,nm){
            this.$store.commit({
                type:'chunks/'+ CHANGE_CITY,
                city:{
                    id,
                    name:nm
                }
            })
            this.$cookies.set('cityname', this.$store.state.chunks.city.name)
            this.$router.push({name:'home'})
        }
    },
    computed: {
        cities () {
            // 直接在状态树里取得城市信息
            return cities(JSON.parse(localStorage.cities))
        }
    }
};
</script>

<style lang="scss">

</style>
