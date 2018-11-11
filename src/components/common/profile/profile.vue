<template>
    <div class="my-center">
        <div class="top-icon">
            <span class="head-icon"></span>
        </div>
        <div class="profile-order">
            <div class="title">
                
                <span>我的订单</span>
                <div class="title-line"></div>
            </div>
            <div class="order-type">
                <router-link tag="span" :to = '{name:"order"}' class="order-item">
                    <img src="http://s0.meituan.net/bs/file/?f=my-canary:deploy/dpmmweb/client/dpmmweb/component/mycenter/img/movie.png" alt="">
                    <p>电影</p>
                </router-link>
                <span class="order-item">
                    <img src="http://s0.meituan.net/bs/file/?f=my-canary:deploy/dpmmweb/client/dpmmweb/component/mycenter/img/store.png" alt="">
                    <p>商城</p>
                </span>
            </div>
        </div>
        <ul class="center-msg">
            <li>
                <span>在线观影</span> <i class="iconfont icon-arrow-right-copy-copy-copy"></i>
            </li>
            <li><span>优惠券</span> <i class="iconfont icon-arrow-right-copy-copy-copy"></i></li>
            <li><span>折扣卡</span> <i class="iconfont icon-arrow-right-copy-copy-copy"></i></li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .my-center{
        .top-icon{
            background-color: #f03d37;
            height: 4rem;
            background-image:url(http://s0.meituan.net/bs/file/?f=my-canary:deploy/dpmmweb/client/dpmmweb/component/mycenter/img/bg.png);
            background-repeat: no-repeat;
            background-size: 100% 4rem;
            
            overflow: hidden;
            text-align: center;
            .head-icon{
                display: inline-block;
                margin-top: .933333rem;
                width: 1.6rem;
                height: 1.6rem;
                border-radius: 50%;
                border: .08rem solid white;
            }
        }
        .profile-order{
            margin-top: .266667rem;
             margin-bottom: .266667rem;
            display: flex;
            flex-direction: column;
            background: white;
            .title{
                text-align: center;
                margin-top: .346667rem;
                font-size: .4rem;
                line-height: .56rem;
                .title-line{
                    width: 4.266667rem;
                    height: .026667rem;
                    background: #efefef;
                    position: relative;
                    top: -.266667rem;
                    left: 2.933333rem;
                }
                span{
                    position: relative;
                    z-index: 999;
                    background: white;
                    padding: .266667rem;
                }
            }
            .order-type{
                display: flex;
                justify-content: space-around;
                align-items: center;
                .order-item{
                    width: 3.866667rem;
                    height: 2.4rem;
                    // line-height: 2.4rem;
                    margin-top: .48rem;
                    text-align: center;
                    img{
                        width: 1.12rem;
                        height: 1.12rem;
                    }
                    p{
                        // line-height: 0px;
                        margin-top: .266667rem;
                        color: #333;
                        font-size: .4rem;
                    }
                }
            }
        }
        .center-msg{
            background: white;
            li{
                display: flex;
                height: 1.173333rem;
                line-height: 1.173333rem;
                font-size: .4rem;
                margin-left: .4rem;
                padding-left: .4rem;
                margin-right: .4rem;
                font-size: .4rem;
                border-bottom: 1px solid #efefef;
                color: #333;
                justify-content: space-between;
            }
        }

    }
</style>
