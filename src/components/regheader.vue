<template>
  <div id="addCords_abc">
    <img src="../assets/images/xzyy01.png" @click="$router.go(-1)" />
    <p class="tis">{{ title }}</p>
  </div>
</template>
<script>
export default {
  name: "regheader",
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
#addCords_abc {
  width: 100%;
  height: 80px;
  position: fixed;
  overflow: hidden;
  img {
    position: absolute;
    width: 19px;
    height: 32px;
    top: 25px;
    left: 30px;
  }
  .tis{
    font-size:30px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(255,255,255,1) ;
    line-height: 80px;
  }
}
</style>