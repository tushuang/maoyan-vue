<template>
    <header class="app-header">
        <span v-if="isShow" @click="goBack" class="left-arrow">
            <i class="iconfont icon-jiantou1"></i>
        </span>
        
        <span class="title"> {{title?title:''}} </span>
    </header>
</template>

<script>
export default {
    data(){
        return {
            title:'猫眼电影',
            isShow:false
        }
    },
    methods:{
       changeTitle(_to){
           console.log(_to,'ok')
            switch(_to.name){
                case 'detail': this.title = _to.params.title;this.isShow=true;break;
                case 'cinema': this.title = '影院';this.isShow=false;break;
                case 'login': this.title = '登录';this.isShow=true;break;
                case 'profile':this.title = "个人中心"; this.isShow = true; break;
                default: this.title = '猫眼电影';this.isShow=false;
            }
       },
       goBack(){
           this.$router.go(-1)
       }
    },
    created(){
        this.$router.beforeEach((to, from, next) => {
            let _to = to || this.$route
            this.changeTitle(_to)
            next()
        })
        
        this.$bus.$on('changeTitle',()=>{
            this.changeTitle(this.$route)
        })
        
    }
}
</script>

<style lang="scss">
    .app-header{
        width: 100%;
        height: 1.36rem;
        background:#e54847;
        text-align: center;
        position: fixed;
        top: 0px;
        left: 0px;
        z-index: 999;
       .title{
           color: white;
           font-size: .48rem;
           line-height:1.36rem;
       }
       .left-arrow{
           float: left;
           line-height: 1.36rem;
           padding-left: .266667rem;
           color: white;
           font-weight: bold;
       }
    }
</style>


