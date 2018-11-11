<template>
    <div>
        <div class="show-time-box">
            <ul class="cinema-time">
                <li class="time-item">
                    今天11月11日
                </li>
                <li class="time-item">
                    今天11月11日
                </li>
            </ul>
        </div>
        <div class="film-show-time">
            <div class="cinema-intro">
                <em class="intro-top">22:50</em>
                <em class="intro-bottom">00:44 散场</em>
            </div>
            <div class="cinema-intro">
                <em class="intro-top lang">中文 2D</em>
                <em class="intro-bottom">三号厅</em>
            </div>
            <div class="price">
                <span>￥</span>49
            </div>
            <div class="buy-ticket">
                <span>购票</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .show-time-box::-webkit-scrollbar {display:none}
    .show-time-box{
        width: 100%;
        height: 1.2rem;
        overflow-x: scroll;
        box-sizing: border-box;
        background-color: #fff;
        border-bottom: 1px solid #efefef;
        border-top: 1px solid #efefef;
        .cinema-time{
            min-width: 27.093333rem;
            white-space: nowrap; 
            .time-item{
                width: 3.066667rem!important;
                float: left;
                line-height: 1.146667rem;
                height: 1.146667rem;
                margin-left: .12rem;
                font-size: .373333rem;
                text-align: center;
                color: #666;
            }
            .active{
                color: #e54847;
                border-bottom: 2px solid #e54847;
            }
        }
    }
    .film-show-time{
        display: flex;
        justify-content: space-around;
        padding: .4rem 0;
        background: white;
        // margin-left: .32rem;
        .cinema-intro{
            display: flex;
            flex-direction: column;
            width: 1.573333rem;
            margin-left: .32rem;
            .intro-top{
                font-size: .533333rem;
                color: #333;
                line-height: 1;
                white-space: nowrap;
            }
            .lang{
                font-size: .346667rem;
            }
            .intro-bottom{
                margin-top: .266667rem;
                color: #999;
                font-size: .293333rem;
                line-height: 1;
                white-space: nowrap;
            }
        }
        .price{
            color: #f03d37;
            font-size: .506667rem;
            flex-grow: 1;
            flex-shrink: 1;
            margin-left: .853333rem;
            span{
                font-size: .293333rem;
            }
        }
        .buy-ticket{
            margin-top: .106667rem;
            margin-right: .453333rem;
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
</style>
