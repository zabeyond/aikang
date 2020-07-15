<template>
    <div>
        <regheader></regheader>
        <div class="reg">

            <div class="reg_big">

                <div class="i g2" >
                    <img src="../../assets/images/zhuce01.png" alt="">
                    <input type="text" placeholder="原始密码" v-model="old" @blur="oldpwd" @focus="olds">
                </div>

                <div class="i">
                    <img src="../../assets/images/zhuce02.png" alt="">
                    <input type="password" placeholder="请输入新密码" v-model="xin" @blur="xins" @focus="x1">
                </div>

                <div class="i">
                    <img src="../../assets/images/zhuce03.png" alt="">
                    <input type="password" placeholder="确认密码" v-model="xinx" @blur="xinss" @focus="x2">
                </div>

                <div class="baoc" @click="gengxin">保存</div>
                 <p class="tit">{{errs}}</p>
            </div>
               
        </div>
    </div>
</template>
<script>
import regheader from "@/components/regheader";
export default {
  components: {
    regheader
  },
  data(){
      return{
          old:"",
          xin:"",
          xinx:"",
          errs:""
      }
  },
  methods:{
      oldpwd(){
          if(this.old==""){
              this.errs="原始密码不能为空哦"
              return false
          }
          if(this.old!==sessionStorage.getItem('password')){
              this.errs="原始密码填写错误"
              return false
          }
          return true
      },
      xins(){
          if(this.xin==""){
              this.errs="密码输入不能为空哦"
              return false
          }
          return true
      },
      xinss(){
          if(this.xinx==""){
              this.errs="密码输入不能为空哦"
              return false
          }
          if(this.xin!==this.xinx){
              this.errs="两次输入的密码不一样哦"
              return  false
          }
          return true
      },
      olds(){
          this.errs=""
      },
      x1(){
          this.errs=""
      },
      x2(){
          this.errs=""
      },
      gengxin(){
          var sub=this.oldpwd()&&this.xins()&&this.xinss()
          if(sub){
            let formData=new FormData()
            formData.append('userid',sessionStorage.getItem('id'))
            formData.append('oldpwd',sessionStorage.getItem('password'))
            formData.append('newpwd',this.xin)
            formData.append('newpwd1',this.xinx)
              this.$axios({
                  url:"/api/index.php/api/updpwd",
                  method:'post',
                  data:formData
              }).then(res=>{
                  if(res.data.sta==200){
                    this.errs="更改密码成功,正在为您跳转登录页"
                    setTimeout(()=>{
                        this.$router.push('/')
                    },1500)
                  }else if(res.data.sta){
                      this.errs="操作失败，请重试"
                  }
              })
          }else{
              this.errs="填写的不正确哦"
          }
      }
  }
};
</script>
<style lang="scss" scoped>
    .reg{
        background: url('../../assets/images/denglu01.png') no-repeat center center;
        background-size: 100% 100%;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }
    .reg_big{
        width: 610px;
        height: 680px;
        background: #ffffff;
        margin-bottom: 90px;
        border-radius: 30px;
        box-shadow: 5px 5px 15px 10px #dedede;
        .i{
            width: 480px;
            height: 95px;
            border-bottom: 1px solid #dedede;
            margin: 0 auto;
            display: flex;
            .g22{
                width: 35px;
                height: 35px;
            }
            img{
                width: 27px;
                height: 32px;
                padding: 35px 25px;
            }
            input{
                outline: none;
                border: none;
                width: 400px;
                height: 80px;
                font-size: 28px;
                font-weight:500;
                margin-top: 14px;
            }
        }
        .tit{
            font-size: 28px;
            color: red;
            line-height: 100px;
        }
        .baoc{
            background: url('../../assets/images/zhuce04.png') no-repeat;
            width: 480px;
            height: 83px;
            background-size: 100%;
            font-size: 36px;
            font-weight:400;
            color:rgba(255,255,255,1);
            margin-left: 65px;
            line-height: 88px; 
            margin-top: 60px;
        }
    }
</style>