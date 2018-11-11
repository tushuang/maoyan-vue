<template>
    <div>
        <div class="cinema-swiper">
            <swiper class="swiper-contain" :options="swiperOption" ref="mySwiper">
            <!-- slides -->
                <swiper-slide v-for="i in 10" :key='i' class="swiper-item">
                    <img width="65" height="95" src="http://p0.meituan.net/148.208/movie/2721b55eac3ca107bad2af0e18592003431446.jpg" alt="">
                </swiper-slide>
            </swiper>
            
        </div>
        <div class="film-title">
            <h2 class="film-name">毒液：致命守护者 <em class="grade">9.4</em> <em class="grade-util">分</em> </h2>
            <p class="silde-title"> 107分钟 | 动作 | 汤姆·哈迪</p>
        </div>
    </div>
    
</template>

<script>
export default {
    data() {
      return {
        swiperOption: {
            slidesPerView : 'auto',
            spaceBetween : 10,
            centeredSlides : true,
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    }
}
</script>

<style lang="scss">

    .cinema-swiper{
        height: 3.6rem;
        .swiper-contain{
            height: 100%;
            line-height: 3.6rem;
            overflow: hidden;
            width: 100%;
            .swiper-item{
                width: 1.733333rem!important;
                height: 2.533333rem;
            }
            .swiper-slide-active{
                width: 2.133333rem!important;
                border: .053333rem solid white;
                height: 3.013333rem!important;
                // margin-top: .266667rem;
                img{
                    height: 3.013333rem!important;
                    width: 2.13333rem;
                    
                }
            }
        }
        
    }
    .film-title{
        text-align: center;
        padding: .293333rem .4rem;
        background: white;
        .film-name{
            line-height: .64rem;
            font-size: .453333rem;
            color: #333;
            font-weight: 700;
            .grade{
                color: #ffb400;
                font-size: .426667rem;
            }
            .grade-util{
                color: #ffb400;
                font-size: .346667rem;
            }
        }
        .silde-title{
                margin-top: .053333rem;
                height: .493333rem;
                line-height: .493333rem;
                font-size: .346667rem;
                color: #999;
        }
    }
</style>
