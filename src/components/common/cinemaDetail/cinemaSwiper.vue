<template>
    <div>
        <div class="cinema-swiper">
            <div class="movie-filter"></div>
            <div class="detail-bg" :style = "activeBg"></div>
            <swiper class="swiper-contain" :options="swiperOption" ref="mySwiper">
            <!-- slides -->
                <swiper-slide v-for="item in movies" :key='item.id' class="swiper-item">
                   <div class="img-box">
                       <img width="65" height="95" :src= 'item.img|handleImg'  alt="">
                   </div>
                   <span class="tarngle"></span>
                </swiper-slide>
            </swiper>
            
        </div>
        <div v-if="moviesInfo" class="film-title">
            <!-- {{activeIndex}} -->
            <h2 class="film-name">{{moviesInfo.nm}} <em class="grade">{{moviesInfo.sc}}</em> <em class="grade-util">分</em> </h2>
            <p class="silde-title"> {{moviesInfo.desc}} </p>
        </div>
        <cinema-time-list :movies = bg :cinema_nm = cinema_nm :moviesInfo = moviesInfo></cinema-time-list>
    </div>
    
</template>

<script>

let vm = null
import cinemaTimeList from '@c/common/cinemaDetail/cinemaTimeList'
export default {
    components:{
        cinemaTimeList
    },
    data() {
      return {
        swiperOption: {
            slidesPerView : 'auto',
            spaceBetween : 10,
            centeredSlides : true,
            on:{
                slideChangeTransitionEnd:function(){
                  vm.moviesInfo = vm.movies[this.activeIndex]
                  vm.bg = vm.handleImg(vm.movies[this.activeIndex].img)
                }
            }
        },
        bg:'',
        activeBg:{
            backgroundImage: 'url(http://p0.meituan.net/148.208/movie/2721b55eac3ca107bad2af0e18592003431446.jpg)'
        },
        activeIndex:0,
        moviesInfo:null,
        showTime:null
      }
    },
    methods:{
        handleImg(imgUrl){
            let arr = imgUrl.split('/')
            return`https://p0.meituan.net/128.180/${arr[4]}/` + arr[arr.length - 1];

        }
    },
    props:['movies','cinema_nm'],
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted(){
        vm = this
    },
    watch:{
        movies:{
            handler(){
                this.moviesInfo = this.movies[0]
                vm.bg = vm.handleImg(vm.movies[0].img) 
            }
        },
        bg:{
            handler(){
                this.activeBg.backgroundImage = 'url(' + this.bg + ')'
            }
        }
    }
}
</script>

<style lang="scss">

    .cinema-swiper{
        height: 3.6rem;
        position: relative;
        overflow: hidden;
        .detail-bg{
            // background: url(http://p0.meituan.net/148.208/movie/2721b55eac3ca107bad2af0e18592003431446.jpg) no-repeat;
            background-size: cover;
            filter : blur(15px);
            opacity: .55;
            height: 100%;
            width: 100%;
        }
        .movie-filter{
            height: 100%;
            width: 100%;
            background-color: #40454d;
            position: absolute;
            left: 0;
            top: 0;
            opacity: .55;
        }
        .swiper-container{
            height: 100%;
            line-height: 4rem;
            overflow: hidden;
            width: 100%;
            position:absolute;
            top: 0;
            left: 0;
            .swiper-wrapper{
                line-height: 4rem;
            }
            .swiper-item{
                width: 1.733333rem!important;
                height: 2.533333rem;
                line-height: 3.6rem;
                // background: url(http://p0.meituan.net/148.208/movie/2721b55eac3ca107bad2af0e18592003431446.jpg) no-repeat;
                margin-top: .533333rem;
                background-size: 100%;
                img{
                    display: block;
                }
            }
            .swiper-slide-active{
                 width: 2.133333rem!important;
                height: 3.573333rem!important;
                margin-top: .266667rem;
                .img-box{
                    border: .053333rem solid white;
                    position: relative;
                    img{
                        width: 2.133333rem!important;
                        height: 3.013333rem!important;
                        // display: block;
                    }
                }
                .img-box::after{
                    content: "";
                    position: absolute;
                    bottom: -6px;
                    left: 50%;
                    -webkit-transform: translateX(-50%);
                    transform: translateX(-50%);
                    width: .266667rem;
                    height: .133333rem;
                    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjMwODIyNEEwNTkwRDExRTZBNkMwOTE1NDA0RjA5MDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjMwODIyNEExNTkwRDExRTZBNkMwOTE1NDA0RjA5MDA3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzA4MjI0OUU1OTBEMTFFNkE2QzA5MTU0MDRGMDkwMDciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzA4MjI0OUY1OTBEMTFFNkE2QzA5MTU0MDRGMDkwMDciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7kjYk3AAAAVUlEQVR42qzMMQ7AIAwEwSvy8P25EwokZNkYCFcgCu/IzLB7Q9+jS2gz1MG/KN0ZwVOU0fDgLorvI3AVJWozsELJuhmYocyaCvQo1f2jeiT/cK8AAwBzvH2t7aaajQAAAABJRU5ErkJggg==) no-repeat;
                    background-size: contain;
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
