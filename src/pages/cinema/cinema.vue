<template>
    <div>
        <cinema-list></cinema-list>
        <app-footer></app-footer>
    </div>
</template>

<script>
import cinemaList from '@c/common/cinema/cinemaList'
import AppFooter from '@c/layout/AppFooter'
export default {
    components:{
        AppFooter,
        cinemaList
    }
}
</script>

<style lang="scss">

</style>
