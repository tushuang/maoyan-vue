<template>
    <div class="search-page">
        <div class="search-header">
            <div class="input-wrap">
                <img class="search-icon" src="http://s0.meituan.net/bs/?f=my-canary:/deploy/images/search.png" alt="">
                <input v-model="val" class="search-input" type="text" placeholder="搜索影院">
                <img class="del-input" src="http://s0.meituan.net/bs/?f=my-canary:/deploy/images/close.png" alt="">
            </div>
            <router-link tag = 'div' :to ='{name:"home"}' class="cancel">取消</router-link>
        </div>
        <search-list :cinemaList = 'cinemaList' :filmList = 'filmList' ></search-list>
    </div>
</template>

<script>
import searchList from '@c/common/search/searchList'
export default {
    components:{
        searchList
    },
    data(){
        return {
            val:'',
            cinemaList:'',
            filmList:''
        }
    },
    methods:{
         async getList(){
            this.$http({
                url:'/my/ajax/search',
                params:{
                    kw: this.val,
                    cityId: 1,
                    stype: -1,
                }
            }).then((res)=>{
                this.cinemaList = res.cinemas?res.cinemas:null
                this.filmList = res.movies?res.movies:null
            })
            
        }
    },
    watch:{
        val(){
            this.getList()
        }
    }
}
</script>

<style lang="scss">
    .search-page{
        .search-header{
            display: flex;
            align-items: center;
            padding: .213333rem 0 .213333rem 10px;
            background-color: #f5f5f5;
            border-bottom: 1px solid #e5e5e5;
            z-index: 1;
        }
        .input-wrap{
            padding: 0 .266667rem;
            border: 1px solid #e6e6e6;
            border-radius: .133333rem;
            background-color: #fff;
            flex-grow: 1;
            width: 8.0rem;
            .search-icon{
                width: .4rem;
                height: .4rem;
                margin-right: .16rem;
                position: relative;
                top: -.02rem;
            }
            .search-input{
                flex: 1;
                border: none;
                font-size: .346667rem;
                color: #333;
                line-height: .533333rem;
                padding: .106667rem 0;
                width: calc(100% - 1.066667rem);
            }
            .del-input{
                width: .4rem;
                height: .4rem;
                float: right;
                top: .16rem;
                position: relative;
                display: none;
            }
        }
        .cancel{
            height: .8rem;
            line-height: .8rem;
            padding: 0 .266667rem;
            font-size: .373333rem;
            color: #f03d37;
            display: inline-block;
        }
    }
</style>
