<template>
    <div>
        <headers :title="'订单详情'"></headers>
        <div class="laji"></div>
        <!--  订单详情信息 -->
        <div class="last" v-for="(item,index) in titles">
            <div class="i name"><span>体检人：</span><span>{{item.name}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>性别：</span><span>{{item.sex}}</span></div>
            <div class="i time"><span>体检时间：</span><span>{{item.timeday}}</span><span>{{item.timeweek}}</span></div>
            <div class="i hos"><span>体检医院：</span><span>{{item.vender.name}}</span></div>
            <h3>您选择的体检套餐：</h3>
            <div class="taoc">
                <div>{{item.combo.name}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>${{item.combo.money}}</span></div>
            </div>
            <div>
            <ul>
                <li v-for="it in item.combo_detail">
                    <div class="i">{{it.name}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>${{it.money}}</span></div>
                </li>
            </ul>
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
            id:"",
            titles:[],
        }
    },
    created(){
        this.id=this.$route.query.id
        let formData=new FormData()
        formData.append('id',this.id)
        this.$axios({
        url:"/api/index.php/api/orderdetail",
        method:'post',
        data:formData
        }).then(res=>{
            console.log(res.data.res)
            let arr=[]
            arr.push(res.data.res)
            this.titles=arr
        })
    }
}
</script>
<style lang="scss" scoped>
.laji {
  width: 750px;
  height: 80px;
}

    .last{
        width: 750px;
        background: #ffffff;
        text-align: left;
        box-sizing: border-box;
        padding: 20px 20px;
        .i{
            font-size: 30px;
            font-weight: 600;
            line-height: 50px;
        }
        h3{
            margin: 30px 0;
        }
        .taoc{
            font-size: 30px;
            font-weight: 600;
            line-height: 40px;
            h3{
                margin: 0;
            }
            p{
                font-size: 24px;
                font-family: PingFang SC;
                font-weight: 500;
            }
        }
    }
</style>