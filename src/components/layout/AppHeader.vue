<template>
    <header class="app-header">
        <span class="title"> {{title?title:''}} </span>
    </header>
</template>

<script>
export default {
    data(){
        return {
            title:'猫眼电影'
        }
    },
    methods:{
       changeTitle(_to){
            switch(_to.name){
                case 'detail': this.title = _to.params.title;break;
                case 'cinema': this.title = '影院';break;
                default: this.title = '猫眼电影';
            }
       }
    },
    created(){
        console.log(this.$route.params,'11111')
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
    }
</style>


