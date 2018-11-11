<template>
    <div class="set-meal">
        <p class="title">影院超值套餐</p>
        <div class="meal-box">
            <div class="meal-left">
                <img width="92" height="92" src="http://p0.meituan.net/440.0/movie/1b6fa3a381eb179eb700adbe22311dbe31065.jpg@388w_388h_1e_1c" alt="">
            </div>
            <div class="meal-center">
                <span>
                    <span class="tip">双人</span>
                    大爆米花1桶+冷饮2杯
                </span>
                <span class="price">
                    <span>￥</span>48.8
                </span>
            </div>
            <div class="meal-right">
                <p class="sold">已售323</p>
                <span class="buy-btn">
                    去购买
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
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
                
            }
            .meal-center{
                flex-shrink: 1;
                flex-grow: 1;
                margin-left: .266667rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                span{
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
            }
            .meal-right{
                font-size: .32rem;
                color: #999;
                height: 1.52rem;
                align-self: bottom;
                margin-top: 1.333333rem;
                span{
                    height: .72rem;
                    line-height: .746667rem;
                    font-size: .32rem;
                    background-color: #f03d37;
                    color: #fff;
                    border-radius: .106667rem;
                    text-align: center;
                    padding: .133333rem .213333rem;
                
                }
            }
        }
    }
</style>
