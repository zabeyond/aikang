<template>
  <div>
    <headers :title="'我的报告'" :background="'#ffffff'"></headers>
    <div class="laji"></div>
    <div class="mybg">
      <img src="../assets/images/mybg01.png" alt />
      <p class="kong">空空如也~</p>
      <div class="ttt">
        <div class="zanwu">
          <p>暂无报告</p>
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
  }
};
</script>
<style lang="scss" scoped>
.laji {
  width: 750px;
  height: 80px;
}
.mybg {
  img {
    width: 249px;
    height: 233px;
    margin-top: 300px;
  }
  .kong{
    font-size: 30px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    margin: 40px 0;
  }
  .ttt {
    display: flex;
    justify-content: center;
  }
  .zanwu {
    width: 240px;
    height: 80px;
    background: #0090ff;
    p {
      font-size: 30px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 80px;
    }
  }
}
</style>