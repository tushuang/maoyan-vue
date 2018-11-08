
<template>
    <div class="cinema-msg-box">
        <div class="show-time-box">
            <ul class="cinema-time">
                <li class="time-item">
                    今天11月07号
                </li>
                <li class="time-item">
                    今天11月08号
                </li>
                <li class="time-item">
                    今天11月09号
                </li>
                <li class="time-item">
                    今天11月10号
                </li>
                <li class="time-item">
                    今天11月11号
                </li>
                <li class="time-item">
                    今天11月12号
                </li>
                <li class="time-item">
                    今天11月13号
                </li>
                <li class="time-item">
                    今天11月14号
                </li>
            </ul>
        </div>
        
        <div class="cinema-nav">
            <span class="nav-item">
                全城
                <i class="iconfont icon-jiantou-copy-copy"></i>
            </span>
            <span class="nav-item">
                品牌
                <i class="iconfont icon-jiantou-copy-copy"></i>
            </span>
            <span class="nav-item nav-item-right">
                特色
                <i class="iconfont icon-jiantou-copy-copy"></i>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .cinema-msg-box{
        width: 100%;
        .show-time-box::-webkit-scrollbar {display:none}
        .show-time-box{
            width: 100%;
            height: 1.2rem;
            overflow-x: scroll;
            box-sizing: border-box;
            background-color: #fff;
            border-bottom: 2px solid #efefef;
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
            }
        }
        .cinema-nav{
            height: 1.066667rem;
            display: flex;
            border-bottom: 1px solid #efefef;
            .nav-item{
                flex: 1;
                text-align: center;
                line-height: 1.066667rem;
                font-size: .373333rem;
                color: #666;
                position: relative;
                i{
                    font-size: .213333rem;
                }
            }
            .nav-item::after{
                content: '';
                display: block;
                width: 1px;
                position: absolute;
                right: 0px;background: #efefef;
                top: .16rem;
                bottom: .16rem;
            }
            .nav-item-right:after{
                display: none;
            }
        }
    }
</style>
