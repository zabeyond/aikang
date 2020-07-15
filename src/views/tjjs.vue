<template>
  <div>
    <pageheader :title="'体检介绍'"></pageheader>
    <div class="img"></div>
    <!-- 第二块 -->
    <div class="yy_two">
      <h3>体检简介</h3>
      <div>随时预约</div>
      <p>您可自由选择体检品牌、门店及时间，对健康进行全面了解和检 查。</p>
      <div>体检转赠</div>
      <p>您可以再完善个人信息处填写亲友信息，以便体检套餐转赠亲友。</p>
      <div>温馨提示</div>
      <p>除了基础体检套餐，您还可以选择自费添加体检加项包，来完善 您的本次体检。</p>
    </div>

    <!-- 第三块 -->
    <div class="yy_three">
      <h3>体检预约流程</h3>
      <div class="oone">
        <div class="yy_blue">
          <img src="../assets/images/yuyue03.png" alt />
          <p>选择医院</p>
        </div>
      </div>

      <div>
        <img src="../assets/images/yuyue02.png" alt class="jt" />
      </div>
      <div class="oone">
        <div class="yy_blue">
          <img src="../assets/images/yuyue04.png" alt />
          <p>选择套餐和加项包</p>
        </div>
      </div>
      <div>
        <img src="../assets/images/yuyue02.png" alt class="jt" />
      </div>
      <div class="oone">
        <div class="yy_blue">
          <img src="../assets/images/yuyue05.png" alt />
          <p>选择体检日期</p>
        </div>
      </div>
      <div>
        <img src="../assets/images/yuyue02.png" alt class="jt" />
      </div>
      <div class="oone">
        <div class="yy_blue">
          <img src="../assets/images/yuyue06.png" alt />
          <p>确认个人信息</p>
        </div>
      </div>
      <div>
        <img src="../assets/images/yuyue02.png" alt class="jt" />
      </div>
      <div class="oone">
        <div class="yy_blue">
          <img src="../assets/images/yuyue07.png" alt />
          <p>确认订单</p>
        </div>
      </div>
    </div>

    <router-link to="qyZjxm">
        <div class="yy_go">下一步</div>
    </router-link>
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
.img {
  background: url("../assets/images/yuyue01.png") no-repeat center center;
  background-size: 100%;
  width: 750px;
  height: 501px;
}
.yy_two {
  background: #ffffff;
  width: 750px;
  margin: 20px 0;
  box-sizing: border-box;
  padding: 25px;
  h3 {
    text-align: left;
    font-size: 36px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(81, 171, 255, 1);
    padding-bottom: 15px;
  }
  div {
    text-align: left;
    font-size: 28px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(0, 0, 0, 1);
    padding: 5px 0;
  }
  p {
    text-align: left;
    font-size: 24px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(153, 153, 153, 1);
  }
}

.yy_three {
  width: 750px;
  height: 875px;
  background: #ffffff;
  box-sizing: border-box;
  padding: 30px;
  img {
    width: 40px;
    height: 40px;
    padding-right: 15px;
  }
  h3 {
    font-size: 36px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(81, 171, 255, 1);
    text-align: left;
    padding-bottom: 30px;
  }
  .jt {
    width: 41px;
    height: 49px;
    padding: 15px 0;
  }
  .oone {
    display: flex;
    justify-content: center;
  }
  .yy_blue {
    background: #51abff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
    font-size: 32px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    border-radius: 15px;
    padding: 0 20px;
  }
}

.yy_go {
  width: 750px;
  height: 100px;
  background: #51abff;
  font-size: 36px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 100px;
}
</style>