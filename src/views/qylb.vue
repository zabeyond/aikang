<template>
  <div>
    <headers :title="'亲友列表'" :background="'#ffffff'"></headers>
    <div class="laji"></div>
    <div class="qy_yinc">
      <p>亲友信息为空</p>
    </div>
    <router-link to="/qyxzxx">
        <div class="qy_dibu">
      <span>+</span>
      <strong>新增亲友</strong>
    </div>
    </router-link>
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

.qy_yinc {
  background: url("../assets/images/qylb01.png") no-repeat center center;
  background-size: 100%;
  width: 545px;
  height: 364px;
  margin: 0 auto;
  margin-top: 300px;
  position: relative;
  p {
    font-size: 28px;
    font-family: PingFang SC;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    position: absolute;
    bottom: 120px;
    left: 37%;
  }
}

.qy_dibu {
  position: fixed;
  bottom: 0;
  width: 750px;
  height: 100px;
  background: #51abff;
  font-size: 32px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 100px;
  span {
    font-size: 45px;
  }
}
</style>