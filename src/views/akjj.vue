<template>
  <div>
    <pageheader :title="'机构简介'"></pageheader>
    <img src="../assets/images/akjj01.png" alt class="akjj_header" />
    <div class="ak_two">
      <h2>安徽爱康医疗服务科技</h2>
      <p>服务信息 提前两天</p>
      <p>服务时间 周一至周五8:30-17:30</p>
      <div class="heng"></div>
      <div>
        <img src="../assets/images/akjj02.png" alt />
        <span>安徽省合肥市瑶海区扶疏路武里山天街4号楼2818</span>
      </div>
    </div>

    <div class="ak_three">
      <h2>机构介绍</h2>
      <p>安徽安康医疗服务科技有限公司位于安徽省合肥市瑶海区扶疏路武里山 天街，“互联网预约服务平台”的全新模式，为用户提供体检知识介绍、 信息咨询、套餐定制、预约机构等一站式服务，实现省钱、方便、快捷 、专业的全方位过程服务...</p>
      <img src="../assets/images/akjj03.png" alt />
    </div>

    <!-- 两排图片 -->
    <div class="ak_imgs">
      <h3>机构环境</h3>
      <img src="../assets/images/akjj04.png" alt />
      <img src="../assets/images/akjj05.png" alt />
      <img src="../assets/images/akjj06.png" alt />
    </div>

    <div class="ak_imgs ss">
      <h3>机构设备</h3>
      <img src="../assets/images/akjj07.png" alt />
      <img src="../assets/images/akjj08.png" alt />
      <img src="../assets/images/akjj09.png" alt />
    </div>
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
.akjj_header {
  width: 750px;
  height: 320px;
  font-size: 0;
}
.ak_two {
  width: 750px;
  height: 312px;
  background: #ffffff;
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(153, 153, 153, 1);
  text-align: left;
  box-sizing: border-box;
  padding: 25px 30px;
  .heng {
    height: 1px;
    width: 700px;
    background: #dedede;
    margin: 30px 0;
  }
  p {
    padding-bottom: 7px;
  }
  h2 {
    font-size: 40px;
    font-family: PingFang SC;
    font-weight: bold;
    color: #000000;
    padding-bottom: 30px;
  }
  img {
    width: 20px;
    height: 28px;
    padding-right: 15px;
  }
}

.ak_three {
  width: 750px;
//   height: 252px;
  background: #ffffff;
  margin: 20px 0;
  padding: 0px 25px;
  box-sizing: border-box;
  h2 {
    font-size: 36px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(81, 171, 255, 1);
    text-align: left;
    padding: 10px 0;
  }
  p {
    font-size: 22px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(153, 153, 153, 1);
    text-align: left;
  }
  img {
    width: 18px;
    height: 18px;
  }
}
.ak_imgs {
  width: 750px;
  height: 280px;
  background: #ffffff;
  box-sizing: border-box;
  h3 {
    text-align: left;
    padding: 17px 30px;
    font-size: 36px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(81, 171, 255, 1);
  }
  img {
    width: 222px;
    height: 156px;
    padding: 10px 5px;
  }
}
.ss {
  margin: 20px 0;
}
</style>