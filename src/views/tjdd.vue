<template>
  <div>
    <headers :title="'体检订单'"></headers>
    <div class="laji"></div>
<!-- 内容 -->
    <div class="tjren">
        <div class="tjr_left">
            <img src="../assets/images/xzyy05.png" alt="">
            <h3>{{User}}</h3>
        </div>
    </div>

    <!-- 选择项 -->
        <div class="tjr_xuanze" v-for="(item,index) in userJC">
            <img :src="'http://home.ikangyiliao.com/'+item.img">
            <div>
                <div class="xuanze01">
                    <h3>{{item.name}}</h3>
                </div>
                <p class="xz_txt">{{item.content}}</p>
                <div class="xuanze02">
                    <p>有可选加项包</p>
                    <!-- <img src="../assets/images/biaoshi9.png" alt=""> -->
                </div>
            </div>
        </div>

    <!--  加项 口腔科 -->
    <ul class="kqke" v-if="cao">
        <li v-for="(item,index) in userZJ[0]">
            <img src="../assets/images/biaoshi3.png" alt="">
            <div class="kqke_right">
                <div class="kqke_r1">
                    <h3>{{item.name}}</h3>
                </div>
                <div class="kqke_r2">
                    <p>自费加项支付<span>￥{{item.money}}</span></p>
                    <img @click="goup(item.id,index)" :src="gou.includes(item.id)? require('../assets/images/flag1.png') : require('../assets/images/flag0.png')"/>
                </div>
            </div>
        </li>
    </ul>

    <!-- 底部收费 -->
    <div class="foots">
      <div class="foots2">
        <p>￥{{price}}（自选费用）</p>
      </div>
        <div class="foots4" @click="win">
          立即预约
        </div>
    </div>
    <div class="diande"></div>
  </div>
</template>
<script>
import headers from "@/components/headers";
import { log } from 'util';
export default {
  components: {
    headers
  },
  data(){
      return{
        User:"",  
        // 用户选中的 需要循环展示的套餐信息
        userJC:[],
        userZJ:[],
        type:"",  // 判断用户是否点击了新建体检人
        messagex:[],  // 带过来的全部信息

        timeOne:"",  // 处理的年月日
        price:"0",  // 选中的价格
        price1:"",
        cao:false,

        gou:[] // 用户最终选中的加项包id
      }
  },
  created(){

      
    let a = sessionStorage.getItem('timeOne')
    this.timeOne=a.replace('年','-').replace('月','-').replace('日','')

    this.User=sessionStorage.getItem('NAME')

    this.messagex=this.$route.query.me

    // 处理数据
    if(typeof(this.$route.query.ty)=='undefined'){
        this.type="0"
    }else{
        this.type=this.$route.query.ty
    }


    //  用户选中的加项包  展示信息
    let formData=new FormData()
    formData.append('cid',sessionStorage.getItem('atts'))
    this.$axios({
        url:"/api/index.php/api/selpackage",
        method:'post',
        data:formData
    }).then(res=>{
        if(res.data.sta=='100'){
            this.cao=false
        }else{
            this.cao=true
            res.data.forEach((item) => {
                // console.log(item.id)
                //  添加价格
                let so=parseFloat(this.price)+parseFloat(item.money)
                
                // 添加加项包id
                this.gou.push(item.id)

                this.price=so
            });
            
            sessionStorage.setItem('last',this.gou)
            let arr=[]
            arr.push(res.data)
            this.userZJ=arr

            this.$forceUpdate()

        }
    })

    //  发送请求 获取 用户选中的基础套餐的信息
    formData.append('userid',sessionStorage.getItem('id'))
    this.$axios({
      url:"/api/index.php/api/seldetail",
      method:'post',
      data:formData
    }).then(res=>{
        if(res.data.res.combo.id==sessionStorage.getItem('att')[2]){
            let arr=[]
            arr.push(res.data.res.combo)
            this.userJC=arr
            this.price1+=res.data.res.combo.money
            
        }
    })

    // console.log(this.gou)
  },
  methods:{
    goup(id,index){
      var idx = this.gou.indexOf(id);
      if(idx>-1){
        this.gou.splice(idx,1);
        let sub=parseFloat(this.price)-parseFloat(this.userZJ[0][index].money)
        this.price=sub
      }else{
        this.gou.push(id);
        let sub=parseFloat(this.price)+parseFloat(this.userZJ[0][index].money)
        this.price=sub
      }
      sessionStorage.setItem('last',this.gou)
        // console.log(this.gou)
    },
      win(){
        if(this.type=="0"){

            let formData=new FormData()
            formData.append('userid',sessionStorage.getItem('id'))
            formData.append('hosid',sessionStorage.getItem('att')[0])
            formData.append('cid',sessionStorage.getItem('att')[2])
            formData.append('pid',sessionStorage.getItem('last'))
            formData.append('timeDay',this.timeOne)
            formData.append('timeWeek',sessionStorage.getItem('timeTwo'))
            formData.append('type',this.type)
            formData.append('money1',this.price1)
            formData.append('money2',this.price)

            // console.log(sessionStorage.getItem('id'),sessionStorage.getItem('att')[0],sessionStorage.getItem('att')[2],sessionStorage.getItem('last'),this.timeOne,sessionStorage.getItem('timeTwo'),this.type,this.price1,this.price)

            this.$axios({
                url:"/api/index.php/api/order",
                method:'post',
                data:formData
            }).then(res=>{
                // console.log(res)
                if(res.data.sta=='200'){
                    setTimeout(()=>{
                        this.$router.push('/my')
                    },1500)
                    
                }
            })
        }
        if(this.type=="1"){

            let formdata=new FormData()
            formdata.append('userid',sessionStorage.getItem('id'))
            formdata.append('hosid',sessionStorage.getItem('att')[0])
            formdata.append('cid',sessionStorage.getItem('att')[2])
            formdata.append('pid',sessionStorage.getItem('last'))
            formdata.append('timeDay',this.timeOne)
            formdata.append('timeWeek',sessionStorage.getItem('timeTwo'))
            formdata.append('type',this.type)
            formdata.append('money1',this.price1)
            formdata.append('money2',this.price)
            formdata.append('name',this.messagex[0])
            formdata.append('sex',this.messagex[1])
            formdata.append('married',this.messagex[2])
            formdata.append('birthday',this.messagex[3])
            formdata.append('Idcard',this.messagex[4])
            formdata.append('address',this.messagex[5])
            formdata.append('tel',this.messagex[6])
            
            // console.log(sessionStorage.getItem('id'),sessionStorage.getItem('att')[0],sessionStorage.getItem('att')[2],sessionStorage.getItem('last'),this.timeOne,sessionStorage.getItem('timeTwo'),this.type,this.price1,this.price)

            this.$axios({
                url:"/api/index.php/api/order",
                method:'post',
                data:formdata
            }).then(res=>{
                console.log(res)
                if(res.data.sta=='200'){
                    setTimeout(()=>{
                        this.$router.push('/my')
                    },1500)
                }
            })

        }
      }
  }
};
</script>
<style lang="scss" scoped>
.laji {
  width: 750px;
  height: 80px;
}
//  头部体检人
.tjren{
    width: 700px;
    height: 155px;
    background: #ffffff;
    border-radius: 20px;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .tjr_left{
        display: flex;
        align-items: center;
        img{
            width: 90px;
            height: 90px;
            padding: 0 20px;
        }
        h3{
            font-size: 33px;
        }
    }
}

//  体检项选择
    .tjr_xuanze{
        width: 700px;
        height: 240px;
        background: #ffffff;
        border-radius: 20px;
        margin: 0 auto;
        display: flex;
        box-sizing: border-box;
        padding: 25px 15px;
        img{
            width: 90px;
            height: 90px;
            border-radius: 50%;
            margin-right: 15px;
        }
        .xz_txt{
            text-align: left;
            font-size: 24px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #999999;
            width: 560px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            margin: 15px 0;
        }

        .xuanze01{
            display: flex;
            justify-content: space-between;
            align-items: center;
            h3{
                font-size: 30px;
            }
            .xz_ck{
                display: flex;
                align-items: center;
                p{
                    color: #51abff;
                    font-size: 24px;
                }
                img{
                    width: 18px;
                    height: 18px;
                    padding-left:15px;
                }
            }
        }
        .xuanze02{
            display: flex;
            justify-content: space-between;
            p{
                font-size: 25px;
                font-family: PingFang SC;
                font-weight: 500;
            }
            img{
                width: 28px;
                height: 28px;
            }
        }
    }


//  加项  口腔科
.kqke{
    li{
        width: 690px;
        height: 155px;
        background: #ffffff;
        border-radius: 20px;
        margin: 20px auto;
        display: flex;
        align-items: center;
        position: relative;
        img{
            width: 90px;
            height: 90px;
            padding: 0 20px;
        }
        .kqke_right{
            .kqke_r1{
                h3{
                    text-align: left;
                    font-size: 30px;
                    font-family: PingFang SC;
                    font-weight: bold;
                    color: rgb(27, 9, 9);
                }
                .kqke_xq{
                    display: flex;
                    align-items: center;
                    position: absolute;
                    top: 30px;
                    right: 0px;
                    color: #f2c079;
                    p{
                        font-size:26px;
                        font-family:PingFang SC;
                        font-weight:500;
                        color:rgba(242,192,121,1);
                    }
                    img{
                        width: 18px;
                        height: 18px;
                    }
                }
            }
            .kqke_r2{
                img{
                    width: 28px;
                    height: 28px;
                    position: absolute;
                     bottom: 40px;
                   right: 20px;
                }
            }
            p{
                font-size: 24px;
                font-family: PingFang SC;
                font-weight: 500;
                color: rgba(104, 104, 104, 1);
                margin: 5px 0;
            }
            
            span{
                color: #f2c079;
            }
        }
 
    }
}

// 底部收费
.foots{
    width: 750px;
    height: 90px;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #51abff;
    display: flex;
    align-items: center;
    .foots2{
        width: 468px;
        height: 90px;
        background: #ffffff;
      p{
        font-size:30px;
        line-height: 90px;
        font-family:PingFang SC;
        font-weight:800;
        color:rgba(215,80,57,1);
      }
    }
    .foots4{
      width: 282px;
      height: 90px;
      line-height: 90px;
      background: #51abff;
      font-size:26px;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(255,255,255,1);
    }
    }

  .diande{
    width: 75px;
    height: 90px;
    position: relative;
    bottom: 0;
  }
</style>