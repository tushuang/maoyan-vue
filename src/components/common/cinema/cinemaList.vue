<template>
    <div>
        <div class="top-sticky">
            <div class="search-box">
                <span class="area">
                    北京
                    <i class="iconfont icon-jiantou-copy-copy"></i>
                </span>
                <input class="search-input" placeholder="搜影院" type="text">
            </div>
            <select-info></select-info>
        </div>  
        <cinema-msg :getCinemaList = 'getCinemaList' :infos = 'infos'></cinema-msg> 
    </div>
</template>

<script>
import selectInfo from '@c/layout/selectInfo'
import cinemaMsg from '@c/layout/cinema-msg'
export default {
    components:{
        cinemaMsg,
        selectInfo
    },
    // 写方法调用接口 穿info给组件
    data(){
        return{
            infos:[],
           
        }
    },
    time:0,
    methods:{
        getCinemaList(){
            this.$http({
                url:'/my/ajax/cinemaList',
                params:{
                    day: 2018-11-11,
                    offset: 20,
                    limit: 20,
                    districtId: -1,
                    lineId: -1,
                    hallType: -1,
                    brandId: -1,
                    serviceId: -1,
                    areaId: -1,
                    stationId: -1,
                    item: '',
                    updateShowDay: false,
                    reqId: 1541901957736,
                    cityId: 1,
                }
            }).then((res)=>{
                this.infos = this.infos.concat(res.cinemas) 
            }).catch((err)=>{
                console.log(err)
            })
        }
    },
    created(){ 
        this.getCinemaList()
    }
}
</script>

<style lang="scss">
    .top-sticky{
        position: sticky;
        top: 1.333333rem;
    }
    .search-box{
        display: flex;
        align-items: center;
        height: 1.173333rem;
        justify-content: space-between;
        background: #f5f5f5;
        .area{
            padding-left: .4rem;
            font-size: .4rem;
            color: #666;
            display: flex;
            align-items: center;
            vertical-align: bottom;
            i{
                font-size: .213333rem;
                margin-top: .16rem;
                vertical-align: bottom;
            }
        }
        .search-input{
            display: flex;
            justify-content: center;
            height: .746667rem;
            font-size: .213333rem;
            color: #b2b2b2;
            margin-left: .48rem;
            border: .5px solid #e6e6e6;
            border-radius: .133333rem;
            margin-right: .4rem;
            width: 7.466667rem;
            text-align: center;
        }
    }
</style>
