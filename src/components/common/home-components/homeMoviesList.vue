<template>

<div id="movie-list" ref='scrollItem'>
   
    <ul  class="movies-list">
        <li  class="list-item"  
        @click = go(item.id,item.nm)
        v-for = "item in moviesList"
        :key = 'item.id'
        >
            <div class="item-left">
                <img :src = "item.img | handleImg" :alt = "item.nm">
            </div>
            <div class="item-center">
                <span class="movies-title">{{item.nm}}</span>
                <span  class="movies-grade">
                    观众评
                    <span class="grade-num">{{item.sc }}</span>
                </span>
                <span class="movies-stars">
                主演: {{item.star}}
                </span>
                <span class="movies-session">{{item.showInfo}}</span>
            </div>
            <div class="item-right">
                <span  class="buy-ticket">购票</span>
            </div>
        </li>
    </ul>
    </div>

</template>

<script>

import { Toast } from 'mint-ui';
import scroll from '@utils/scroll'
export default {
    data(){
        return {
            moviesList:[],
            url:'movieOnInfoList',
            date:'',
            ids:'',
            time:0, // 请求的次数
            addClass:'movies-warp'
        }
    },
    methods:{
        go(_id,_title){
            // 应该在跳转的时候 存入标题
            this.$router.push({name:'detail',params:{id:_id,title:_title}})
        },
        loadMore(){
            // 再次发送请求
            if(this.time<=5){
                this.time++
                this.$http({
                    url:'/my/ajax/moreComingList',
                    params:{
                        token:'',
                        movieIds:this.ids.slice(1+(this.time*10 + this.time),11+(this.time*10 + this.time)).toString()
                    }
                }).then((res)=>{
                    this.moviesList= this.moviesList.concat(res.coming) 
                })
            }else{
                if(this.instance) this.instance.close()
                this.instance = Toast({
                    message: '没有更多数据了',
                    position: 'bottom',
                    duration: 3000
                });
                console.log('没有更多数据了')
            }
            
        },
        loadScroll(){
            scroll({
                el:this.$refs.scrollItem,
                handler:this.loadMore
            })  
        }
    },
    created(){
        this.$http({
             url:'/my/ajax/movieOnInfoList?token=',
            }
        )
        .then(res=>{
            this.moviesList = res.movieList
            this.ids = res.movieIds
            this.loadScroll()
        })
        
    }
}
</script>

<style lang="scss">
    .movies-warp{
        margin-top:1.066667rem;
    }
     #movie-list{
        height: 14.133333rem;
    }
    .movies-list{
        min-height: 3.04rem;
        margin-bottom: 1.293333rem;
        // margin-top: 200px;
        .list-item{
            display: flex;
            justify-content: space-between;
            padding-top: .32rem;
            padding-bottom: .32rem;
            overflow: hidden;
            border-bottom: 1px solid #f5f5f5;
            box-sizing: border-box;
            background: white;
            .item-left{
               width: 1.706667rem;
               height: 2.4rem;
               flex-shrink: 0;
               flex-grow: 0;
               margin-left: .4rem;
            }
            .item-center{
                width: 5.386667rem;
                height: 2.346667rem;
                display: flex;
                flex-direction: column;
                margin-left: .266667rem;
                span{
                    overflow:hidden;
                    text-overflow:ellipsis;
                    white-space:nowrap;
                }
                .movies-title{
                    font-size: .453333rem;
                    color: #333;
                    font-weight: 700;
                    padding-right: .133333rem;
                }
                .movies-grade{
                    margin-top: .186667rem;
                    font-size: .346667rem;
                    color: #666;
                    .grade-num{
                        font-weight: 700;
                        color: #faaf00;
                        font-size: .4rem;
                    }
                }
                .movies-stars,.movies-session{
                    font-size: .346667rem;
                    margin-top: .16rem;
                    color: #666;
                }
                
            }
            .item-right{
                width: 1.6rem;
                margin-right: .666667rem;
                height: 2.346667rem;
                display: flex;
                justify-content: center;
                align-items: center;
                span.buy-ticket,.presell-ticket{
                    display: block;
                    width: 1.253333rem;
                    height: .72rem;
                    line-height: .746667rem;
                    text-align: center;
                    box-sizing: border-box;
                    background-color: #f03d37;
                    color: #fff;
                    border-radius: .106667rem;
                    white-space: nowrap;
                    font-size: .346667rem;
                    cursor: pointer;
                }
                .presell-ticket{
                    background-color: #3c9fe6;
                }
            }
        }
    }
</style>

