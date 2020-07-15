<template>
  <div>
    <pageheader :title="'选择医院'"></pageheader>
    
    <ul>
      <!-- 选择医院头部 -->
      <div class="yuone">
        <div class="u1">
          <p>选择医院</p>
          <div>
            <router-link to="/qitayy"><p class="ck">查看其他医院</p></router-link>
            <img src="../assets/images/xzyy02.png" alt class="u11" />
          </div>
        </div>

        <div class="u2">
          <img src="../assets/images/xzyy03.png" alt class="u2im" />
          <div class="ukuai">
            <h3>合肥美年大健康</h3>
            <p>需提前三天预约</p>
            <div class="u2s">
              <img src="../assets/images/xzyy04.png" alt class="u2x" />
              <span>合肥市</span>
            </div>
          </div>
        </div>
      </div>

    <!-- 基础套餐  可复制 -->
      <router-link to="/tclb">
      <li>
        <img src="../assets/images/xzyy05.png" alt class="phoo"/>

        <div>
          <h3>基础(A)套餐-女</h3>

          <div class="sang">
            <p class="sdy  sany">基础检查</p>
            <p class="sdy  sane">肿瘤检测</p>
            <p class="sdy  sans">38女神节</p>
          </div>

          <p>基础健康筛查，侧重肝肾功能、血脂血糖、彩超、肿 瘤等检查，提供准确的早期预警，让您更好的了解...</p>
          
          <div class="spaa">
            <span>￥589.5</span>
            <span class="qiy">￥655</span>
          </div>

        </div>
      </li></router-link>

<!-- 增加项目  可复制 -->
      <router-link to="/zjxm">
      <li>
          <img src="../assets/images/xzyy05.png" alt class="phoo" />
        <div>
          <h3>增加项目-女</h3>
          <div class="sang">
            <p class="sdy  sany">基础检查</p>
            <p class="sdy  sane">肿瘤检测</p>
            <p class="sdy  sans">38女神节</p>
          </div>
          <p>基础健康筛查，侧重肝肾功能、血脂血糖、彩超、肿 瘤等检查，提供准确的早期预警，让您更好的了解...</p>
          <div class="spaa">
            <span>￥589.5</span>
            <span class="qiy">￥655</span>
          </div>
        </div>
      </li>
      </router-link>
    </ul>
  </div>
</template>
<script>
import pageheader from "@/components/pageheader";
export default {
  components: {
    pageheader
  }
};
</script>
<style lang="scss" scoped>

//  基础套餐和增加项目  
ul {
  li {
    box-sizing: border-box;
    width: 710px;
    height: 260px;
    background: #ffffff;
    border-radius: 20px;
    margin: 15px auto;
    display: flex;
    padding: 25px 25px;
    .phoo {
      width: 90px;
      height: 90px;
      margin-right: 10px;
    }
    h3 {
      text-align: left;
      font-size: 30px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(0, 0, 0, 1);
      margin-bottom: 10px;
    }
    p {
      font-size: 24px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(104, 104, 104, 1);
      width: 560px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      margin: 5px 0;
    }
    span {
      font-size: 26px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(54, 198, 191, 1);
    }
    .qiy {
      font-size: 24px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: rgba(153, 153, 153, 1);
    }
    .spaa {
      text-align: left;
    }

    .sang {
      display: flex;
      .sdy{
        width: 115px;
        height: 40px;
        font-size: 22px;
        font-family: PingFang SC;
        font-weight: bold;
        box-sizing: border-box;
        margin-right: 10px;
      }
      .sany {
        background: #f3faf5;
        color: rgba(48, 185, 134, 1);
      }
      .sane {
        background: #f1fdff;
        color: #09aecc;
      }
      .sans {
        background: #fef8fd;
        color: #d37174;
      }
    }
  }

// 选择医院头部
  .yuone {
    width: 710px;
    height: 260px;
    background: #ffffff;
    border-radius: 20px;
    margin: 15px auto;
    .u1 {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #dedede;
      padding: 15px;
      align-items: center;
      div{
        display: flex;
      }
      .u11 {
        width: 18px;
        height: 18px;
        padding: 10px 5px;
      }
      p {
        font-size: 28px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(0, 0, 0, 1);
      }
      .ck {
        font-size: 24px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(153, 153, 153, 1);
      }
    }
    .u2 {
      display: flex;
      align-items: center;
      .u2im {
        width: 132px;
        height: 132px;
        border-radius: 50%;
        padding: 30px;
      }
      .ukuai {
        h3 {
          font-size: 30px;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba(0, 0, 0, 1);
        }
        p {
          font-size: 24px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(153, 153, 155, 1);
          padding: 7px 0;
          text-align: left;
        }
        span {
          font-size: 24px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(0, 0, 0, 1);
          margin-left: 8px;
        }
      }
      .u2x {
        width: 18px;
        height: 24px;
      }
      .u2s{
        text-align: left;
      }
    }
  }
}
</style>