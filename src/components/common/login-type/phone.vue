<template>
    <div>
        <form class="account-form" @submit.prevent="subMsg" action="">
            <div class="input msg-input">
                <input class="phone-num" :style="!isSend?style.verify:{}" v-model="phoneNum" type="text" placeholder='请输入手机号'>
            </div>
            <div class="input password-input">
                <input type="password" v-model="code" placeholder="请输入密码">
            </div>
            <div class="btn-wrap">
                <button :style="style.btn"> 登录 </button>
            </div>
            <p class="foot">@猫眼电影 客服电话：<span class="number">400-670-5335</span> </p>
        </form>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return{
            phoneNum:'13874715311',
            code:'',
            style:{
                verify:{
                  background: "rgba(229, 72, 71,0.2)"
                },
                btn:{
                  background: '#df2d2d'
                },
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
            if(!this.code){
              let instance = Toast('请输入密码');
              return
            }
            if(!this.isSend){
              let instance = Toast('输入正确格式的手机号');
              return
            }
            if(!this.isFinish) return false
            this.isFinish = false
            this.$http({
                url: '/zq/login',
                method: 'POST',
                data: {
                    password: this.code,
                    username: this.phoneNum
                }
            }).then((res)=>{
                if(res.status){
                    localStorage.setItem('userInfo',res.userId) 
                    this.$router.push('/')
                }else{
                  let instance = Toast(res.mes);
                }
                this.isFinish = true
            })
            
        },
       
    },
    watch:{
        phoneNum:{ 
            immediate:true,
            handler(){
                let result = /^1[34578]\d{9}$/.test(this.phoneNum.trim())
                this.isSend = result
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
                width: 9.466667rem;
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
                // background: #dcdcdc;
            }
            .btn-active{   
                // background: #df2d2d;
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
