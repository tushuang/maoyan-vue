<template>
    <div>
        <form class="account-form" @submit.prevent="subMsg" action="">
            <div class="input msg-input">
                <input class="phone-num" v-model="phoneNum" type="text" placeholder='请输入手机号'>
                <span @click='sendCode'  class="send-code" :class="isSend?className.code:''">{{(isSend || !addClass)?text:time+'s'}}</span>
            </div>
            <div class="input password-input">
                <input type="password" v-model="code" placeholder="请输入短信验证码">
            </div>
            <div class="btn-wrap">
                <button :class="addClass?className.btn:''"> 登录 </button>
            </div>
            <div class="tips">
                <span class="tip-item">立即注册</span>
                <span class="tip-item">找回密码</span>
            </div>
            <p class="foot">@猫眼电影 客服电话：<span class="number">400-670-5335</span> </p>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            phoneNum:'13874715311',
            code:'',
            addClass:false,
            className:{
                btn:'btn-active',
                code:'send-code-active'
            },
            time:60,
            isSend:false,
            text:'请发送验证码',
            isFinish:true   // 请求未完成时不能重复发送
        }
    },
    methods:{
        subMsg(){
            if(this.addClass && this.code){
                if(!this.isFinish) return false
                this.isFinish = false
                this.$http({
                    url: '/mz/v4/api/login',
                    method: 'POST',
                    data: {
                        loginType: 1,
                        password: this.code,
                        username: this.phoneNum
                    }
                }).then((res)=>{
                    if(res.status === 0){
                        localStorage.setItem('userInfo',JSON.stringify(res.data.data)) 
                    }
                    this.isFinish = true
                })
            }
        },
        sendCode(){  // 点击后发送请求
             if ( this.isSend ) {// 发送验证码
                // ajax 如过成功
                if(!this.isFinish) return false
                this.isFinish = false
                this.$http({
                    url: '/mz/v4/api/code',
                    method: 'POST',
                    data: {
                        mobile: this.phoneNum,
                        type: "2"
                    }
                }).then((res)=>{
                    if(res.status === 0){
                        this.authCode()
                        this.isSend = false;
                    }else{
                        this.text = '重新发送'
                    }
                    this.isFinish = true
                })
            }
        },
        authCode(){  // 点击发送按钮后 请求成功才改变时间
            let timer = setInterval(()=>{
                this.time--
                if(this.time === 0){
                    clearInterval(timer)
                    this.isSend = true;
                    this.time = 60
                }
            },1000)
        }
    },
    watch:{
        phoneNum:{ 
            immediate:true,
            handler(){
                let result = /^1[34578]\d{9}$/.test(this.phoneNum.trim())
                if(result){
                    this.addClass = true
                    this.isSend = true
                } 
                else {
                    this.addClass = false
                    this.isSend = false
                }
            }
        }
    }
}
</script>

<style lang="scss">
    input,input:active{
        border: none;
        outline:none;
    }
    .account-form{
        .input{
            width: 100%;
            height: 1.173333rem;
            padding-left: .266667rem;
            line-height: 1.173333rem;
            border-bottom: 1px solid #e6e6e6;
            background: white;
            .phone-num{
                width: 6.533333rem;
            }
            .send-code{
                display: inline-block;
                background-color: #dcdcdc;
                color: #999;
                width: 2.666667rem;
                height: .8rem;
                line-height: .8rem;
                padding-left: .266667rem;
                margin-left:.346667rem;
                text-align: center;
            }
            .send-code-active{
                color: #df2d2d;
                border: 1px solid #df2d2d;
                background: white;
            }
            input{
                width: 9.466667rem;
                height: .8rem;
                line-height: .8rem;
                border-radius: .06rem;
                padding-left: .133333rem;
                font-size: .426667rem;
            }
            input:focus{
                background: #e6e6e6;
            }
            border-bottom: 1px solid #e6e6e6;
        }
        .btn-wrap{
            width: 9.466667rem;
            height: 1.253333rem;
            margin: auto;
            margin-top: .373333rem;
            margin-bottom: .373333rem;
            button{
                width: 9.466667rem;
                height: 1.253333rem;
                border: none;
                text-align: center;
                font-size: .533333rem;
                color: white;
                line-height: 1.253333rem;
                border-radius: .06rem;
                background: #dcdcdc;
            }
            .btn-active{   
                background: #df2d2d;
            }
        }
        .tips{
            display: flex;
            justify-content: space-between;
            padding-left: .266667rem;
            padding-right: .266667rem;
            .tip-item{
                color: #df2d2d;
                font-size: .373333rem;        
            }
        }
        .foot{
            margin-top: .373333rem;
            font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
            font-size: .373333rem;
            text-align: center;
            line-height: 1;
            color: #333;
            .number{
                color: #df2d2d;
            }
        }
    }
</style>
