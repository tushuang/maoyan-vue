<template>
    <div>
        <search-film-list :filmList = 'filmList'></search-film-list>
        <search-cinema-list :cinemaList = 'cinemaList'></search-cinema-list>
    </div>
</template>

<script>
import searchCinemaList from '@c/common/search/searchCinemaList'
import searchFilmList from '@c/common/search/searchFilmList'
export default {
    components:{
        searchCinemaList,
        searchFilmList
    },
    props:['filmList','cinemaList']
   
}
</script>

<style lang="scss">

</style>
