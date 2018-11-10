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
                <span v-if="item.globalReleased" class="movies-grade">
                    观众评
                    <span class="grade-num">{{item.sc }}</span>
                </span>
                <span v-else class="movies-grade">
                    <span class="grade-num">{{item.wish }}</span>
                    想看
                </span>
                <span class="movies-stars">
                主演: {{item.star}}
                </span>
                <span class="movies-session">{{item.showInfo}}</span>
            </div>
            <div class="item-right">
                <span v-if="item.globalReleased" class="buy-ticket">购票</span>
                <span v-else class="presell-ticket">预售</span>
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
    props:['params'],
    methods:{
        go(_id,_title){
            // 应该在跳转的时候 存入标题
            
            if(!this.params){
                this.$router.push({name:'detail',params:{id:_id,title:_title}})
            }else{
                
            }
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
                this.allLoaded = true;// 若数据已全部获取完毕
                this.$refs.loadmore.onBottomLoaded();
            }
            
        },
        loadScroll(){
            scroll({
                el:this.$refs.scrollItem,
                handler:this.loadMore
            })  
        }
    },
    watch:{
        date(){
            this.$emit('update:day', this.date)
        }
    },
    created(){
        let _url = this.params?this.params.url:'' || this.url
        this.$http({
             url:'/my/ajax/'+ _url +'?token=',
             params:{
                 ci:this.params?this.params.ci:'',
                 limit:this.params?this.params.limit:''
             }
            }
        )
        .then(res=>{
            if(_url == 'movieOnInfoList'){
                this.moviesList = res.movieList
                this.ids = res.movieIds
                this.loadScroll()
            }else{
                this.moviesList = res.coming
                this.date = res.coming[0].comingTitle
                
            }
            
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
                    font-size: 17px;
                    color: #333;
                    font-weight: 700;
                    padding-right: 5px;
                }
                .movies-grade{
                    margin-top: .186667rem;
                    font-size: 13px;
                    color: #666;
                    .grade-num{
                        font-weight: 700;
                        color: #faaf00;
                        font-size: 15px;
                    }
                }
                .movies-stars,.movies-session{
                    font-size: 13px;
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
                    line-height: 28px;
                    text-align: center;
                    box-sizing: border-box;
                    background-color: #f03d37;
                    color: #fff;
                    border-radius: 4px;
                    white-space: nowrap;
                    font-size: 13px;
                    cursor: pointer;
                }
                .presell-ticket{
                    background-color: #3c9fe6;
                }
            }
        }
    }
</style>

