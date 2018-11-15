<template>
    <div v-if="cinemaList" class="search-cinema-list">
        <p class="type-title"> 影院 </p>
        <ul>
            <li v-for="item in cinemaList.list" :key="item.id" class="cinema-item">
                <p class="cinema-name">{{item.nm}} <em class="price">{{item.sellPrice}}<em>元起</em> </em> </p>
                <span class="cinema-site">
                    <p class="detail-site">{{item.addr}}</p>
                    <span class="distance">{{item.distance}}</span>
                </span>
                <span class="icon">
                    <span class="blue">座</span>
                    <span v-if="item.hallType" v-for="(i,index) in item.hallType" :key="index" class="blue">{{i}}</span>
                    <span class="orange">小吃</span>
                    <span class="orange" v-if="item.vipDesc">{{item.vipDesc}}</span>
                </span>
            </li>
        </ul>
    
    </div>
</template>

<script>
export default {
    props:['cinemaList']
}
</script>

<style lang="scss">
    .search-cinema-list{
        .type-title{
            font-size: .346667rem;
            color: #999;
            padding: .213333rem .213333rem;
            // height: .533333rem;
        }
        ul{
            border-bottom: 1px solid #e6e6e6;
            border-top: 1px solid #e6e6e6;
            padding-left: .4rem;
            .cinema-item{
                padding: .4rem .4rem .4rem 0;
                .cinema-name{
                    font-size: .426667rem;
                    color: #000;
                    .price{
                        font-size: .453333rem;
                        color: #ef4238;
                    }
                }
                .cinema-site{
                    font-size: .346667rem;
                    color: #999;
                    display: flex;
                    justify-content: space-between;
                    margin: .08rem 0;
                    // width: 7.413333rem
                }
                .icon{
                    .orange,.blue{
                        display: inline-block;
                        border: 1px solid #589daf;
                        color: #589daf;
                        position: relative;
                        display: inline-block;
                        padding: 0 .08rem;
                        padding-bottom: .08rem;
                        height: .4rem;
                        line-height: .4rem;
                        border-radius: .053333rem;
                        font-size: .16rem;
                    }
                    .orange{
                        color: #f90;
                        border-color: #f90;
                    }
                }
            }
        }
    }
</style>
