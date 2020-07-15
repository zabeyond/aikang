<template>
  <div>
    <headers :title="'基础套餐介绍'" :background="'#ffffff'"></headers>
    <div class="laji"></div>
    <!-- 固定块儿  第一个 -->
    <div class="guding" v-for="(item,index) in tcjs">
      <div class="gudone">
        <img :src="'http://home.ikangyiliao.com/'+item.img" />
        <div class="gdtitle">
          <h3>{{item.name}}</h3>
        </div>
      </div>

      <div class="gudtxt">
        <p class="guddd">{{item.content}}</p>
        <p>体检中心：{{hosName}}健康体检中心</p>
      </div>
    </div>

    <!--  两个切换 -->
    <div class="guding2">
      <div :class="{oc:ison}" @click="tab()">套餐项目</div>
      <div :class="{oc:!ison}" @click="tab()">体检须知</div>
    </div>

    <!-- 两个内容 -->
    <div class="tabtxt">
      <!-- 套餐项目两个不动 -->
      <div class="tabone" v-show="ison">
        <div class="tabone_y er">
          <div></div>
          <p>套餐项(21项)</p>
        </div>
        <!-- 可滚动的一片   套餐项目-->
        <ul >
          <li v-for="(item,index) in tcxm">
            <div>{{item.name}}</div>
            <p>{{item.content}}</p>
          </li>
        </ul>
      </div>

      <!-- 可滚动的一片   体检须知-->
      <div
        class="tabtwo"
        v-show="!ison"
      >基础健康筛查，侧重肝肾功能、血脂血糖、彩超、肿 瘤等检查，提供准确的早期预警，让您更好的了解基础健康筛查，侧重肝肾功能、血脂血糖、彩超、肿 瘤等检查，提供准确的早期预警，让您更好的了解基础健康筛查，侧重肝肾功能、血脂血糖、彩超、肿 瘤等检查，提供准确的早期预警，让您更好的了解基础健康筛查，侧重肝肾功能、血脂血糖、彩超、肿 瘤等检查，提供准确的早期预警，让您更好的了解基础健康筛查，侧重肝肾功能、血脂血糖、彩超、肿 瘤等检查，提供准确的早期预警，让您更好的了解基础健康筛查，侧重肝肾功能、血脂血糖、彩超、肿 瘤等检查，提供准确的早期预警，让您更好的了解基础健康筛查，侧重肝肾功能、血脂血糖、彩超、肿 瘤等检查，提供准确的早期预警，让您更好的了解基础健康筛查，侧重肝肾功能、血脂血糖、彩超、肿 瘤等检查，提供准确的早期预警，让您更好的了解基础健康筛查，侧重肝肾功能、血脂血糖、彩超、肿 瘤等检查，提供准确的早期预警，让您更好的了解基础健康筛查，侧重肝肾功能、血脂血糖、彩超、肿 瘤等检查，提供准确的早期预警，让您更好的了解基础健康筛查，侧重肝肾功能、血脂血糖、彩超、肿 瘤等检查，提供准确的早期预警，让您更好的了解基础健康筛查，侧重肝肾功能、血脂血糖、彩超、肿 瘤等检查，提供准确的早期预警，让您更好的了解基础健康筛查，侧重肝肾功能、血脂血糖、彩超、肿 瘤等检查，提供准确的早期预警，让您更好的了解基础健康筛查，侧重肝肾功能、血脂血糖、彩超、肿 瘤等检查，提供准确的早期预警，让您更好的了解基础健康筛查，侧重肝肾功能、血脂血糖、彩超、肿 瘤等检查，提供准确的早期预警，让您更好的了解基础健康筛查，侧重肝肾功能、血脂血糖、彩超、肿 瘤等检查，提供准确的早期预警，让您更好的了解基础健康筛查，侧重肝肾功能、血脂血糖、彩超、肿 瘤等检查，提供准确的早期预警，让您更好的了解基础健康筛查，侧重肝肾功能、血脂血糖、彩超、肿 瘤等检查，提供准确的早期预警，让您更好的了解基础健康筛查，侧重肝肾功能、血脂血糖、彩超、肿 瘤等检查，提供准确的早期预警，让您更好的了解基础健康筛查，侧重肝肾功能、血脂血糖、彩超、肿 瘤等检查，提供准确的早期预警，让您更好的了解</div>
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
      ison: true,
      tcjs:[],
      tcxm:[],
      hosName:""
    };
  },
  created(){
    this.hosName=sessionStorage.getItem('hosname')
  console.log(sessionStorage.getItem('att')[2])
    let formData=new FormData()
    formData.append('cid',sessionStorage.getItem('att')[2])
    this.$axios({
      url:"/api/index.php/api/combo_detail",
      method:'post',
      data:formData
    }).then(res=>{
      // console.log(res.data.res)

      let arrs=[]
      arrs.push(res.data.res.combo)
      this.tcjs=arrs
      this.tcxm=res.data.res.combo_detail
      // console.log(this.tcxm)
    })
  },
  methods: {
    tab() {
      this.ison == true ? (this.ison = false) : (this.ison = true);
    }
  }
};
</script>
<style lang="scss" scoped>
.laji {
  width: 750px;
  height: 80px;
}

// 固定块儿  第一个
.guding {
  width: 750px;
  height: 340px;
  background: #f7f7f7;
  box-sizing: border-box;
  padding: 25px;
  .gudone {
    display: flex;
    padding-bottom: 30px;
    img {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      margin: 0 15px;
    }
    h3 {
      text-align: left;
      line-height: 90px;
      font-size: 30px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(0, 0, 0, 1);
    }
  }
  .gudtxt {
    p {
      font-size: 26px;
      color: #666666;
      display: flex;
    }
    .guddd {
      padding-bottom: 33px;
      text-align: left;
    }
  }
}

//  两个切换
.guding2 {
  width: 750px;
  height: 90px;
  background: #ffffff;
  border-bottom: 1px solid #dedede;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 34px;
  color: black;
  div {
    width: 195px;
    height: 90px;
    line-height: 90px;
  }
  .oc {
    border-bottom: 4px solid #51abff;
  }
}

// 两块内容
.tabtxt {
  width: 750px;
  height: calc(100vh-515px);
  background: #ffffff;
  overflow-y: auto;
}

//可滚动的一片   体检须知
.tabtwo {
  font-size: 28px;
  box-sizing: border-box;
  padding: 20px;
  color: #999999;
}

//可滚动的一片   套餐项目
.tabone {
  .tabone_y {
    width: 750px;
    height: 85px;
    background: #ffffff;
    display: flex;
    align-items: center;
    p {
      font-size: 29px;
      font-weight: 700;
      text-align: left;
      padding-left: 20px;
    }
    div {
      width: 10px;
      height: 30px;
      background: #51abff;
      margin-left: 20px;
    }
  }
  .er {
    border-top: 1px solid #dedede;
  }

  li {
    width: 750px;
    font-size: 28px;
    padding: 30px;
    border-top: 1px solid #dedede;
    background: #ffffff;
    box-sizing: border-box;
    div {
      text-align: left;
      color: black;
      font-size: 28px;
      font-weight: 600;
      padding-bottom: 15px;
    }
    p {
      text-align: left;
      font-size: 28px;
      color: #999999;
    }
  }
}
</style>