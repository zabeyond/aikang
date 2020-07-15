<template>
    <div>
        <headers :title="'预约订单'"></headers>
        <div class="laji"></div>
        <div class="yd_header">
            <div @click="two" :class="{xiahuax:num==2}">全部</div>
            <div @click="zero" :class="{xiahuax:num==0}">待处理</div>
            <div @click="one" :class="{xiahuax:num==1}">已完成</div>
        </div>

        <ul>
            <li v-show="num==2" v-for="(item,index) in twos">
                <div v-if="flag2" class="xianshi">
                    <ul>
                        <li @click="goxq(item.id)">
                            <h3>{{item.combo.name}}</h3>
                            <p>体检医院：{{item.vender.name}}</p>
                            <p>{{item.timeday}}体检<span>{{item.name}}</span></p>
                        </li>
                    </ul>
                </div>
                <div v-else class="yincang">
                    <img src="../assets/images/yydd01.png" alt="">
                    <p>暂无订单</p>
                </div>
            </li>
            <li v-show="num==0" v-for="(item,index) in zeros">
                <div v-if="flag0" class="xianshi">
                    <ul>
                        <li>
                            <h3>{{item.combo.name}}</h3>
                            <p>体检医院：{{item.vender.name}}</p>
                            <p>{{item.timeday}}体检<span>{{item.name}}</span></p>
                        </li>
                    </ul>
                </div>
                <div v-else class="yincang">
                    <img src="../assets/images/yydd01.png" alt="">
                    <p>暂无订单</p>
                </div>
            </li>
            <li v-show="num==1" v-for="(item,index) in ones">
                <div v-if="flag1" class="xianshi">
                    <ul>
                        <li>
                            <h3>{{item.combo.name}}</h3>
                            <p>体检医院：{{item.vender.name}}</p>
                            <p>{{item.timeday}}体检<span>{{item.name}}</span></p>
                        </li>
                    </ul>
                </div>
                <div v-else class="yincang">
                    <img src="../assets/images/yydd01.png" alt="">
                    <p>暂无订单</p>
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
  },
  data() {
      return {
          num:1,
          flag2:false,
          flag0:false,
          flag1:false,
          twos:[],
          zeros:[],
          ones:[],
      }
  },
  created(){
      
  },
  methods:{
      two(){
        this.num=2
        let formdata=new FormData()
        formdata.append('userid',sessionStorage.getItem('id'))
        formdata.append('sta','2')
        this.$axios({
            url:"/api/index.php/api/orderList",
            method:'post',
            data:formdata
        }).then(res=>{
            console.log(res)
            if(res.data.sta=='200'){
                this.twos=res.data.res
                this.flag2=true
            }
            
        })
      },
      zero(){
        this.num=0
        let formdata=new FormData()
        formdata.append('userid',sessionStorage.getItem('id'))
        formdata.append('sta','0')
        this.$axios({
            url:"/api/index.php/api/orderList",
            method:'post',
            data:formdata
        }).then(res=>{
            console.log(res)
            if(res.data.sta=='200'){
                this.zeros=res.data.res
                this.flag0=true
            }
        })
      },
      one(){
        this.num=1
        let formdata=new FormData()
        formdata.append('userid',sessionStorage.getItem('id'))
        formdata.append('sta','1')
        this.$axios({
            url:"/api/index.php/api/orderList",
            method:'post',
            data:formdata
        }).then(res=>{
            console.log(res)
            if(res.data.sta='200'){
                this.ones=res.data.res
                this.flag1=true
            }
        })
      },

    //   点击单个订单查看详情
    goxq(id){
        this.$router.push({name:'ddxq',query: {id:id}})
        console.log(id)
    }
  }
};
</script>
<style lang="scss" scoped>
.laji {
  width: 750px;
  height: 80px;
}
    .yd_header{
        width: 750px;
        height: 85px;
        background: #ffffff;
        border-top: 1px solid #dedede;
        display: flex;
        justify-content: space-around;
        line-height: 85px;
        color: #999999;
        div{
            font-size: 30px;
        }
    }

.xiahuax{
    border-bottom: 3px solid #51abff;
    color: #51abff;
}

    .xianshi{
        ul{
            li{
                width: 750px;
                height: 190px;
                background: #ffffff;
                margin-top: 20px;
                box-sizing: border-box;
                padding: 20px 30px;
                h3{
                    font-size: 30px;
                    text-align: left;
                }
                p{
                    text-align: left;
                    font-size: 24px;
                    color: #999999;
                    padding-top: 15px;
                }
                span{
                    padding-left: 30px;
                }
            }
        }
    }

    .yincang{
        img{
            width: 554px;
            height: 443px;
            margin-top: 140px;
        }
        p{
            color: #999;
            font-size: 35px;
        }
    }
</style>