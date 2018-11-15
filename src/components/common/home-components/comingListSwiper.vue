<template>
<div class="loadmore">
<mt-loadmore :bottom-method="parentMethod"  :bottom-all-loaded="allLoaded" ref="loadmore"> 
    <div class="coming-list-warp">
        <div class="recent-expect">
            <p class="recent-title">近期最受期待</p>
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide v-if="movieLists"   v-for="item in movieLists" :key='item.id'>
                    <div class="swiper-item" @click="go(item.id,item.nm)">
                        <div class="img-box">
                           <img width="85" height="115" :src="item.img | handleImg" alt="item.nm"> 
                           <div class="hreat-bg">
                               <span class="hreat-img"></span>
                           </div>
                           <div class="widh-bg">
                               <span class="wish-num"> {{item.wish}}人想看 </span>
                           </div>
                           
                        </div>
                        <p class="movie-nm">{{item.nm}}</p>
                        <p class="show-time">{{item.comingTitle}}</p>
                    </div> 
                </swiper-slide>
            </swiper>
        </div>
        <coming-list ref="comingList"></coming-list>
    </div>
</mt-loadmore> 
</div>
   
</template>

<script>
import { Loadmore } from 'mint-ui';
import comingList from '@c/common/home-components/comingList'
export default {
    components:{
        [Loadmore.name]:Loadmore,
        comingList
    },
    data(){
        return {
            swiperOption: {
                slidesPerView : 3.5,
                spaceBetween : 10
            },
            movieLists:null,
            allLoaded:false
            // 定义一个title
        }
    },
    methods:{
        parentMethod() {
            this.$refs.comingList.loadMore()
            this.$refs.loadmore.onBottomLoaded();
        },
        go(_id,_title){
            // 应该在跳转的时候 存入标题
            this.$router.push({name:'filmIntro',params:{id:_id,title:_title}})
        },
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
    created() {
        this.$http({
            url:'/my/ajax/mostExpected?&token=',
            params:{
                ci:1,
                limit:10
            }
        }).then((res)=>{
            this.movieLists = res.coming
        })
    }
}
</script>

<style lang="scss">
    .coming-list{
        margin-bottom: 0px;
    }
    .loadmore{
        overflow: scroll;
        height: 100%;
    }
    .coming-list-warp{
        min-height: 16rem;
    }
    .swiper-container{
        width: 9.066667rem;
        margin: 0;
    }
    .swiper-item{
        width: 2.266667rem;
        height: 4.186667rem;
        touch-action: none;
        .img-box{
            position: relative;
            margin-bottom: .16rem;
            .img-box{
                height: 3.066667rem;
            }
            .hreat-bg{
                position: absolute;
                top: 0;
                left: 0;
                width: .746667rem;
                line-height: .746667rem;
                background: rgba(61,63,71,.6);
                text-align: center;
                border-bottom-right-radius: .266667rem;
                height: .746667rem;
                .hreat-img{
                    display: inline-block;
                    width: .266667rem;
                    height: .266667rem;
                    margin: auto;
                    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAoCAYAAACFFRgXAAAABGdBTUEAALGPC/xhBQAAAytJREFUWAnVmLtrFFEUh3cWFAtRE5FEEUREsFAkooUIgl3+CUEU7LVR1LBIMERCLFLZRG1CrFJYpLBQENRGC4n4wBeKRUQ2PlAQX+v3m70z7MzemZ3HZp05cPbce86553w7O7Mzc51KjDQaDYfwDvSAseux69Cv6Ef0LXoHXXAc5y82UqhVJbgLPYhuQTega9DPaB19ht6VpVYDaxUBWYUGewkcQzdbE4LOJabXaHQ76G7OqHWI0RG0v+mJ/XxPdJpaD2xZbcAUX0XiSXS/bUEH3yPil2imL1Chln6RE+huzVPKffJV60frugAwDfoI1tBtrUkpx4vknzVrLmAHU65vTX/F5DzQnzynDwzsCpwX0e1eMIfV+S3ReZpXXlDgFNC/VEgXgifHGXQDVvUE2g1Y1RKT2FxxgTm6cg4bXxHNsGH0j/DhIlKGmFzGKuSbCAyFgkWcDsG6UaeE/m/LIvsEvKcstGIV8ECJgAcErJtFWaRPwCvLQitWAbv3/ZJALwlYj3ZlkbqA9YBRFnkp4HtloRWrgJ+g/uNbgeHF+LTKY5tebWYLDOqhzYpVR1hyE33njor5ITYxNp/WIP/DeBINvI4ooQAipknD6D9eVnC8JjCOxr799vgLiGXcsLmtvVPCnRB4yGDanRTjQ2/PYvIlACwvCTcwM37G/xvMGJYAQRuwoiRex8wFMns7mTMMbV2twMpiwVXMfNuK5XfMm97WTpHAJvsy9pZ15fI41Us9IyUWmG+qPa4ptBe3b/WYMj2zAWsVBfQfPYEGrlbFuiiqPWF6xZaNPcLeSgr9ZjyGLni+LlrVHDM9OpZNBKwqFPyJGUWfa94lUa1RUztRSX9vLVE2SewNrMboaG9NuiYi7w3+M8B+i4hb3amBVQXotRjdxpPsHWtJWLQHfBrYL+FAp3kmYBUFWnu/2u1Mu03wgTXajaxjU0tmYHUCehAj6H7NE4ggBSvoTJL4orNVp/Eifm1eJ/lplXMuD6wYcgGrAAA6H0fQ75pHiGIjJjciJZk7N7DaAKIrvobarnj5aiaHYT7JdQ6HW5sL8Sj+nSb2GHsF2EwXWLi+5v8ArR6xIZ+h44wAAAAASUVORK5CYII=') no-repeat;
                    background-size: 100%;
                }
            }
            .widh-bg{
                position: absolute;
                bottom: 0;
                left: 0;
                width: 2.266667rem;
                height: .933333rem;
                background: linear-gradient(-180deg,rgba(77,77,77,0),#000);
                .wish-num{
                    position: absolute;
                    bottom: .053333rem;
                    left: .106667rem;
                    color: #faaf00;
                    font-size: .293333rem;
                    font-weight: 600;
                }
            }
            
        }
        .movie-nm{
            margin: 0 0 .08rem;
            font-size: .346667rem;
            color: #222;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
            height: .453333rem;
        }
        .show-time{
            font-size: .32rem;
            color: #999;
        }
    }

    .recent-expect{
        padding: .32rem 0 .48rem .4rem;
        background-color: #fff;
        margin-bottom: .266667rem;
        min-height:  5.76rem;
        // box-sizing: border-box!important;
        margin-bottom: .133333rem;
        border-bottom: .266667rem solid #eee;
        .recent-title{
            margin: 0;
            font-size: .373333rem;
            color: #333;
        }
    }
    .comming-list{
        .comming-list-day{
            padding: .32rem .4rem 0;
            margin: 0;
            font-size: .373333rem;
            color: #333;
            background: white;
        }
    }
    .movies-list{
        margin-top: 0px;
    }
</style>
