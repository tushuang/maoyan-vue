<template>
    <div v-if = info  class="movie-detail">
        <div class="movie-filter"></div>
        <div :style = "styleObject" class="detail-bg">
        </div>
           
            <div class="detail-content">
                <div class="item-left">
                    <img :src = "info.img | handleImg" alt = "">
                </div>
                <div class="item-center">
                    <span class="movies-title">{{info.nm}}</span>
                    <span class="eng">{{info.enm}}</span>
                    <span class="movies-grade">
                        <span class="grade">7.9</span>
                        <span class="grade-num">(2.7万人评)</span>
                    </span>
                    <span class="movies-type">
                        {{info.cat}}
                    </span>
                    <span class="movies-site">{{info.src}}/100分钟</span>
                    <span class="movie-time">{{info.pubDesc}}</span>
                </div>
                <div class="item-right">
                    <span class="movie-more">
                        <i class="iconfont icon-arrow-right-copy-copy-copy"></i>
                    </span>
                </div>
            </div>
            
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            bg:'http://p0.meituan.net/148.208/movie/2721b55eac3ca107bad2af0e18592003431446.jpg',
            styleObject: {
                background: 'url(http://p0.meituan.net/148.208/movie/2721b55eac3ca107bad2af0e18592003431446.jpg) no-repeat',
                backgroundSize: 'cover',
                filter: 'blur(15px)',
                opacity: .55

            },
            info:null,
            id:''
        }
    },
    methods:{
        getId(){
            this.id = this.$route.params.id
        }
    },
    created(){
        this.getId()
        this.$http({
             url:'/my/ajax/detailmovie?movieId='+this.id
            }
        )
        .then(res=>{
            this.info = res.detailMovie
        })
    }
    
}
</script>

<style lang="scss">
    
        .movie-detail{
            box-sizing: border-box;
            height: 5.013333rem;
            width: 100%;
            position: relative;

            .movie-filter{
                height: 5.013333rem;
                width: 100%;
                background-color: #333;
                position: absolute;
                left: 0;
                top: 0;
            }
            .detail-bg{   
                height: 5.013333rem;
                width: 100%;
             }
            .detail-content{
                display: flex;
                justify-content: space-between;
                position:absolute;
                top: 0;
                left: 0;
                padding: 19px 30px 19px 15px;
                box-sizing: border-box;
                height: 5.013333rem;
                span{
                    overflow:hidden;
                    text-overflow:ellipsis;
                    white-space:nowrap;
                }
                .item-left{
                    width: 2.933333rem;
                    height: 4rem;
                    flex-shrink: 0;
                    flex-grow: 0;
                    img{
                        height: 4rem;
                        width: 2.933333rem;
                    }
                }
                .item-center{
                    color: white;
                    display: flex;
                    flex-direction: column;
                    margin-left: .333333rem;
                    .movies-title{
                        font-size: 20px;
                        margin-top: 2px;
                        font-weight: 700;
                        overflow: hidden;
                    }
                    .eng{
                        margin-top: 10px;
                        font-size: 12px;
                        color: #fff;
                        opacity: .8;
                    }
                    .movies-grade{
                        .grade{
                            font-size: 18px;
                            font-weight: 700;
                            color: #fc0;
                            margin-top: 11px;
                        }
                        .grade-num{
                            margin-top: 10px;
                            font-size: 12px;
                            color: #fff;
                            opacity: .8;
                            font-weight: 700;
                        }
                    }
                    .movies-type,.movies-site,.movie-time{
                        font-size: 12px;
                        color: white;
                        margin-top: .16rem;
                    }
                    
                }
                .item-right{
                    width: .266667rem;
                    height: .4rem;
                    span{
                        i{
                            font-size: .533333rem;
                        }
                    }
                }
            }
                
            }
           
        
   
</style>
