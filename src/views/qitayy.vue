<template>
  <div >
    <pageheader :title="'选择医院'"></pageheader>
    <ul>
      <div class="yuone">
        <div class="u1">
          <p>选择医院</p>
          <div>
            <router-link to="/qitayy"><p class="ck">查看其他医院</p></router-link>
            <img src="../assets/images/xzyy10.png" alt class="u11" />
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
      <li>
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
li{
    width: 710px;
    height: 190px;
    background: #ffffff;
  border-radius: 20px;
  margin: 15px auto;
}
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

</style>