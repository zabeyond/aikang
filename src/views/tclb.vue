<template>
  <div>
    <headers :title="'套餐列表'"></headers>
    <div class="laji"></div>
    <div class="shaix">
      <p>套餐列表</p>
      <p>
        筛选
        <img src="../assets/images/xzyy10.png" alt />
      </p>
    </div>
    <div class="laji2"></div>
    <ul>
      <!-- 跳到套餐详情 -->
      <router-link to="/tcxq">
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
      </li>
      </router-link>
      <!-- <router-link to="/tcxq"> -->
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
      </li>
       <!-- </router-link> -->
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
      </li>
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
      </li>
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
      </li>
    </ul>
  </div>
</template>
<script>
import headers from "@/components/headers";
export default {
  components: {
    headers
  }
};
</script>
<style lang="scss" scoped>
.laji {
  width: 750px;
  height: 80px;
}
.laji2 {
  width: 750px;
  height: 70px;
}
.shaix {
  width: 750px;
  height: 70px;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  font-size: 26px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(153, 153, 153, 1);
  align-items: center;
  position: fixed;
  img {
    width: 18px;
    height: 18px;
    padding-right: 20px;
  }
  p {
    padding: 0 10px;
  }
}

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
}
</style>