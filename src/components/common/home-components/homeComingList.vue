<template>
    <div class='coming-list-wrapper' ref='comingScroll'>
        <coming-list-swiper></coming-list-swiper>
    </div>
</template>

<script>
import ComingListSwiper from '@c/common/home-components/comingListSwiper'

export default {
    components:{
        ComingListSwiper
    }
}
</script>

<style lang="scss">
    .coming-list-wrapper{
        height: 14.133333rem;
    }
</style>
