<template>
    <div class="content">
        <home-nav></home-nav>
        <home-movies-list></home-movies-list>
    </div>
</template>

<script>
import homeNav from '@c/common/home-components/homeNav'
import homeMoviesList from '@c/common/home-components/homeMoviesList'
export default {
    name:'home',
    components:{
        homeNav,
        homeMoviesList
    }
}
</script>

<style lang="scss">

</style>
