<template>
    <div>
        <nav class="home-nav">
            <ul>
                <router-link tag="li" :to="{name:'citys'}" class="home-site">
                    {{chunks.city.name}}
                    <i class="iconfont icon-jiantou-copy-copy"></i>
                </router-link>
                <li class="active-switch">
                    <router-link 
                    tag = 'span' 
                    :to = info.path 
                    v-for = "info in infos" 
                    :key = "info.id" 
                    :class = "(type==info.path)?className:''" >
                    {{info.title}}
                    </router-link>
                </li>
                <router-link tag='li' :to="'/search'" class="home-search">
                    <i class="iconfont icon-artboard9-copy"></i>
                </router-link>
            </ul>
        </nav>
    </div>
    
</template>

<script>
 
import {CHANGE_CITY} from '@/store/chunks/mutation_types'
import { mapActions, mapState } from 'vuex'

export default {
    data(){ 
        return {
            infos:[
                {id:1, path:'/home/MovieOnInfoList',title:'正在热映'},
                {id:2, path:'/home/comingList',title:'即将上映'}
            ],
            type:'/home/MovieOnInfoList',
            className:'active'
        }
    },
    created(){
        this.$router.beforeEach((to, from, next) => {
            this.type = to.path;
            next()
        })
        
        this.type = this.$route.path 
        // 提交mutation状态去 定位城市 但如果用户已经更改城市 则不必要再去定位
        if(!localStorage.getItem('city')){
            this.$store.dispatch('chunks/getCurrentPosition')
            // console.log('activeCitys====>',chunks)
        }else{
            // 提交mutation状态
            this.$store.commit({
                type: 'chunks/' + CHANGE_CITY,
                cities: JSON.parse(localStorage.cities),
                city: JSON.parse(localStorage.city)
            })
        }
        
    },
    computed:{
        ...mapState(['chunks'])
    }
}
</script>

<style lang="scss">
    .home-nav{
        width: 100%;
        height: 1.173333rem;
        border-bottom: 1px solid #e6e6e6;
        position: fixed;
        top:1.293333rem;
        left: 0px;
        background: white;
        z-index: 999;
        ul{
            display: flex;
            justify-content: space-between;
            line-height: 1.173333rem;
            font-size: .4rem;
            color: #666666;
            .home-site{
                width: 1.6rem;
                margin-left: .4rem;
                i{
                    font-size:.213333rem;
                    vertical-align: middle;
                    color: #b0b0b0;
                }
            }
            .active-switch{
                width: 5.546667rem;
                font-weight: 700;
                display: flex;
                justify-content: space-around;
                text-align: center;
                span{
                    width: 2.133333rem;
                    margin: 0 .32rem;
                }
                .active{
                    border-bottom: .053333rem #ef4238 solid;
                    color: #ef4238
                }
            }
            .home-search{
                width: 1.2rem;
                height: 1.066667rem;
                text-align: center;
                
                i{
                    font-size: .533333rem;
                    color: #e54847;
                }
            }
        }
    }
</style>


