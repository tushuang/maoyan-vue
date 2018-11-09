<template>
    <footer  class="footer">
        <router-link tag="div"  
        :to = '{name:info.name}' 
        active-class="active" 
        v-for="info in infos" 
        :key = "info.id" 
        class="footer-item"
        :class="{active:(info.name==path)}"
        >
            <i :class = "info.iconfont"></i>
            <span>{{info.title}}</span>
        </router-link>
    </footer>
</template>

<script>
export default {
    data(){
        return{
           infos:[ {id:1,iconfont:"iconfont icon-74",title:'电影', name:'home'},
            {id:2,iconfont:"iconfont icon-yingyuanA",title:'影院', name:'cinema'},
            {id:3,iconfont:"iconfont icon-wode",title:'我的', name:'profile'}],
            path:'home' // 可以加个class 看当前的￥router 防止页面刷新的时候信息跑丢
        }
    },
    created(){
        // if(this.$route.path == 'home') this.addClass = true
        // else this.addClass = false
        // console.log(this.$route)
        this.path = this.$route.name
    }
}
</script>

<style lang="scss">
    .footer{
        height: 1.293333rem;
        border-top: .5px solid #d8d8d8;
        width: 100%;
        display: flex;
        position: fixed;
        bottom: 0px;
        left: 0px;
        justify-content: space-around;
        align-items: center;
        background: white;
        z-index: 999;
        .footer-item{
            display: flex;
            flex-direction: column;
            i{
                font-size: .666667rem;
            }
            span{
                font-size: .266667rem;
                color: #696969;
            }
        }
        .active{
            color: #e54847;
        }
    }
</style>

