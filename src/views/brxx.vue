<template>
  <div>
    <headers :title="'编辑本人信息'" :background="'#ffffff'"></headers>
    <div class="laji"></div>
    <ul class="br_xx">
      <li>
        <div>姓名</div>
        <input type="text" placeholder="请输入姓名" v-model="name" @blur="checkUser" @focus="checkuse"/>
      </li>
      <li>
        <div>性别</div>
        <div class="xuanze">
          <div class="xz1">
            <img @click="tab()" :src="[ison==true? require('../assets/images/blue1.png') : require('../assets/images/blue.png')]"/>
            <p>男</p>
          </div>
          <div class="xz1">
            <img @click="tab()" :src="[ison==true? require('../assets/images/blue.png') : require('../assets/images/blue1.png')]"/>
            <p>女</p>
          </div>
        </div>
      </li>
      <li>
        <div>婚史</div>
        <div class="xuanze">
          <div class="xz1">
            <img @click="tabs()" :src="[isons==true? require('../assets/images/blue1.png') : require('../assets/images/blue.png')]"/>
            <p>已婚</p>
          </div>
          <div class="xz1">
            <img @click="tabs()" :src="[isons==true? require('../assets/images/blue.png') : require('../assets/images/blue1.png')]"/>
            <p>未婚</p>
          </div>
        </div>
      </li>
      <li>
        <div>年龄</div>
        <input type="text" placeholder="请输入年龄" v-model="age" @blur="checkAge" @focus="checkage"/>
      </li>
      <li>
        <div>证件号</div>
        <input type="text" placeholder="请输入身份证号" v-model="Idcard" @blur="checkId" @focus="checkid"/>
      </li>
      <li>
        <div>详细地址</div>
        <input type="text" placeholder="请输入家庭住址" v-model="address" @blur="checkAdd" @focus="checkadd"/>
      </li>
      <li>
        <div>手机号</div>
        <input type="text" placeholder="请输入手机号" v-model="tel" @blur="checkTel" @focus="checktel"/>
      </li>
    </ul>
    <div class="br_bc" @click="my(ipage)">保存</div>
    <p class="errs">{{err}}</p>
  </div>
</template>
<script>
import headers from "@/components/headers";
export default {
  components: {
    headers
  },
  data() {
    return {
      name:"",
      sex:"",
      marride:"",
      age:"",
      Idcard:"",
      address:"",
      tel:"",
      ison: false,
      isons: false,
      err:"",

      message:[],

      ipage:"",  // 记录是从哪个页面过来的
    };
  },
  created(){

      //  获取从哪个页面过来的 1 是提交订单  0 是个人主页
      this.ipage=this.$route.query.page
      // console.log(this.ipage)
    
      if(this.ison==true){
        this.sex="男"
      }else{
        this.sex="女"
      }
      if(this.isons==true){
        this.marride="已婚"
      }else{
        this.marride="未婚"
      }
      // console.log(this.sex)
      // console.log(this.marride)
      // this.atts2.push(this.$route.query.atts2)
      // this.everyId2.push(this.$route.query.everyId2)
      
      // console.log(this.atts2)
      // console.log(this.everyId2)
  },
  methods: {
    tab() {
      this.ison == true ? (this.ison = false) : (this.ison = true);
      if(this.ison==true){
        this.sex="男"
      }else{
        this.sex="女"
      }
      // console.log(this.sex)
    },
    tabs() {
      this.isons == true ? (this.isons = false) : (this.isons = true);
      if(this.isons==true){
        this.marride="已婚"
      }else{
        this.marride="未婚"
      }
      // console.log(this.marride)
    },
    //  正则判断
    checkUser(){
       if(this.name==""){
          this.err="姓名不能为空哦";
          return false;
      }
      return true
    },
    checkAge(){
       if(this.age==""){
          this.err="年龄不能为空哦";
          return false;
      }
      if(!(/^(?:[1-9][0-9]?|1[01][0-9]|120)$/.test(this.age))){
        this.err="年龄输入不合法哦"
        return false
      }
      return true
    },
    checkId(){
       if(this.Idcard==""){
          this.err="证件号不能为空哦";
          return false;
      }
      if(!(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.Idcard))){
        this.err="证件号输入不合法哦"
        return false
      }
      return true
    },
    checkAdd(){
       if(this.address==""){
          this.err="地址不能为空哦";
          return false;
      }
      return true
    },
    checkTel(){
       if(this.tel==""){
          this.err="手机号不能为空哦";
          return false;
      }
       if(!(/^[1][3,4,5,7,8][0-9]{9}$/.test(this.tel))){
        this.err="手机号输入的不对哦"
        return false
      }
      return true
    },

    // 获取焦点 提示消失
    checkuse(){
      this.err="";
    },
    checkage(){
      this.err="";
    },
    checkid(){
      this.err="";
    },
    checkadd(){
      this.err="";
    },
    checktel(){
      this.err="";
    },

    my(ipage) {
      var sub=this.checkUser()&&this.checkAge()&&this.checkId()&&this.checkAdd()&&this.checkTel()
      if(sub){
        let formData=new FormData()
        formData.append('userid',sessionStorage.getItem('id'))
        formData.append('Idcard',this.Idcard)
        formData.append('name',this.name)
        formData.append('sex',this.sex)
        formData.append('birthday',this.age)
        formData.append('address',this.address)
        formData.append('married',this.marride)
        formData.append('tel',this.tel)

        this.message.push(this.name,this.sex,this.marride,this.age,this.Idcard,this.address,this.tel)

        this.$axios({
          url:"/api/index.php/api/addperson",
          method:'post',
          data:formData
        }).then(res=>{
          if(res.data.sta==200){
            this.err="保存成功";
            // localStorage.setItem('tel',this.tel)
            // console.log(this.sex,)
            if(ipage=='1'){
              sessionStorage.setItem('NAME',this.name)
              setTimeout(()=>{
                this.$router.push({name:'ddtj',query:{new1:'1',mes:this.message}})
              },1500)
            }
            if(ipage=='2'){
              setTimeout(()=>{
                this.$route.push({name:'ddtj'})
              },1500)
            }
            if(ipage=='0'){
              setTimeout(()=>{
                this.$router.push({name:'my'})
              },1500)
            }
            
          }else if(res.data.sta==100){
            this.err="操作失败，请重试"
          }
        })
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.laji {
  width: 750px;
  height: 80px;
}
.br_xx {
  width: 750px;
  background: #ffffff;
  border-top: 1px solid #dedede;
  li {
    width: 700px;
    height: 95px;
    margin: 0 auto;
    border-bottom: 1px solid #dedede;
    display: flex;
    justify-content: space-between;
    input {
      width: 550px;
      border: none;
      outline: none;
      font-size: 28px;
    }
    div {
      line-height: 95px;
      font-size: 28px;
    }
    .xuanze {
      width: 550px;
      display: flex;
      .xz1 {
        display: flex;
        align-items: center;
        margin-right: 40px;
        img{
          width: 34px;
          height: 34px;
          margin-right: 20px;
        }
      }
    }
  }
}
.errs{
  font-size: 28px;
  color: red;
}

.br_bc {
  width: 700px;
  height: 90px;
  background: #51abff;
  border-radius: 20px;
  margin: 40px auto;
  font-size: 30px;
  color: #ffffff;
  line-height: 90px;
}
</style>