<template>
    <div class="order-list">
      <div v-for = '(item,index) in info' >
        <div class="order-title">
            <div>
                <span>{{item.cinemaNm}} </span>
                <i class="iconfont icon-arrow-right-copy-copy-copy"></i>
            </div>
            <span class="count-down"> </span>
        </div>
        <div class="order-detail">
            <div class="detail-left">
                <img width="57" height="80" :src="item.imgUrl" alt="">
            </div>
            <div class="detail-center">
                <h3 class="show-title">{{item.nm}} <span>{{item.seatNum}}</span>张</h3>
                <p class="show-time">{{item.time}}</p>
                <p class="seat">
                <span v-for = 'seat in item.seat'>
                  {{seat[0]+1}}排{{seat[1]}}座
                </span>
                </p>
            </div>
            <div class="detail-right">
               <!-- <span class="pay">付款</span> -->
            </div>
        </div>
        <div class="total">
            <span class="price">总价：<span>45.9</span>元</span>
            <span class="pay-state">已完成</span>
        </div>
      </div>
    </div>
</template>

<script>
import _ from 'lodash'
export default {
    data() {
      return {
        info:[]
      }
    },
    created() {
      let userId = localStorage.getItem('userInfo');
      this.$http({
          url: `/zq/order/list/${userId}`,
          method: 'GET'
      }).then((res)=>{
          if(res.status){
             this.info = res.result;
          }else{
            let instance = Toast(res.mes);
          }
          this.isFinish = true
      })
    },
    methods: {
      
    },
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
        // background:#f8f8f8;
        .order-title{
            padding: 0 .4rem;
            height: 1.013333rem;
            line-height: 1.013333rem;
            display: flex;
            justify-content: space-between;
            border-top:1px solid #eee;
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
            border-top:1px solid #eee;
            justify-content: space-between;
            .pay-state{
                color: #000;
            }
        }
    }
</style>
