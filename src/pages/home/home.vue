<template>
    <div class="content">
        <home-nav class="home-nav"></home-nav>
        <!-- <div id="movie-list" ref='scrollItem'> -->
            <keep-alive>
                <router-view ></router-view>
            </keep-alive>
        <!-- </div> -->
        
        <app-footer></app-footer>
    </div>
</template>

<script>
import homeNav from '@c/common/home-components/homeNav'
import AppFooter from '@c/layout/AppFooter'
// import scroll from '@utils/scroll'

export default {
    name:'home',
    components:{
        homeNav,
        AppFooter,
    },
    methods:{
        loadScroll(){
            scroll({
                el:this.$refs.scrollItem
            })  
        }
    },
    mounted(){
        this.loadScroll()
    },
    watch: {
        '$route.path': {  // 监听路径 变化时dom没有加载完
            handler() {
                this.$nextTick(() => { 
                    this.loadScroll()
                })
            }
        }
    }
}
</script>

<style lang="scss">
    .content{
        display: flex;
        margin-top: 1.2rem;
    }
</style>
