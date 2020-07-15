<template>
  <div id="oicq">
    <headers :title="'增加项目'" :background="'#ffffff'"></headers>
    <div class="laji"></div>

    <!-- 医院信息 -->
    <div class="u2" v-for="(item,index) in yiyuan">
      <img :src="'http://home.ikangyiliao.com/'+item.img" alt class="u2im" />
      <div class="ukuai">
        <h3>{{item.name}}</h3>
        <p>{{item.tel}}</p>
        <div class="u2s">
          <img src="../../assets/images/xzyy04.png" alt class="u2x" />
          <span>合肥市</span>
        </div>
      </div>
    </div>

    <!-- 基础套餐信息 -->
    <div class="titlex">
      <div class="titlex_one">
        <h4>基础套餐</h4>
        <router-link to="/tcxq">
          <div>
            <span>查看详情</span>
            <img src="../../assets/images/xzyy02.png" alt />
          </div>
        </router-link>
      </div>

      <div class="goodd" v-for="(it,index) in jctc">
        <img :src="'http://home.ikangyiliao.com/'+it.img" alt />
        <div>
          <h3>{{it.name}}</h3>
          <p>{{it.content}}</p>
          <div class="spaa">
            <span>￥{{it.money}}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 增加项目信息 -->
    <ul>
      <li class="titlex"  v-for="(item,index) in jxb[0]">
        <div class="titlex_one">
          <h4>增加项目</h4>
            <div @click="jumpTo(item.id)">
              <span>查看详情</span>
              <img src="../../assets/images/xzyy02.png" alt />
            </div>
        </div>

        <div class="goodd">
          <img src="../../assets/images/biaoshi.png" alt class="phoo" />
          <div>
            <div class="xuanz">
              <h3>{{item.name}}</h3>
              <img @click="goup(item.id,index)" :src="atts.includes(item.id)? require('../../assets/images/flag1.png') : require('../../assets/images/flag0.png')"/>
            </div>
            <p>{{item.content}}</p>
            <div class="spaa">
              <span>￥{{item.money}}</span>
              <span class="pi">（自费加项支付）</span>
            </div>
          </div>
        </div>
      </li>
    </ul>

      <div class="next" @click="goNext()">下一步</div>
  </div>
</template>
<script>
import headers from "@/components/headers";
export default {
  components: {
    headers
  },
  data() {
    return {
      yiyuan:[],  // 医院信息
      jctc:[],  // 基础套餐信息
      jxb:[],  // 增加项目信息

      att:[],  // 医院id和基础套餐id
      atts:[],  // 增加项目 id
      everyId:[] //  选中加项包的集合
    };
  },
  created(){
    let formData=new FormData()
    formData.append('userid',sessionStorage.getItem('id'))
    this.$axios({
      url:"/api/index.php/api/seldetail",
      method:'post',
      data:formData
    }).then(res=>{
      // console.log(res.data.res)
      this.yiyuan=res.data.res.vender
      
      let arr=[]
      arr.push(res.data.res.combo)
      this.jctc=arr

      let arr3=[]
      arr3.push(res.data.res.package)
      this.jxb=arr3
      // console.log(this.yiyuan)
      // console.log(res.data.res.vender[0].name)
      sessionStorage.setItem('hosname',res.data.res.vender[0].name)
      
      this.att.push(res.data.res.vender[0].id,res.data.res.combo.id)

      sessionStorage.setItem('att',this.att)
    })
    
  },
  methods: {
    // 当前点击加项包详情 跳转 的id
    jumpTo(id){
       this.$router.push({name:'jxbjs',params: {id:id},})
    },

    // 点击是否选中增加项
    goup(id,index){
      var idx = this.atts.indexOf(id);
      if(idx>-1){
        this.atts.splice(idx,1);
      }else{
        this.atts.push(id);
      }
      // console.log(this.atts) 
    },

    // 跳转到下个页面
    goNext(){
      this.everyId=this.att.concat(this.atts)
      sessionStorage.setItem('atts',this.atts)
      sessionStorage.setItem('everyId',this.everyId)
      setTimeout(()=>{
        this.$router.push('/ddtj')
        // console.log(sessionStorage.getItem('att'))
        // console.log(sessionStorage.getItem('atts'))
        // console.log(sessionStorage.getItem('everyId'))
        // console.log("跳转成功")
        // console.log(this.atts,this.everyId)
      },2000)
    }
  },
};
</script>
<style lang="scss" scoped>
.laji {
  width: 750px;
  height: 80px;
}
.next {
  width: 504px;
  height: 84px;
  background: #51abff;
  border-radius: 40px;
  font-size: 30px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 84px;
  margin: 20px auto;
}

//  医院信息
.u2 {
  width: 710px;
  height: 188px;
  background: #ffffff;
  margin: 15px auto;
  border-radius: 15px;
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
  .u2s {
    text-align: left;
    img {
      width: 18px;
      height: 24px;
    }
  }
}

// 基础套餐信息
.titlex {
  width: 710px;
  // height: 280px;
  background: #ffffff;
  border-radius: 15px;
  margin: 15px auto;
  .titlex_one {
    width: 710px;
    height: 80px;
    border-bottom: 1px solid #f5f5f5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h4 {
      font-size: 32px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      margin-left: 20px;
    }
    span {
      font-size: 26px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(102, 102, 102, 1);
    }
    img {
      width: 21px;
      height: 21px;
      padding-right: 20px;
    }
  }
  .goodd {
    background: #ffffff;
    border-radius: 20px;
    margin: 15px auto;
    display: flex;
    img {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      margin: 0 15px;
    }
    .xuanz {
      display: flex;
      justify-content: space-between;
      img {
        width: 30px;
        height: 30px;
      }
    }
    h3 {
      text-align: left;
      font-size: 30px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(0, 0, 0, 1);
      margin-bottom: 10px;
    }
    p {
      font-size: 24px;
      text-align: left;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(104, 104, 104, 1);
      width: 560px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      // margin: 5px 0;
    }
    .spaa {
      text-align: left;
      span {
        line-height: 70px;
        font-size: 30px;
        font-family: Roboto;
        font-weight: bold;
        color: rgba(242, 192, 121, 1);
      }
      .pi {
        font-size: 24px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(104, 104, 104, 1);
      }
    }
  }
}
</style>