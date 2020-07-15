<template>
  <div id="addCords_top">
    <img src="../assets/images/xzyy01.png" @click="$router.go(-1)" />
    <p class="tit">{{ title }}</p>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
#addCords_top {
    background: url("../assets/images/xzyy111.png") no-repeat center center;
    background-size: 100%;
  width: 100%;
  height: 80px;
  position: relative;
  overflow: hidden;
  img {
    position: absolute;
    width: 19px;
    height: 32px;
    top: 25px;
    left: 30px;
  }
  .tit{
    font-size:30px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(255,255,255,1) ;
    line-height: 80px;
  }
}
</style>