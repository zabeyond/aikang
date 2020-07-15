<template>
    <div>
       <div class="login">

           <div class="login_big">

                <div class="login_one">
                    <img src="../../assets/images/logo.png" alt="">
                    <p>安徽爱康医疗服务科技有限公司</p>
                </div>

               <div class="i1">
                   <img src="../../assets/images/denglu02.png" alt="">
                   <input type="text" placeholder="用户名" v-model="userName" @focus="checkUser">
               </div>
                
               <div class="i2">
                   <img src="../../assets/images/denglu03.png" alt="">
                   <input type="password" placeholder="请输入密码" v-model="passWord" @focus="checkPass">
                    <span class="Err">{{err}}</span>
               </div>
               <div class="rember">
                   <input type="checkbox" v-model="checked">&nbsp;<span>记住密码</span>
               </div>

                <div class="btn" @click="btn">登录</div>
                
           </div>

       </div>
    </div>
</template>
<script>

export default {
    data(){
        return{
            userName:"",
            passWord:"",
            err:"",
            checked:false,
        }
    },
     
    methods:{
        checkUser(){
            this.err="";
        },
        checkPass(){
            this.err="";
        },
        
        btn(){
            if(this.userName==""){
                this.err="用户名不能为空哦"
                return false
            }
            if(this.passWord==""){
                this.err="密码不能为空哦"
                return false
            }
            if(this.userName&&this.passWord){
                sessionStorage.setItem('password',this.passWord)
                let formData=new FormData()
                formData.append('username',this.userName)
                formData.append('pwd',this.passWord)
                this.$axios({
                    url:"/api/index.php/api/login",
                    method:'post',
                    data:formData
                    }).then(res=>{
                    // console.log(res.data)
                    if(res.data.sta==200){
                        this.err="登陆成功！"
                        sessionStorage.setItem('id',res.data.res.id)
                        sessionStorage.setItem('name',res.data.res.username)
                        sessionStorage.setItem('sex',res.data.res.sex)

                        sessionStorage.setItem('NAME',res.data.res.name)
                        
                        setTimeout(()=>{
                            this.$router.push("/index")
                        },1500)
                    }else if(res.data.sta==100){
                        this.err="用户名或密码错误，请重新填写"
                    }
                })
               
            }
    }}
}
</script>
<style lang="scss" scoped>
    .login{
        background: url('../../assets/images/denglu01.png') no-repeat center center;
        background-size: 100% 100%;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }
    .login_big{
        width: 650px;
        height: 910px;
        background: #ffffff;
        margin-bottom: 79px;
        border-radius: 20px;
        .login_one{
            img{
                width: 147px;
                height: 70px;
                margin-top: 70px;
            }
            p{
                font-size: 28px;
                font-weight: 500;
                color:rgba(153,153,153,1);
            }
        }
        
        .i1,.i2{
            display: flex;
            width: 554px;
            background: #f1f1f1;
            margin-top: 40px;
            height: 90px;
            border-radius: 10px;
            margin-left: 50px;
            position: relative;
        }
        .i1 img{
            width: 40px;
            height: 46px;
            padding: 22px 22px;
        }
        .i2 img{
            width: 34px;
            height: 42px;
            padding: 23px 23px;
        }
        input{
            width: 504px;
            border-radius: 10px;
            background: #f1f1f1;
            border: none;
            outline: none;
            font-size: 30px;
            font-weight: 500;
            color:rgba(153,153,153,1);
        }
        .rember{
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding-right: 55px;
            line-height: 70px;
            input{
                width: 18px;
                height: 18px;
            }
            span{
                font-size: 24px;
                font-weight:500;
                color:#51ABFF;
            }
        }
        .btn{
            background: url('../../assets/images/denglu04.png') no-repeat center center;
            width: 543px;
            height: 88px;
            background-size: 100%;
            font-size: 36px;
            font-weight:400;
            color:rgba(255,255,255,1);
            margin-left: 53px;
            line-height: 88px;
        }
        .mima{
            width: 554px;
            margin: 0 auto;
            font-size: 30px;
            font-weight:500;
            margin-top: 35px;
            display: flex;
            justify-content: space-between;
            a{
                color:rgba(153,153,153,1);
            }
        }
        .Err{
            position: absolute;
            left: 0;
            font-size: 25px;
            color: red;
            top: 100px;
        }
    }
</style>