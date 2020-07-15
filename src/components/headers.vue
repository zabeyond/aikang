<template>
    <div class="heads" :style="{background: background}">
    <img src="../assets/images/daohj.png" @click="$router.go(-1)" />
    <p class="tit">{{ title }}</p>
  </div>
</template>
<script>
export default {
  name: "Headers",
  props: {
    title: {
      type: String,
      default: ""
    },
     background:{
            type:String,
          default:'#f7f7f7'
        }
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.heads{
  background: #f7f7f7;
  width: 750px;
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
  .tit{
    font-size:32px;
    line-height: 80px;
    font-family:PingFang SC;
    font-weight:bold;
    color:black;
  }
}
</style>
