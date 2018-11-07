<template>
    <nav class="home-nav">
        <ul>
            <li class="home-site">
                北京
                <i class="iconfont icon-jiantou-copy-copy"></i>
            </li>
            <li class="active-switch">
                <span class="hot-item">正在热映</span>
                <span class="hot-item">即将上映</span>
            </li>
            <li class="home-search">
                <i class="iconfont icon-artboard9-copy"></i>
            </li>
        </ul>
    </nav>
</template>

<script>



export default {
    
}
</script>

<style lang="scss">
    .home-nav{
        width: 100%;
        height: 1.173333rem;
        border-bottom: 1px solid #e6e6e6;
        position: fixed;
        top:1.293333rem;
        left: 0px;
        background: white;
        ul{
            display: flex;
            justify-content: space-between;
            line-height: 1.173333rem;
            font-size: .4rem;
            color: #666666;
            .home-site{
                width: 1.6rem;
                margin-left: .4rem;
                i{
                    font-size:.213333rem;
                    vertical-align: middle;
                    color: #b0b0b0;
                }
            }
            .active-switch{
                width: 5.546667rem;
                font-weight: 700;
                display: flex;
                justify-content: space-around;
                text-align: center;
                .hot-item{
                    width: 2.133333rem;
                    margin: 0 .32rem;
                    border-bottom: 2px #ef4238 solid;
                    color: #ef4238
                }
            }
            .home-search{
                width: 1.2rem;
                height: 1.066667rem;
                text-align: center;
                
                i{
                    font-size: .533333rem;
                    color: #e54847;
                }
            }
        }
    }
</style>


