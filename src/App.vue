<template>
  <div class="app-contnet">
    <app-header></app-header>
    <div class="banner-content">
      <router-view></router-view>
    </div>
    
    <app-footer></app-footer>
  </div>
</template>

<script>

import AppHeader from '@c/layout/AppHeader'
import AppFooter from '@c/layout/AppFooter'



export default {
  name:'app',
  components:{
    AppHeader,
    AppFooter
  }
}
</script>


<style lang="scss">
  .app-contnet{
    height: 17.786667rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .banner-content{
    // flex-grow: 0;
    margin-top: 1.293333rem;
    // height: 17.786667rem;
    // margin-bottom: 1.421333rem;
  }
</style>




