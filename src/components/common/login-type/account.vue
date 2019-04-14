<template>
    <div>
        <form class="account-form" action="" @submit.prevent="subMsg">
            <div class="input msg-input">
                <input type="text" :style="!isSend?style.verify:{}"  v-model="phoneNum" placeholder="手机号">
            </div>
            <div class="input password-input">
                <input type="password" v-model="password" placeholder="请输入您的密码">
            </div>
            <div class="btn-wrap">
                <button :style="style.btn" @click="register" class="account-login"> 注册 </button>
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
            msg:'',
            password:'',
            isSend:'',
            style:{
                verify:{
                  background: "rgba(229, 72, 71,0.2)"
                },
                btn:{
                  background: '#df2d2d'
                },
                code:'send-code-active'
            },
        }
    },
    methods:{
        subMsg(){
            console.log('ok')
        },
        register(){
          if(!this.isSend){
            let instance = Toast('输入正确格式的手机号');
            return
          }
          if(!this.password){
            let instance = Toast('请输入密码');
            return
          }
          this.$http({
                    url: '/zq/register',
                    method: 'POST',
                    data: {
                        password: this.password,
                        username: this.phoneNum
                    }
                }).then((res)=>{
                    if(res.status){
                        this.$router.push('/login/phone')
                    }else{
                      let instance = Toast(res.mes);
                    }
                })
        }
    },
    watch:{
        phoneNum:{ 
            immediate:true,
            handler(){
                let result = /^1[34578]\d{9}$/.test(this.phoneNum.trim())
                if(result){
                    this.isSend = true
                } else {
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
            button.account-login{
                width: 9.466667rem;
                height: 1.253333rem;
                border: none;
                text-align: center;
                font-size: .533333rem;
                color: white;
                line-height: 1.253333rem;
                border-radius: .06rem;
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
