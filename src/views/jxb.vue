<template>
  <div>
    <headers :title="'增加项目'"></headers>
    <div class="laji"></div>
    <div class="shaix">
      <p>项目列表</p>
      <p>
        筛选
        <img src="../assets/images/xzyy10.png" alt />
      </p>
    </div>
    <div class="laji2"></div>

    <ul>
        <li>
            <img src="../assets/images/xzyy05.png" alt="">
            <div>
                <h3>口腔科</h3>
                <p>自费加项支付<span>￥200.0</span></p>
            </div>
        </li>
        <li>
            <img src="../assets/images/xzyy05.png" alt="">
            <div>
                <h3>口腔科</h3>
                <p>自费加项支付<span>￥200.0</span></p>
            </div>
        </li>
        <li>
            <img src="../assets/images/xzyy05.png" alt="">
            <div>
                <h3>口腔科</h3>
                <p>自费加项支付<span>￥200.0</span></p>
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

ul{
    li{
        width: 690px;
        height: 155px;
        background: #ffffff;
        border-radius: 20px;
        margin: 20px auto;
        display: flex;
        align-items: center;
        img{
            width: 90px;
            height: 90px;
            padding: 0 20px;
        }
        h3{
            text-align: left;
            font-size: 30px;
            font-family: PingFang SC;
            font-weight: bold;
            color: rgb(27, 9, 9);
        }
        div{
            p{
                font-size: 24px;
                font-family: PingFang SC;
                font-weight: 500;
                color: rgba(104, 104, 104, 1);
                margin: 5px 0;
            }
            span{
                color: #51abff;
            }
        }
    }
}
</style>