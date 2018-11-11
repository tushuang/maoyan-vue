<template>
    <div>
        <profile-page></profile-page>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppFooter from '@c/layout/AppFooter'
import profilePage from '@c/common/profile/profile'
export default {
    components:{
        AppFooter,
        profilePage
    },
    beforeRouteEnter (to, from, next) {
        if(localStorage.getItem('userInfo')){
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
