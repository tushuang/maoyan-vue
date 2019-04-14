<template>
    <div ref="scrollItem" class="cinema-loadmore">
        <div>
            <!-- <mt-loadmore :bottom-method="getMore" :bottom-all-loaded="allLoaded" ref="loadmore"> -->
                <div  @click="go(info.id,info.nm,info.addr)"  v-for = "info in infos" :key="info.id" class="cinema-msg-wrap">
                    <span class="cinema-msg">
                        <h3 class="cinema-name">{{info.nm}}</h3> 
                        <b class="cinema-price">{{info.sellPrice}}<em>元起</em></b>  
                    </span>
                    <span class="cinema-msg"> 
                        <em class="cinema-site">{{info.addr}}</em> 
                        <em class="cinema-distance">{{info.distance}}</em> 
                    </span>
                    <span class="cinema-msg"> 
                        <em class="card-eat"> 小吃 </em> 
                        <em class="card-discount">折扣</em> 
                    </span>
                    <span v-if="info.promotion.cardPromotionTag" class="cinema-msg">
                        <span class="card">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg==" alt="">    
                        </span> 
                        <em class="intro">{{info.promotion.cardPromotionTag}}</em>
                    </span>
                    <span v-if="info.showTimes" class="cinema-msg">
                        <em class="section">近期场次：{{info.showTimes}}</em>
                    </span>
                </div>
            <!-- </mt-loadmore> -->
        </div>
        
    </div>
    
</template>

<script>
import { Loadmore } from 'mint-ui';
import scroll from '@utils/scroll'
export default {
    components:{
        [Loadmore.name]:Loadmore
    },
    data(){
        return{
            movieId:'',
            allLoaded:false
        }
    },
    props:['infos','getCinemaList'],
    methods:{
        getMore(){
            this.getCinemaList()
            // this.allLoaded = false
            // this.$refs.loadmore.onBottomLoaded();
        },
        go(id,title,addr){   // 编程式导航
            this.$router.push({path:'/cinemaDetail',query:{cinemaId:id,title:title,addr:addr}})
        },
        loadScroll(){
            scroll({
                el:this.$refs.scrollItem,
                handler:this.getMore
            })  
        }
    },
    mounted(){
        // this.loadScroll()
    }
    
}  
</script>


<style lang="scss">
    .cinema-loadmore{
        overflow: scroll;
        height:100%;
    }
    .cinema-msg-wrap{
        padding: 13px 15px 13px 0;
        padding-left: 15px;
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #efefef;
        background-color: #fff;
        .cinema-msg:nth-child(1){
            display: flex;
            align-items: center;
            .cinema-name{
                line-height: .48rem;
                font-size: .426667rem;
                color: #000;
            }
            .cinema-price{
                font-size: .48rem;
                font-weight: normal;
                color:#f03d37;
                margin-left: .266667rem;
                em{
                    font-size: .266667rem;
                }
            }
        }
        .cinema-msg:nth-child(2){
            display: flex;
            justify-content: space-between;
            font-size: .373333rem;
            color: #666;
        }
        .cinema-msg{
            .card-eat,.card-discount{
                color: #f90;
                border: 1px solid #f90;
                padding: 0 .08rem;
                height: .4rem;
                line-height: .4rem;
                border-radius: .053333rem;
                font-size: .346667rem;
                margin-right: .133333rem;
            }
            .card{
                display: inline-block;
                width: .373333rem;
                height: .4rem;
                img{
                    vertical-align: middle;
                }
            }
            .intro{
                font-size: .346667rem;
                color: #999;
                vertical-align: middle;
                margin-left: .133333rem;
            }
            .section{
                color: #999;
                font-size: .32rem;
            }
        }
    }
</style>
