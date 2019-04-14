<template>
  <div class="wrapper">
    <div class="cinema-wrapper">
      <div class="movie-info">
        <div class="title line-ellipsis">{{title}}</div>
        <div class="info line-ellipsis">
          <span>{{info.dt}}&nbsp;{{info.tm}}</span>
          <span style="margin-left: 5px; ">{{info.lang}}{{info.tp}}</span>
        </div>
      </div>
      <div class="seat-wrapper">
        
        <div class="screen">
          3号激光厅银幕
        </div>
        <div class="screen-center">
          银幕中央
          <div class="mid-line"></div>
        </div>
        <div class="inner-seat-wrapper" ref="innerSeatWrapper" >
          <div v-for="row in seatRow">
            <!--这里的v-if很重要，如果没有则会导致报错，因为seatArray初始状态为空-->
            <div v-for="col in seatCol"
                 v-if="seatArray.length>0"
                 class="seat"
                 :style="{width:seatSize+'px',height:seatSize+'px'}">
              <div class="inner-seat"
                   @click="handleChooseSeat(row-1,col-1)"
                   v-if="seatArray[row-1][col-1]!==-1"
                   :class="seatArray[row-1][col-1]===2?'bought-seat':(seatArray[row-1][col-1]===1?'selected-seat':'unselected-seat')">
              </div>
            </div>
          </div>
        </div>
        <div class="illustration">
            <div class="illustration-img-wrapper unselected-seat">
            </div>
            <span class="illustration-text">可选</span>
            <div class="illustration-img-wrapper selected-seat">
            </div>
            <span class="illustration-text">已选</span>
            <div class="illustration-img-wrapper bought-seat">
            </div>
            <span class="illustration-text">不可选</span>
          </div>
          
      
      </div> 
      <div class="buy-block" >
        <div class='recommend-block'>
        <div class="title">推荐座位</div>
        <template v-for="(item,index) in smartChooseMaxNum">
          <div class="btn-buy smart" @click="smartChoose(index+1)">
            {{index+1}}人
          </div>
        </template>
      </div>
      <div class="submit-block box-flex">
        <div class="submit flex" @click="buySeat" :style = 'choose.style' data-bid="b_212zq">{{price === 0?'':'￥'+price}}&nbsp;&nbsp;{{choose.text}}</div>
      </div>
      </div>
      </div>
      <mt-actionsheet
        :actions= "data"
        v-model="sheetVisible">
    </mt-actionsheet>
  </div>
</template>

<script>
import _ from 'lodash'
import { Toast,Actionsheet } from 'mint-ui';
	export default {
    components:{
      [Actionsheet.name]: Actionsheet
    },
		name: 'cinemaSeatChoose',
		data () {
			return {
				//影院座位的二维数组,-1为非座位，0为未购座位，1为已选座位(绿色),2为已购座位(红色)
				seatArray:[],
        //影院座位行数
        seatRow:8,
        //影院座位列数
        seatCol:11,
        //座位尺寸
        seatSize:'',
        //推荐选座最大数量
        smartChooseMaxNum:5,
        choose:{
          style:{

          },
          text:'请先选座'
        },
        info:'',
        title:'',
        price:0,
        data: [{
        name: '确认支付',
        method : this.pay,	// 调用methods中的函数
        position:[],
      }],
      // action sheet 默认不显示，为false。操作sheetVisible可以控制显示与隐藏
      sheetVisible: false
			}
		},
    computed:{
    },
    created() {
      console.log(this.$route.params)
      this.title=this.$route.params.title;
      this.info=this.$route.params.info;
      // 渲染已经选中的座位
      this.$http({
            url: `/zq/order/${this.info.seqNo}`,
            method: 'GET'
        }).then((res)=>{
            if(res.status){
                console.log('res==>',res);
                let oldArray = this.seatArray.slice();
                _.some(res.result,(item)=>{
                  _.get(item,'seat').map((seat)=>{
                    oldArray[seat[0]][seat[1]] = 2
                  })
                })
                this.seatArray = oldArray;
            }else{
              let instance = Toast(res.mes);
            }
            this.isFinish = true
        })
    },
    methods:{
      //支付
      pay:function(){
        // 请求数据将选定座位的position发送给后端 支付完成后跳到首页
        this.$http({
            url: '/zq/order/commit',
            method: 'POST',
            data: {
                userId: parseInt(localStorage.getItem('userInfo')),
                seat: this.position,
                nm:this.title,
                seatNum:this.position.length,
                time:this.info.dt + " " + this.info.tm,
                price:this.price,
                cinemaNm:this.$route.params.cinemaNm,
                seqNo:this.info.seqNo,
                imgUrl:this.$route.params.movies
            }
        }).then((res)=>{
            if(res.status){
                this.$router.push('/profile')
            }else{
              let instance = Toast(res.mes);
            }
            this.isFinish = true
        })
      },
			//向前后某个方向进行搜索的函数,参数是起始行，终止行,推荐座位个数
      searchSeatByDirection: function(fromRow,toRow,num){
        /*
         * 推荐座位规则
         * (1)初始状态从座位行数的一半处的后一排的中间开始向左右分别搜索，取离中间最近的，如果满足条件，
         *    记录下该结果离座位中轴线的距离，后排搜索完成后取距离最小的那个结果座位最终结果，优先向后排进行搜索，
         *    后排都没有才往前排搜，前排逻辑同上
         *
         * (2)只考虑并排且连续的座位，不能不在一排或者一排中间有分隔
         *
         * */

        /*
         * 保存当前方向搜索结果的数组,元素是对象,result是结果数组，offset代表与中轴线的偏移距离
         * {
         *   result:Array([x,y])
         *   offset:Number
         * }
         *
         */
        let currentDirectionSearchResult = [];

        let largeRow = fromRow>toRow?fromRow:toRow,
            smallRow = fromRow>toRow?toRow:fromRow;

        for(let i=smallRow;i<=largeRow;i++){
          //每一排的搜索,找出该排里中轴线最近的一组座位
          let tempRowResult = [],
              minDistanceToMidLine=Infinity;
          for(let j=0;j<=this.seatCol - num;j++){
            //如果有合法位置
            if(this.checkRowSeatContinusAndEmpty(i,j,j+num-1)){
              //计算该组位置距离中轴线的距离:该组位置的中间位置到中轴线的距离
              let resultMidPos = parseInt((j+num/2),10);
              let distance = Math.abs(parseInt(this.seatCol/2) - resultMidPos);
              //如果距离较短则更新
              if(distance<minDistanceToMidLine){
                minDistanceToMidLine = distance;
                //该行的最终结果
                tempRowResult = this.generateRowResult(i,j,j+num-1)
              }
            }
          }
          //保存该行的最终结果
          currentDirectionSearchResult.push({
            result:tempRowResult,
            offset:minDistanceToMidLine
          })
        }

        //处理后排的搜索结果:找到距离中轴线最短的一个
        //注意这里的逻辑需要区分前后排，对于后排是从前往后，前排则是从后往前找
        let isBackDir = fromRow < toRow;
        let finalReuslt = [],minDistanceToMid = Infinity;
        if(isBackDir){
        	//后排情况,从前往后
          currentDirectionSearchResult.forEach((item)=>{
            if(item.offset < minDistanceToMid){
              finalReuslt = item.result;
              minDistanceToMid = item.offset;
            }
          });
        }else{
        	//前排情况，从后往前找
          currentDirectionSearchResult.reverse().forEach((item)=>{
            if(item.offset < minDistanceToMid){
              finalReuslt = item.result;
              minDistanceToMid = item.offset;
            }
          })
        }

        //直接返回结果
        return finalReuslt
      },


			//推荐选座,参数是推荐座位数目
      smartChoose: function(num){
        //找到影院座位水平垂直中间位置的后一排
        let rowStart = parseInt((this.seatRow-1)/2,10)+1;
        //先从中间排往后排搜索
      	let backResult = this.searchSeatByDirection(rowStart,this.seatRow-1,num);
      	if(backResult.length>0){
      		this.chooseSeat(backResult);
          return
        }
      	//再从中间排往前排搜索
        let forwardResult = this.searchSeatByDirection(rowStart-1,0,num);
        if(forwardResult.length>0) {
          this.chooseSeat(forwardResult);
          return
        }
        //提示用户无合法位置可选
        alert('无合法位置可选!')

      },

      /*辅助函数，判断每一行座位从i列到j列是否全部空余且连续
       *
       */
      checkRowSeatContinusAndEmpty: function(rowNum,startPos,endPos){
      	  let isValid = true;
          for(let i=startPos;i<=endPos;i++){
          	if(this.seatArray[rowNum][i]!==0){
          		isValid=false;
          		break;
            }
          }
          return isValid
      },
      //辅助函数：返回每一行的某个合理位置的座位数组
      generateRowResult: function(row,startPos,endPos){
      	let result = [];
      	for(let i=startPos;i<=endPos;i++){
      		result.push([row,i])
        }
        return result
      },
      //辅助函数:智能推荐的选座操作
      chooseSeat: function(result){
        let oldArray = this.seatArray.slice();
        for(let i=0;i<result.length;i++){
        	//选定座位
        	oldArray[result[i][0]][result[i][1]] = 1
        }
        this.seatArray = oldArray;
      },


			//重置座位
      resetSeat: function(){
        //将所有座位的值变为0
        let oldArray = this.seatArray.slice();
        for(let i=0;i<this.seatRow;i++){
          for(let j=0;j<this.seatCol;j++){
          	if(oldArray[i][j]!==-1){
              oldArray[i][j]=0
            }
          }
        }
        this.seatArray = oldArray;
      },
			//选定且购买座位
      buySeat: function(){
        let oldArray = this.seatArray.slice();
        let position = [];
        for(let i=0;i<this.seatRow;i++){
        	for(let j=0;j<this.seatCol;j++){
        		if(oldArray[i][j]===1){
              position.push([i,j]);
            }
          }
        }
        console.log('position===>',position);
        if(_.isEmpty(position)){
           let instance = Toast('请选择电影票');
          return
        }else{
          this.position = position;
        }
        this.sheetVisible = true;
      },
			//处理座位选择逻辑
      handleChooseSeat: function(row,col){
        console.log(row,col)
      	let seatValue = this.seatArray[row][col];
      	let newArray = this.seatArray;
      	//如果是已购座位，直接返回
        if(seatValue===2) return
        //如果是已选座位点击后变未选
        if(seatValue === 1){
          this.price -= Math.round(this.$route.params.info.vipPrice)
          console.log(this.price)
          newArray[row][col]=0
        }else if(seatValue === 0){
          this.price += Math.round(this.$route.params.info.vipPrice)
          newArray[row][col]=1
        }
        if(_.flatten(newArray).includes(1)){
          this.choose = {
            style:{background:'#f90'},
            text:'确认选座'
          }
        }else{
          this.choose = {
            style:{background:'#ffddb2'},
            text:'请先选座'
          }
        }
        //必须整体更新二维数组，Vue无法检测到数组某一项更新,必须slice复制一个数组才行
        this.seatArray = newArray.slice();
      },
      //初始座位数组
      initSeatArray: function(){
        let seatArray = Array(this.seatRow).fill(0).map(()=>Array(this.seatCol).fill(0));
        this.seatArray = seatArray;
        console.log(window.getComputedStyle(this.$refs.innerSeatWrapper).width)
        this.seatSize = this.$refs.innerSeatWrapper
                        ? parseInt(parseInt(357,10) / this.seatCol,10)
                        :0;
        //初始化不是座位的地方
        this.initNonSeatPlace();
      },
      //初始化不是座位的地方
      initNonSeatPlace: function(){
      	for(let i=0;i<9;i++){
          this.seatArray[i][0]=-1;
        }
        for(let i=0;i<8;i++){
          this.seatArray[i][this.seatArray[0].length-1]=-1;
          this.seatArray[i][this.seatArray[0].length-2]=-1;
        }
        for(let i=0;i<9;i++){
          this.seatArray[i][this.seatArray[0].length-3]=-1;
        }
        for(let i=0;i<this.seatArray[0].length;i++){
        	this.seatArray[2][i]=-1;
        }

      }

    },

    mounted:function(){
      this.initSeatArray(10,20)

    }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .submit-block{
    height:1.733333rem;
    padding:.266667rem;
  }
  .submit{
    height:1.2rem;
    margin:auto;
    font-size:.48rem;
    font-weight:700;
    text-align: center;
    color: #fff;
    border-radius: .133333rem;
    line-height:1.2rem;
    background:#ffddb2;
  }
  .movie-info{
    width:100%;
    height:1.84rem;
    padding:.4rem;
  }
  .movie-info .title{
    width:8rem;
    height:.64rem;
    font-size: .426667rem;
    line-height:.64rem;
    text-align:left;
    font-weight: 700;
    color: #333;
  }
  .movie-info .info{
    font-size:.32rem;
    padding-top: .08rem;
    color: #777;
  }
  .buy-block{
    height:2.933333rem;
  }
  .recommend-block{
    padding: .1rem .1rem .07rem;
    display:flex;
    height:1.253333rem;
    padding:.266667rem;
    justify-content:space-between;
  }
  .title{
      line-height:.853333rem;
    }
  .wrapper{
    overflow:auto;
    box-sizing: border-box;
  }
  .title{
    text-align: center;
  }
  .seat-wrapper{
    height:430px;
    background:#f2f1f6;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
  }
  .screen{
    margin: 0 auto;
    height:30px;
    width:300px;
    background-color: #e3e3e3;
    border-radius: 0 0 30px 30px;
    color: #585858;
    line-height: 30px;
    text-align: center;
  }
  .inner-seat-wrapper{
    position: absolute;
    top:100px;
    bottom:0;
    width:100%;
    box-sizing: border-box;
  }
  .seat{
    float:left;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .inner-seat{
    width:80%;
    height:80%;
    cursor: pointer;
  }
  .selected-seat{
    background: url('../../assets/selected.png') center center no-repeat;
    background-size: 100% 100%;
  }
  .unselected-seat{
    background: url('../../assets/unselected.png') center center no-repeat;
    background-size: 100% 100%;
  }
  .bought-seat{
    background: url('../../assets/bought.png') center center no-repeat;
    background-size: 100% 100%;
  }
  .screen-center{
    position: absolute;
    left:51.5%;
    transform: translateX(-50%);
    padding:5px;
    font-size: 13px;
    border-radius: 5px;
    top:50px;
    background-color: #f6f6f6;
    color: #636363;
    border:1px solid #b1b1b1;
  }
  .mid-line{
    position: absolute;
    left:50%;
    transform: translateX(-50%);
    top:100%;
    width:1px;
    height:800px;
    border-left:1px dashed #919191;
  }
  .btn-wrapper{
    margin: 10px auto;
    width:800px;
    height:30px;
    text-align: center;
  }
  .btn-buy{
    display: block;
    float: left;
    margin-left: .08rem;
    text-align: center;
    box-sizing: border-box;
    width: 1.333333rem;
    height: .853333rem;
    line-height: .853333rem;
    border: 1px solid #d7d7d7;
    border-radius: .02rem;
    font-size: .11rem;
  }
  .illustration{
    position: absolute;
    bottom: 20px;
    height:35px;
    width:300px;
  }
  .illustration-img-wrapper{
    width:25px;
    height:25px;
    position: relative;
    top:50%;
    display: inline-block;
    transform: translateY(-50%);
    margin-left: 10px;
  }
  .illustration-text{
    display: inline-block;
    height:100%;
    line-height: 35px;
    font-size: 14px;
    position: relative;
    top:20px;
  }

</style>
