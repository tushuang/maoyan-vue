<template>
    <div class="app-detail">
        <movie-detail></movie-detail>
        <cinema-msg-box></cinema-msg-box>
    </div>
</template>

<script>

import movieDetail from '@c/common/detail/movie-detail'
import cinemaMsgBox from '@c/layout/cinema-msg-box'

export default { 
    components:{
        movieDetail,
        cinemaMsgBox
    }
}
</script>

<style lang="scss">
    .app-detail{
        height: 100%;
    }
</style>
