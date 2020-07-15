<template>
  <div>
    <headers :title="'预约成功'" :background="'#ffffff'"></headers>
    <div class="laji"></div>
    <div class="yycg">
      <img src="../assets/images/yycg01.png" alt />
      <h3>订单已提交</h3>
      <P>请到预约订单查询是否预约成功</P>
        <router-link to="/my">
          <div class="back">
          <p>返回</p>
        </div>
        </router-link>
    </div>
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

.yycg {
  img {
    width: 147px;
    height: 148px;
    margin-top: 300px;
  }
  h3 {
    font-size: 38px;
    font-family: Adobe Heiti Std;
    font-weight: 600;
    color: rgba(51, 51, 51, 1);
    padding: 15px 0;
  }
  p {
    font-size: 30px;
    color: #666666;
  }
  .back {
      margin: 40px auto;
    width: 532px;
    height: 82px;
    background: #51abff;
    border-radius: 50px;
    p {
      font-size: 30px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 82px;
    }
  }
}
</style>