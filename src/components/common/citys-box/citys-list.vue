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
            ></mt-cell>
        </mt-index-section>
    </mt-index-list>   
</template>


<script>
import cities from '@utils'
import citysCrosswise from '@c/common/citys-box/citys-crosswise'
import { IndexList, IndexSection, Cell } from 'mint-ui';
export default {
  components: {
      citysCrosswise,
    [IndexList.name]: IndexList,
    [IndexSection.name]: IndexSection,
    [Cell.name]: Cell
    },
    data () {
        return {
            citys: []
        }
    },
    beforeCreate () {
        this.$http({
            url: '/my/dianying/cities.json'
        }).then((res)=>{
            this.citys = res.cts
        })
        
    },
    computed: {
        cities () {
            return cities(this.citys)
        }
    }
};
</script>

<style lang="scss">

</style>
