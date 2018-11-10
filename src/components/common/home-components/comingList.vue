<template>
    <div>
         <div
        v-for = "item in comingList"
        :key = 'item.id'
        class="comming-list">
            <p v-if="changeTitle(item.comingTitle)" class="comming-list-day">{{item.comingTitle}}</p>
            <ul class="movies-list coming-list">
                <li  class="list-item" >
                    <div class="item-left">
                        <img :src = "item.img | handleImg" :alt = "item.nm">
                    </div>
                    <div class="item-center">
                        <span class="movies-title">{{item.nm}}</span>
                        <span v-if="item.rt==''" class="movies-grade">
                            <span class="grade-num">{{item.wish }}</span>
                            想看
                        </span>
                        <span v-else class="movies-grade">
                            <span class="grade-num">{{item.wish }}</span>
                            预售
                        </span>
                        <span class="movies-stars">
                        主演: {{item.star}}
                        </span>
                        <span v-if="item.showInfo" class="movies-session">{{item.showInfo}}</span>
                        <span v-else class="movies-session">{{item.rt}} 上映</span>
                    </div>
                    <div class="item-right">
                        <span  class="presell-ticket">预售</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            comingList:null,
            time:0, // 请求的次数
            movieIds:'',
        }
    },
    title: '',
    methods:{
        loadMore(){
             if(this.ids.length/10 >= this.time){
                this.time++
                this.$http({
                    url:'/my/ajax/moreComingList',
                    params:{
                        token:'',
                        ci:1,
                        limit:10,
                        movieIds:this.ids.slice(0+(this.time*10 + this.time),10+(this.time*10 + this.time)).toString()
                    }
                }).then((res)=>{
                    this.comingList = this.comingList.concat(res.coming) 
                })
            }else{
                if(this.instance) this.instance.close()
                this.allLoaded = true;
            }
        },
        changeTitle(_title){ // 当title不一样时给title重新赋值
            if(_title==this.$options.title){
                return false
            }else{
                this.$options.title = _title
                return true
            }
        }
    },
    created() {
        this.$http({
            url:'/my/ajax/comingList?token=',
            params:{
                ci:1,
                limit:10
            }
            }
        )
        .then(res=>{
            this.comingList = res.coming
            this.ids = res.movieIds
        })
    }
}
</script>

<style lang="scss">

</style>
