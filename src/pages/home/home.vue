<template>
    <div class="content">
        <home-nav class="home-nav"></home-nav>
        <div id="movie-list" ref='scrollItem'>
            <keep-alive>
                <router-view ></router-view>
            </keep-alive>
        </div>
        
        <app-footer></app-footer>
    </div>
</template>

<script>
import homeNav from '@c/common/home-components/homeNav'
import AppFooter from '@c/layout/AppFooter'
import scroll from '@utils/scroll'

export default {
    name:'home',
    components:{
        homeNav,
        AppFooter
    },
    // beforeRouteEnter(){
    //     console.log('biubiubiubiu')
    //     scroll({
    //         el:this.$refs.scrollItem
    //     })
    // },
    mounted(){
        // console.log(this.$refs,'biubiu')
        scroll({
            el:this.$refs.scrollItem
        })
        this.$router.beforeEach((to, from, next) => {
            scroll({
                el:this.$refs.scrollItem
            })
            next()
        })
    }
   
}
</script>

<style lang="scss">
    .content{
        display: flex;
    }
    #movie-list{
        margin-top:1.066667rem;
        flex-grow: 1;
        flex-shrink: 1;
        height: 17.786667rem;
    }
</style>
