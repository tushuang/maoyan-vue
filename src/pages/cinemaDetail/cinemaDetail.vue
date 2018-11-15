<template>
    <div class="cinemaList-wrap">
        <div class="location-site">
            <span class="specific-site">
                <p class="site-name">{{site}}</p>
                <p class="specific">{{addr}}</p>
            </span> 
            <span class="site-icon">
                <i class="iconfont icon-location"></i>
            </span>
        </div>
        <cinema-swiper :movies = movies ></cinema-swiper>
        <cinema-set-meal :dealList = dealList></cinema-set-meal>
    </div>
</template>

<script>
import cinemaSwiper from '@c/common/cinemaDetail/cinemaSwiper'
import cinemaSetMeal from '@c/common/cinemaDetail/cinemaSetMeal'
export default {
    components:{
        cinemaSwiper,
        cinemaSetMeal
    },
    data(){
        return{
            site:'',
            addr:'',
            movies:null,
            dealList:null,
        }
    },
    methods:{
        async getCinemaDetail(){
            const data = await this.$http({
                url:'/my/ajax/cinemaDetail',
                params:{
                    cinemaId:this.$route.query.cinemaId
                }
            })
            this.movies = data.showData.movies
            this.dealList = data.dealList.dealList
        }
    },
    created(){
        this.site = this.$route.query.title
        this.addr = this.$route.query.addr
        this.$bus.$emit('getTitle',this.site)
        this.getCinemaDetail()
    }
}
</script>

<style lang="scss">
    .location-site{
        height: 1.973333rem;
        background: white;
        display: flex;
        justify-content: space-between;
        padding:.4rem .4rem;
        .specific-site{
            
            .site-name{
                font-size: .453333rem;
                line-height: .64rem;
                font-weight: 700;
                color: #333;
            }
            .specific{
                margin-top: 2px;
                font-size: 13px;
                line-height: 18.5px;
                color: #999;
                height: .48rem;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
                width: 6.933333rem;
            }
        }
        .site-icon{
            width: 1.893333rem;
            // line-height: 2.186667rem;
            border-left: .053333rem solid #efefef;
            text-align: center;
            line-height: 1.173333rem;
            i{
                font-size: .666667rem;
                color: blue;
                margin-left: .133333rem;
            }
        }
    }
</style>
