<template>
    <div class="order-list">
        <div class="order-title">
            <div>
                <span>尚美国际影城(零陵店) </span>
                <i class="iconfont icon-arrow-right-copy-copy-copy"></i>
            </div>
            <span class="count-down"> 支付余剩时间</span>
            
        </div>
        <div class="order-detail">
            <div class="detail-left">
                <img width="57" height="80" src="http://p0.meituan.net/114.160/movie/7b2eaac36faaa57864935e20fde7885a242723.jpg" alt="">
            </div>
            <div class="detail-center">
                <h3 class="show-title">昼颜 2张</h3>
                <p class="show-time">2018-05-18 周五 19:30</p>
                <p class="seat">四号厅 5排6座 5排7座</p>
            </div>
            <div class="detail-right">
                <span class="pay">付款</span>
            </div>
        </div>
        <div class="total">
            <span class="price">总价：45.9元</span>
            <span class="pay-state">未支付</span>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .order-list{
        margin-bottom: .266667rem;
        background: white;
        display: flex;
        flex-direction: column;
        font-size: 14px;
        color: #777;
        .order-title{
            padding: 0 .4rem;
            height: 1.013333rem;
            line-height: 1.013333rem;
            display: flex;
            justify-content: space-between;
            .count-down{
                font-size: .32rem;
                color: #f03d37;
            }
        }
        .order-detail{
            display: flex;
            padding: .32rem .4rem;
            border-top: .026667rem solid #efefef;
            justify-content: space-between;
            .detail-left{
               
            }
            .detail-center{
                margin-left: .32rem;
                margin-top: .106667rem;
                flex-grow: 1;
                flex-shrink: 1;
                .show-title{
                    font-size: .4rem;
                    color: #000;
                }
                .show-time{
                    margin-top: .133333rem;
                    font-size: .32rem;
                }
                .seat{
                    font-size: .32rem;
                }
            }
            .detail-right{
                line-height: 2.133333rem;
                span{
                    height: .746667rem;
                    line-height: .746667rem;
                    font-size: .32rem;
                    border-radius: .16rem;
                    padding: 0 .266667rem;
                    display: inline-block;
                    color: #fff;
                    background-color: #f03d37;
                    border: 1px solid #f03d37;
                }
            }
        }
        .total{
            padding: 0 .4rem;
            height: 1.013333rem;
            line-height: 1.013333rem;
            display: flex;
            justify-content: space-between;
            .pay-state{
                color: #000;
            }
        }
    }
</style>
