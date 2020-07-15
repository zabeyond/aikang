<template>
  <div>
    <headers :title="'增加项目介绍'"></headers>
    <div class="laji"></div>
    <div class="guding" v-for="(item,index) in jxbjs">
      <div class="gudone">
        <img src="../assets/images/biaoshi.png" alt />
        <div class="gdtitle">
          <h3>{{item.name}}介绍</h3>
        </div>
      </div>

      <div class="gudtxt">
        <p class="guddd">{{item.content}}</p>
        <p>体检中心：{{hosName}}健康体检中心</p>
      </div>
    </div>

    </div>
</template>
<script>
import headers from "@/components/headers";
export default {
  components: {
    headers
  },
  data(){
    return{
      jxbjs:[],
      id:null,
      hosName:""
    }
  },
  created(){
    this.hosName=sessionStorage.getItem('hosname')

    this.id=this.$route.params.id
    let formData=new FormData()
    formData.append('pid',this.id)
    this.$axios({
      url:"/api/index.php/api/package_detail",
      method:'post',
      data:formData
    }).then(res=>{
      // console.log(res.data.res.package)
      let arrs=[]
      arrs.push(res.data.res.package)
      this.jxbjs=arrs
      // console.log(this.jxbjs)
    })
    // console.log(this.id)
  }
};
</script>
<style lang="scss" scoped>
.laji {
  width: 750px;
  height: 80px;
}
.guding {
  width: 750px;
  background: #ffffff;
  box-sizing: border-box;
  padding: 25px;
  .gudone {
    display: flex;
    padding-bottom: 30px;
    img {
      width: 90px;
      height: 90px;
      padding-right: 30px;
    }
    h3 {
      text-align: left;
      padding-bottom: 10px;
      font-size: 30px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(0, 0, 0, 1);
      line-height: 90px;
    }
  }
  .gudtxt {
    p {
      font-size: 26px;
      color: #666666;
      display: flex;
    }
    .guddd {
      padding-bottom: 33px;
      display: flex;
      text-align: left;
    }
  }
}
</style>