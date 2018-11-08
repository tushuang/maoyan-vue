<template>
    <div>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppFooter from '@c/layout/AppFooter'
export default {
    components:{
        AppFooter
    },
    beforeRouteEnter (to, from, next) {
        if(!localStorage.getItem('userInfo')){
            console.log('biubiubiu')
            next('/login/account')
        }else{
            next()
        }
        
    },
}
</script>

<style lang="scss">

</style>
