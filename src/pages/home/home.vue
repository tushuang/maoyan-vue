<template>
    <div class="content">
        <home-nav></home-nav>
        <div id="movie-list">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        
        <app-footer></app-footer>
    </div>
</template>

<script>
import homeNav from '@c/common/home-components/homeNav'
import AppFooter from '@c/layout/AppFooter'


export default {
    name:'home',
    components:{
        homeNav,
        AppFooter
    }
   
}
</script>

<style lang="scss">
    #movie-list{
        margin-top: 1.36rem;
        height: 17.786667rem;
    }
</style>
