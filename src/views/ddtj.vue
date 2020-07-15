<template>
  <div>
    <!-- 固定的一部分 -->
    <headers :title="'提交订单'"></headers>
    <div class="laji"></div>
    <div class="dd_title">提交订单</div>
    <div class="title_one">请选择体检日期</div>
    <div class="dd_txt" @click="tjriqi">
      <div>体检日期</div>
      <input type="text" placeholder="请选择" :value="tjtime"/>
      <img src="../assets/images/xzyy02.png" alt />
    </div>
    <div class="title_one">请选择体检人</div>
    <div class="dd_txt" @click="tjren">
      <div>体检人</div>
      <input type="text" placeholder="请选择" :value="tjuser"/>
      <img src="../assets/images/xzyy02.png" alt />
    </div>
      <div class="next" @click="gotjdd">下一步</div>
      <p class="tjerr">{{tjerr}}</p>

    <!-- 体检日期部分 -->

    <div class="mubu" v-show="mubu">
      <div class="date" >
        <!-- 提示 -->
        <div class="tishi">
          <img src="../assets/images/ddtj01.png" alt />
          <p>请按预约时间准时到达体检中心</p>
        </div>

        <!-- 体检日期标题  切换 预约可预约  一部分 -->
        <div class="riqi">
          <p>体检日期</p>
          <div class="riqi_1">
            <img @click="yue=!yue" :src="yue? require('../assets/images/blue1.png') : require('../assets/images/blue.png')"/>
            <p :class="{riqi_ziti:yue}" @click="riqi()">只显示可约</p>
          </div>
        </div>

        <!-- 日期 -->
      <div class="days">
        <ul class="dayDate">
          <li @click="pick(day,index)" v-for="(day, index) in days" :key="index" :class="i==index ? 'white' : ''">
            <!--本月-->

            <p :class="i==index ? 'p' : ''" ref="menuItem">{{weeks[day.getDay()]}}</p>
            
            <span v-if="day.getMonth()+1 != currentMonth" class="other-month" :class="i==index ? 'p' : ''">{{ day.getMonth()+1 }}月{{ day.getDate() }}日</span>
            <span :class="i==index ? 'p' : ''" v-else>
          <!--今天-->
          <span :class="i==index ? 'p' : ''" v-if="day.getFullYear() == new Date().getFullYear() && day.getMonth() == new Date().getMonth() && day.getDate() == new Date().getDate()" class="active">{{ day.getMonth()+1 }}月{{ day.getDate() }}日</span>
          <span :class="i==index ? 'p' : ''" v-else>{{ day.getMonth()+1 }}月{{ day.getDate() }}日</span>

          </span>
            <span :class="i==index ? 'p' : ''" class="tad" v-if="day.getFullYear() == new Date().getFullYear() && day.getMonth() == new Date().getMonth() && day.getDate() == new Date().getDate()">今天</span>
            <!-- <span :class="i==index ? 'p' : ''" v-else class="lihe">余人</span> -->
          </li>
        </ul>
      </div>

        <!-- 点击显示或隐藏 -->
        <div class="show" v-show="flagout">
          <!-- <div class="show1">上午余(29)人</div> -->
          <p>
            <span>当前选择时间：</span>
            <span>{{nowTime}}</span>
          </p>
        </div>

        <!-- 确定按钮 -->
        <div class="qued">
          <div :class="{btn:flagone}" @click="tijiao">确定</div>
        </div>
        <div class="dibu"></div>
      </div>
    </div>

    <!-- 体检人部分 -->
    <div class="mubu" v-show="mubu2">
      <div class="nine">

        <div class="nine1">
          <p><span>选择体检人</span><span>(该套餐仅限女性)</span></p>
          <div @click="goxj">
            <img src="../assets/images/ddtj02.png" alt="">
            <span>新建体检人</span>
          </div>
        </div>
        <div class="nine_bai"></div>

        <div class="nine2" @click="up">
          <div class="mytitle">
            <img src="../assets/images/xzyy05.png" alt="">
            <p>{{user}}</p>
          </div>

          <div class="mywan" v-if="good">
            <router-link :to="{name:'brxx',query: {page:'2'}}" v-if="good">
            <div class="gowan">去完善</div>
            </router-link>
            <img src="../assets/images/sexbf.png" alt="" v-if="sex">
            <img src="../assets/images/ddtj03.png" alt="" v-else>
          </div>

          <h3 v-if="yes">信息可以使用！</h3>
        </div>

        <div class="quxiao" v-if="good">
          <div @click="quxiao">取消</div>
        </div>

      </div>
    </div>

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
      tjtime:"",   // 需要添加到搜索框的时间
      tjuser:"",    // 显示在搜索框的体检人
      user:"",   // 登录体检人的姓名
      good:true,   // 判断信息是否需要完善

      yes:false,  // 可以使用时 提示的信息

      sex:false,

      nowTime:"", // 选择的时间
      weekTime:"",  // 选择的星期几
      yue:false,  // 控制只显示可约
      
      mubu: false,  // 控制体检日期显示隐藏
      mubu2: false, // 控制体检人显示隐藏
      flagout: false, // 判断是否隐藏选中的内容
      flagone: false, // 判断是否给 确定 键加类名
      i: -1, // 是否添加类名 （背景色）
      currentYear: 1970,   // 年份
        currentMonth: 1,  // 月份
        currentDay: 1,    // 日期
        currentWeek: 1,    // 星期
        days: [],
        weeks:[
          "周日","周一","周二","周三","周四","周五","周六"
        ],
        tjerr:"",  // 错误信息提示

        new:"",  // 需要给后端的提示  看用户是否新建了体检人

        mes:[],

    };
  },
   created () {
      this.initData(null)

      this.user=sessionStorage.getItem('NAME')
      console.log(this.$route.query.new1)

      this.new=this.$route.query.new1
      // console.log(this.new)
      this.mes=this.$route.query.mes
      // console.log(this.mes)

      //  发送请求
      let formData=new FormData()
      formData.append('userid',sessionStorage.getItem('id'))
      
      formData.append('cid',sessionStorage.getItem('att')[2])
      this.$axios({
        url:"/api/index.php/api/selmember",
        method:'post',
        data:formData
      }).then(res=>{
        console.log(res)
        if(res.data.sta==400){
          this.good=true
          this.sex=true
        }else if(res.data.sta==300){
          this.good=true
          this.sex=false
        }else if(res.data.sta==200){
          this.good=false
          this.yes=true
        }
      })
      
    },
    methods: {
      formatDate (year, month, day) {
        const y = year
        let m = month
        if (m < 10) m = `0${m}`
        let d = day
        if (d < 10) d = `0${d}`
        return `${y}-${m}-${d}`
      },

      initData (cur) {
        let date = ''
        if (cur) {
          date = new Date(cur)
        } else {
          date = new Date()
        }
        this.currentDay = date.getDate()          // 今日日期 几号
        this.currentYear = date.getFullYear()       // 当前年份
        this.currentMonth = date.getMonth() + 1    // 当前月份
        this.currentWeek = date.getDay() // 1...6,0   // 星期几
        if (this.currentWeek === 0) {
          this.currentWeek = 7
        }
        const str = this.formatDate(this.currentYear, this.currentMonth, this.currentDay)// 今日日期 年-月-日
        this.days.length = 0
        // 今天是周日，放在第一行第7个位置，前面6个 这里默认显示一周，如果需要显示一个月，则第二个循环为 i<= 35- this.currentWeek
        /* eslint-disabled */
        for (let i = this.currentWeek - 7; i >= 0; i -= 1) {
          const d = new Date(str)
          d.setDate(d.getDate() - i)
          this.days.push(d)
        }

        for (let i = 1; i <= 35 - this.currentWeek; i += 1) {
          const d = new Date(str)
          d.setDate(d.getDate() + i)
          this.days.push(d)
        }
      },

    //  上个星期
      weekPre () {
        const d = this.days[0]    // 如果当期日期是7号或者小于7号
        d.setDate(d.getDate() - 7)
        this.initData(d)
      },
      //  下个星期
      weekNext () {
        const d = this.days[6]    // 如果当期日期是7号或者小于7号
        d.setDate(d.getDate() + 7)
        this.initData(d)
      },
      // 上一個月   传入当前年份和月份
      pickPre (year, month) {
        const d = new Date(this.formatDate(year, month, 1))
        d.setDate(0)
        this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1))
      },
      // 下一個月   传入当前年份和月份
      pickNext (year, month) {
        const d = new Date(this.formatDate(year, month, 1))
        d.setDate(35)
        this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1))
      },

    // 当前选择日期
    pick(date, index,e) {
      this.flagout = true;
      this.i = index;

      let weekTxt = this.$refs.menuItem[index].innerText;
      let weekText=weekTxt.replace("周","星期")
      this.weekTime=weekText+"上午"
      if ((this.i = index)) {
        this.flagone = true;
      }
      this.nowTime=this.formatDate(date.getFullYear()+"年",(date.getMonth() + 1)+"月",date.getDate()+"日")
      this.nowTime=this.nowTime.replace(/-/g,'')
      // console.log(this.nowTime)
    },

    //  把日期提交到输入框
    tijiao(){
      this.tjtime=this.nowTime
      this.tjtime+=this.weekTime
      this.mubu=false
    },

    // 点击幕布出现
    tjriqi() {
      this.mubu = true;
      this.tjerr=""
    },
    tjren() {
      this.mubu2 = true;
      this.tjerr=""
    },

    //  点击切换  显示可约或不可约
    riqi() {
      this.yue = !this.yue;
    },

    //  如果信息是完善的
    up(){
      if(this.good==false){
        this.tjuser=this.user
        this.mubu2=false
      }
    },
    quxiao(){
      this.mubu2=false
    },

    // 判断搜索框是否为空  决定跳转页面
    gotjdd(){
      if((this.tjuser&&this.tjtime)==""){
        this.tjerr="选择不能为空哦"
      }else{
        sessionStorage.setItem('timeOne',this.nowTime)
        sessionStorage.setItem('timeTwo',this.weekTime)
        setTimeout(()=>{
          this.$router.push({name:'tjdd',query: {ty:this.new,me:this.mes}})
          // console.log(this.tjtime,this.nowTime,this.weekTime)
          // console.log(sessionStorage.getItem('everyId'))
          // console.log(sessionStorage.getItem('tjtime'))
          console.log(this.new)
        },100)
      }
    },

    // 跳转本人信息界面
    goxj(){
      this.$router.push({name:'brxx',query: {page:'1'}})
    }
  }
};
</script>
<style lang="scss" scoped>
.laji {
  width: 750px;
  height: 80px;
}

//  -------固定部分-------
.dd_title {
  width: 750px;
  height: 70px;
  background: #ffffff;
  border-bottom: 3px solid #51abff;
  line-height: 70px;
  font-size: 28px;
}
.title_one {
  width: 750px;
  height: 70px;
  background: #f7f7f7;
  font-size: 24px;
  line-height: 70px;
  text-align: left;
  box-sizing: border-box;
  padding: 0 20px;
  color: #999999;
}

// 搜索框内容
.dd_txt {
  width: 750px;
  height: 80px;
  background: #ffffff;
  display: flex;
  align-items: center;
  div {
    font-size: 28px;
    width: 170px;
    color: black;
    font-weight: 800;
    text-align: left;
    padding-left: 20px;
  }
  img {
    width: 18px;
    height: 18px;
  }
  input {
    height: 70px;
    font-size: 28px;
    width: 520px;
    border: none;
    outline: none;
  }
}
.next {
  width: 710px;
  height: 85px;
  background: #51abff;
  border-radius: 15px;
  line-height: 85px;
  color: #ffffff;
  margin-left: 20px;
  margin-top: 50px;
  font-size: 32px;
}

// ----- 体检日期部分------

// 幕布
.mubu {
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.2);
  position: fixed;
  top: 0;
}

//  内容
.date {
  width: 750px;
  position: absolute;
  bottom: 0;

  // 提示
  .tishi {
    width: 750px;
    height: 116px;
    background: #d3e1ee;
    display: flex;
    line-height: 116px;
    img {
      width: 28px;
      height: 34px;
      padding: 40px 30px;
    }
    p {
      font-size: 24px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(0, 0, 0, 1);
    }
  }

  // 体检日期标题  切换 预约可预约  一部分
  .riqi {
    width: 750px;
    height: 80px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 20px;
    p {
      font-size: 24px;
      font-family: PingFang SC;
      font-weight: 800;
      color: rgba(0, 0, 0, 1);
    }
    .riqi_1 {
      display: flex;
      justify-content: space-between;
      p {
        font-size: 26px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #666666;
      }
      img{
        width: 34px;
        height: 34px;
        margin-right: 20px;
      }
      .riqi_ziti {
        color: #51ABFF;
      }
      .riqi_tab {
        background: #51abff;
      }
    }
  }

  //  日期内容
  .days {
    display: flex;
    overflow-x: scroll;
    border-top: 1px solid #dedede;
    border-bottom: 1px solid #dedede;
    background: #ffffff;
    .dayDate {
      display: flex;
      
      .white {
          background: #51abff;
        }
        .p {
          color: #ffffff;
        }
      li {
        width: 112px;
        // height: 164px;
        border-radius: 10px;
        margin: 8px 5px;
        flex: 1;
        p {
          font-size: 26px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(0, 0, 0, 1);
          line-height: 49px;
          display: flex;
          justify-content: center;
        }
        span {
          font-size: 20px;
          font-family: PingFang SC;
          font-weight: 500;
          display: flex;
          justify-content: center;
        }
        .lihe {
          line-height: 89px;
          font-size: 22px;
          font-family: PingFang SC;
          font-weight: 500;
        }
        .tad {
          font-size: 22px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(81, 171, 255, 1);
        }
      }
    }
    .yu{
      color: rgba(153, 153, 153, 1);
    }
  }

  // 点击显示或隐藏
  .show {
    width: 750px;
    // height: 70px;
    background: #fff;
    overflow: hidden;
    .show1 {
      background: url("../assets/images/ddtj04.png") no-repeat center center;
      background-size: 100%;
      width: 184px;
      height: 74px;
      font-size: 24px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(81, 171, 255, 1);
      line-height: 74px;
      margin: 22px 10px;
    }
    p {
      text-align: left;
      font-size: 22px;
      font-family: PingFang SC;
      font-weight: 500;
      line-height: 70px;
      color: rgba(0, 0, 0, 1);
      margin-left: 10px;
    }
  }

  //  确定按钮
  .qued {
    width: 750px;
    height: 115px;
    border-bottom: 1px solid #dedede;
    background: #ffffff;
    overflow: hidden;
    div {
      width: 710px;
      height: 82px;
      background: #cccccc;
      margin: 16px auto;
      border-radius: 20px;
      font-size: 30px;
      font-family: PingFang SC;
      font-weight: 500;
      line-height: 82px;
      color: #ffffff;
    }
    .btn {
      background: #51abff;
    }
  }
  .dibu {
    width: 750px;
    height: 90px;
    background: #ffffff;
  }
}

//   体检人部分 内容

  .nine{
    width: 750px;
    height: 550px;
    position: absolute;
    background: #f7f7f7;
    bottom: 0;
    .nine1{
      width: 750px;
      height: 70px;
      background: #f0f0f0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding: 0 20px;
      img{
        width: 23px;
        height: 24px;
        padding-right: 10px;
      }
      span{
        font-size: 28px;
      }
    }
  }
  .nine_bai{
    width: 750px;
    height: 36px;
    background: #ffffff;
    border-bottom: 1px solid #dedede;
  }

  .nine2{
    width: 750px;
    height: 220px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
      width: 150px;
      height: 150px;
      padding: 0 30px;
    }
    h3{
      font-size: 33px;
    }
    .mytitle{
      display: flex;
      align-items: center;
      p{
        font-size: 32px;
      }
    }
    .mywan{
      margin-right: 30px;
      img{
        width: 101px;
        height: 92px;
        margin-top: 10px;
        padding: 0;
      }
      div{
        width: 106px;
        height: 40px;
        border: 1px solid #51abff;
        font-size: 27px;
        border-radius: 8px;
        color: #51abff;
      }
    }
  }

  .quxiao{
    width: 750px;
    height: 130px;
    border-top: 1px solid #dedede;
    border-bottom: 1px solid #dedede;
    div{
      width: 710px;
      height: 82px;
      background: #51abff;
      margin: 18px auto;
      border-radius: 20px;
      font-size: 30px;
      font-family: PingFang SC;
      font-weight: 500;
      line-height: 82px;
      color: #ffffff;
    }
  }
  .tjerr{
    margin-top: 30px;
    font-size: 28px;
    color:red;
  }
</style>