<template>
  <div>
    <!-- 头像一块 -->
        <div class="myher">
              <img src="../assets/images/myimg.png" alt class="mypp"/>
          <div>
              <p>{{userNAME}}</p>
              <div class="us">普通用户</div>
          </div>
          <div class="jiesh">
              <router-link to="/yydd">
              <div>
              <img src="../assets/images/my03.png" alt />
              <p>预约订单</p>
              </div></router-link>
              <router-link to="/tjbg">
                <div>
              <img src="../assets/images/my04.png" alt />
              <p>体检报告</p>
              </div>
              </router-link>
              <router-link to="/gmjl">
                <div>
              <img src="../assets/images/my05.png" alt />
              <p>购买记录</p>
              </div>
              </router-link>
          </div>
      </div>

<!-- 个人信息 -->
    <div class="user">
        <ul>
            <router-link :to="{name:'brxx', query: {page:'0'}}">
              <li>
                <img src="../assets/images/brxx.png" alt="">
                <p>本人信息</p>
                <img src="../assets/images/index07.png" alt="" class="ooo">
            </li>
            </router-link>
            <router-link to="/reg">
            <li class="iiu">
                <img src="../assets/images/xgmm.png" alt="">
                <p>修改密码</p>
                <img src="../assets/images/index07.png" alt="" class="ooo">
            </li>
            </router-link>
        </ul>
    </div>
<div class="dian"></div>
    <pagefoot :idx="2"></pagefoot>
  </div>
</template>
<script>
import pagefoot from "@/components/pagefoot.vue";
export default {
  components: {
    pagefoot
  },
  data(){
    return{
      userNAME:"",
    }
  },
  created(){
    // console.log(sessionStorage.getItem('sex'))
    // console.log(sessionStorage.getItem('sex1'))
    let formData=new FormData()
    formData.append('userid',sessionStorage.getItem('id'))
      this.$axios({
        url:"/api/index.php/api/person",
        method:'post',
        data:formData
      }).then(res=>{
        // console.log(res)
      })
    this.userNAME=sessionStorage.getItem('name')
  },
  methods:{

  }
};
</script>
<style lang="scss" scoped>

//  头像一块
.myher {
  background: url("../assets/images/my01.png") no-repeat center center;
  background-size: 100%;
  width: 750px;
  height: 434px;
  display: flex;
  align-items: center;
  position: relative;
  .mypp{
    width: 119px;
    height: 119px;
    border-radius: 50%;
    padding: 0 43px;
  }
  div {
    p {
      font-size: 36px;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
    }
    .us{
      width: 116px;
      height: 38px;
      border: 1px solid #ffff;
      border-radius: 10px;
      font-size:22px;
      font-family:PingFang SC;
      font-weight:500;
      color:rgba(255,255,255,1);
      margin-top: 12px;
    }
  }
  .jiesh {
    background: url("../assets/images/my02.png") no-repeat center center;
    background-size: 100%;
    width: 690px;
    height: 160px;
    position: absolute;
    bottom: -90px;
    left: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img{
        width: 48px;
        height: 48px;
    }
    p{
        font-size: 28px;
        font-weight:500;
        color:rgba(182,182,182,1);
    }
  }
}

// 个人信息
.user{
    background: url("../assets/images/my06.png") no-repeat center center;
    background-size: 100%;
    width: 690px;
    height: 220px;
    margin: 0 auto;
    margin-top: 110px;
    border-radius: 20px;
    ul{
        li{
            width: 662px;
            padding: 34px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 0 auto;
            border-bottom: 1px solid #dedede;
            p{
                font-size: 32px;
                font-weight:500;
                color:rgba(51,51,51,1);
                padding-right: 470px;
            }
        }
        img{
            width: 38px;
            height: 38px;
        }
        .ooo{
            width: 12px;
            height: 21px;
        }
        .iiu{
            border: none;
        }
    }
}

.dian {
  width: 750px;
  height: 110px;
  margin-top: 30px;
}
</style>