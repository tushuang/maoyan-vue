<template>
    <div>
        <div
        class="citys-crosswise">
            <p class="crosswise-class">定位城市</p>
            <ul class="crosswise-list">
                <li class="crosswise-item">
                {{activeCity.name}}
                </li> 
            </ul>    
        </div>
        <div
        class="citys-crosswise">
            <p class="crosswise-class">热门城市</p>
            <ul class="crosswise-list">
                <li 
                @click="changeCurrentCity(city.id,city.city)"
                v-for="city in hotCitys" :key="city.id" class="crosswise-item">
                {{city.city}}
                </li> 
            </ul>    
        </div>
    </div>
    
    
</template>

<script>
import { CHANGE_CITY } from '@/store/chunks/mutation_types' 

export default {
    components:{
    },
    data(){
        return{
            hotCitys:[
                {id:10,city:'上海'},
                {id:1,city:'北京'},
                {id:20,city:'广州'},
                {id:30,city:'深圳'},
                {id:57,city:'武汉'},
                {id:40,city:'天津'},
                {id:42,city:'西安'},
                {id:55,city:'南京'},
                {id:50,city:'杭州'},
                {id:59,city:'成都'},
                {id:45,city:'重庆'},
            ],
        }
    },
    computed:{
        activeCity(){
            // 刷新时
            console.log(JSON.parse(localStorage.getItem('city')))
            return this.$store.state.chunks.city
        }
    },
    methods:{
        changeCurrentCity(id,nm){
            this.$store.commit({
                type:'chunks/'+ CHANGE_CITY,
                city:{
                    id,
                    name:nm
                }
            })
            console.log(this.$cookies)
            this.$cookies.set('cityname', this.$store.state.chunks.city.name)
            
            this.$router.push({name:'home'})
        }
    }
}
</script>

<style lang="scss">
    .citys-crosswise{
        // background: #ebebeb;
        // font-size: .373333rem;
        // color: #333;
        .crosswise-class{
            padding-left: .4rem;
            line-height: .8rem;
            background: #ebebeb;
        }
        .crosswise-list{
            background-color: #f5f5f5;
            padding-bottom: .213333rem;
            display: flex;
            flex-wrap: wrap;
            // margin-right: .266667rem;
            .crosswise-item{
                width: auto;
                min-width: 26%;
                height: .88rem;
                line-height: .88rem;
                width: auto;
                margin-top: .4rem;
                margin-left: .4rem;
                padding: 0 .533333rem;
                border: 1px solid #e6e6e6;
                text-align: center;
                border-radius: .08rem;
                background: white;
            }
        }
    }
</style>
