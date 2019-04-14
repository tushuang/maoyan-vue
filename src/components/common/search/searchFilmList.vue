<template>
    <div v-if="filmList" class="search-film-list">
        <p class="type-title"> 电视/电视剧/综艺 </p>
        <ul>
            <li @click="go(item.id,item.nm)"  v-for="item in filmList.list" :key="item.id" class="film-item">
                <span class="item-left">
                    <img width="64" height="90" :src="item.img | handleImg" :alt="item.nm">
                </span>
                <span class="item-right">
                    <p class="title">{{item.nm}}</p>
                    <p class="small-title">{{item.enm}}</p>
                    <p class="film-type">{{item.cat}}</p>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['filmList'],
    methods:{
      go(id,title){
        // this.$router.push({name:'detail',params:{id,title}})
        this.$router.push({name:'filmIntro',params:{id,title}})
      }
    }
}
</script>

<style lang="scss">
    .search-film-list{
        .type-title{
            font-size: .346667rem;
            color: #999;
            padding: .213333rem .213333rem;
        }
        ul{
            border-top: 1px solid #e6e6e6;
            border-bottom: 1px solid #e6e6e6;
            padding-left: .4rem;
            padding-right: .4rem;
            .film-item{
                border-bottom: 1px solid #e6e6e6;
                padding: .32rem 0;
                min-height: 2.4rem;
                display: flex;
                .item-left{
                    margin-right: .266667rem;
                }
                .item-right{
                    width: 8rem;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    .title{
                        font-weight: 700;
                        font-size: .4rem;
                        width:6.666667rem;
                    }
                    .film-type,.small-title{
                        font-size: .346667rem;
                        color: #666;
                        margin-top: .053333rem;
                        width:6.666667rem;
                    }
                }
            }
        }
    }
</style>
