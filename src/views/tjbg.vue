<template>
  <div>
    <pageheader :title="'体检报告'"></pageheader>
    <router-link to="/mybg"><div class="mybg">我的报告</div></router-link>
    <ul>
      <li>
        <img src="../assets/images/tjbg01.png" alt />
        <div>
          <h3>无聊的冰块</h3>
          <p>
            <img src="../assets/images/tjbg02.png" alt />
            <span>安徽爱康医疗服务科技有限公司</span>
          </p>
          <p>
            <img src="../assets/images/tjbg03.png" alt />
            <span>2019.10.01</span>
          </p>
          <div class="new">新</div>
        </div>
      </li>
      <li>
        <img src="../assets/images/tjbg01.png" alt />
        <div>
          <h3>无聊的冰块</h3>
          <p>
            <img src="../assets/images/tjbg02.png" alt />
            <span>安徽爱康医疗服务科技有限公司</span>
          </p>
          <p>
            <img src="../assets/images/tjbg03.png" alt />
            <span>2019.10.01</span>
          </p>
        </div>
      </li>
      <li>
        <img src="../assets/images/tjbg01.png" alt />
        <div>
          <h3>无聊的冰块</h3>
          <p>
            <img src="../assets/images/tjbg02.png" alt />
            <span>安徽爱康医疗服务科技有限公司</span>
          </p>
          <p>
            <img src="../assets/images/tjbg03.png" alt />
            <span>2019.10.01</span>
          </p>
        </div>
      </li>
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
.mybg {
  width: 750px;
  height: 100px;
  background: #ffffff;
  font-size: 32px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(153, 153, 153, 1);
  line-height: 100px;
}

ul {
  li {
    width: 690px;
    height: 215px;
    background: #ffffff;
    margin: 20px auto;
    border-radius: 20px;
    display: flex;
    align-items: center;
    position: relative;
    .new {
      background: url("../assets/images/tjbg04.png") no-repeat center center;
      background-size: 100%;
      width: 40px;
      height: 64px;
      font-size: 20px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 64px;
      position: absolute;
      top: 0;
      right: 70px;
    }
    img {
      width: 136px;
      height: 136px;
      padding: 0 40px;
    }
    div {
      img {
        width: 22px;
        height: 22px;
        padding: 0px;
        margin-right: 5px;
        padding-top: 5px;
      }
      h3 {
        text-align: left;
        font-size: 32px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(153, 153, 153, 1);
      }
      p {
        margin: 10px 0;
        text-align: left;
        font-size: 20px;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
      }
    }
  }
}
</style>