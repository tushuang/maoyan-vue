<template>
    <div v-if='dealList'>
       <div class="set-meal" >
            <p class="title">影院超值套餐</p>
            <div class="meal-box" v-for='(item,index) in dealList' :key="index">
                <div class="meal-left">
                    <img width="92px" height="92px" :src = "item.imageUrl | handleImg(true)" alt="">
                </div>
                <div class="meal-center">
                    <div>
                        <span class="tip">双人</span>
                        {{item.title}}
                    </div>
                    <div>
                        <span class="price">
                            <span>￥</span>{{item.price}}
                        </span>
                        <span class="buy">
                           <p class="sold">{{item.curNumberDesc}}</p>
                            <span class="buy-btn">
                                去购买
                            </span> 
                        </span>
                    </div>  
                </div>
            </div>
        </div> 
    </div>
    
</template>

<script>
export default {
    props:['dealList']
}
</script>

<style lang="scss">
    .set-meal{
        padding-left: .4rem;
        padding-right: .4rem;
        background: white;
        .title{
            line-height: 1.2rem;
            height: 1.2rem;
            font-size: .4rem;
            color: #666;
            border-bottom: 1px solid #efefef;
        }
        .meal-box{
            padding-top: .346667rem;
            padding-bottom: .346667rem;
            height: 3.146667rem;
            display: flex;
            justify-content: space-between;
            .meal-left{
                width:2.453333rem;
                height: 5.75rem;
            }
            .meal-center{
                flex-shrink: 1;
                flex-grow: 1;
                width: 6.533333rem;
                margin-left: .266667rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                div{
                    font-size: .373333rem;
                    line-height: .48rem;
                    color: #333;
                    .tip{
                        padding: 0 .106667rem;
                        font-size: .266667rem;
                        line-height: .4rem;
                        height: .4rem;
                        background: #f90;
                        border-radius: .053333rem;
                        color: #fff;
                    }
                }
                .price{
                    color: #f03d37;
                    font-size: .453333rem;
                    span{
                        font-size: .373333rem;
                    }
                }
                span.buy{
                    .buy-btn{
                        line-height: .746667rem;
                        font-size: .32rem;
                        background-color: #f03d37;
                        color: #fff;
                        border-radius: .106667rem;
                        text-align: center;
                        padding: .133333rem .213333rem;
                    }
                    float: right;
                    font-size: .32rem;
                    color: #999;
                    height: 1.52rem;
                    align-self: bottom;
                }

            }
        }
    }
</style>
