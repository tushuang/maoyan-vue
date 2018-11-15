
<template>
    <div>
        <div class="cinema-msg-box">
        <div class="show-time-box">
            <ul class="cinema-time">
                <li ref='day' @click="selectDay($event,showTime.date,index)" 
                v-for="(showTime,index) in showTimes" 
                :key="index" 
                class="time-item"
                :class="{active:isActive==index}"
                >
                    {{showTime.date | handleDate}}
                </li>
                
            </ul>
        </div>
        
        <select-info></select-info>
        
    </div>
        <cinema-msg :infos = 'infos'></cinema-msg>
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
    data(){
        return{
            showTimes:null,
            infos:null,
            day:'',
            isActive:0
        }
    },
    methods:{
        selectDay(e,date,i){
            this.day = date
            this.isActive = i
        },
        crtTimeFtt(val, row) {
            if (val != null) {
                var date = new Date(val);
                let d = date.getDate()
                let _day = d<30?~~d+1:d
                _day = _day<10?'0'+_day:_day;
                return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + _day;
            }
        },
        getDataList(){
            this.$http({
                url:'/my/ajax/movie?forceUpdate=1541667615674',
                method:'POST',
                data:{
                    movieId: this.$route.params.id,
                    day: this.day?this.day:this.crtTimeFtt(new Date()),
                    offset: 0,
                    limit: 20,
                    districtId: -1,
                    lineId: -1,
                    hallType: -1,
                    brandId: -1,
                    serviceId: -1,
                    areaId: -1,
                    stationId: -1,
                    item:'',
                    updateShowDay: true,
                    reqId: 1541676027715,
                    cityId: 1
                }
            }).then((res)=>{ 
                this.showTimes = res.showDays.dates
                this.infos = res.cinemas
            })
        }
    },
 
    watch:{
        day:{
            immediate:true,
            handler(val){
                this.getDataList()
            }
        }
    }
}
</script>

<style lang="scss">
    .cinema-msg-box{
        width: 100%;
        position:sticky;
        top: 1.333333rem;
        // z-index: 999;
        z-index: 999;
        height: 2.266667rem;
        background-color: #fff;
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
                .active{
                    color: #e54847;
                    border-bottom: 2px solid #e54847;
                }
            }
        }
    }
</style>
