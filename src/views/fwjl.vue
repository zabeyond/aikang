<template>
    <div>
        <headers :title="'服务记录'"></headers>
        <div class="laji"></div>
        <div class="yd_header">
            <div @click="num=0" :class="{xiahuax:num==0}">全部</div>
            <div @click="num=1" :class="{xiahuax:num==1}">待服务</div>
            <div @click="num=2" :class="{xiahuax:num==2}">已服务</div>
        </div>

        <ul>
            <li v-show="num==0">
                <div v-if="flag" class="xianshi">
                    <ul>
                        <li>
                            <h3>肿瘤排查体检套餐</h3>
                            <p>体检医院：合肥美年大健康</p>
                            <p>2019-10-01体检<span>吴彦祖</span></p>
                        </li>
                        <li>
                            <h3>肿瘤排查体检套餐</h3>
                            <p>体检医院：合肥美年大健康</p>
                            <p>2019-10-01体检<span>吴彦祖</span></p>
                        </li>
                        <li>
                            <h3>肿瘤排查体检套餐</h3>
                            <p>体检医院：合肥美年大健康</p>
                            <p>2019-10-01体检<span>吴彦祖</span></p>
                        </li>
                    </ul>
                </div>
                <div v-else class="yincang">
                    <img src="../assets/images/fwjl01.png" alt="">
                    <p>暂无服务</p>
                    <p>快快开启你美好生活的记录旅程吧！</p>
                </div>
            </li>
            <li v-show="num==1">
                <div v-if="flag" class="xianshi">
                    <ul>
                        <li>
                            <h3>肿瘤排查体检套餐</h3>
                            <p>体检医院：合肥美年大健康</p>
                            <p>2019-10-01体检<span>吴彦祖</span></p>
                        </li>
                        <li>
                            <h3>肿瘤排查体检套餐</h3>
                            <p>体检医院：合肥美年大健康</p>
                            <p>2019-10-01体检<span>吴彦祖</span></p>
                        </li>
                    </ul>
                </div>
                <div v-else class="yincang">
                    <img src="../assets/images/fwjl01.png" alt="">
                    <p>暂无服务</p>
                    <p>快快开启你美好生活的记录旅程吧！</p>
                </div>
            </li>
            <li v-show="num==2">
                <div v-if="flag" class="xianshi">
                    <ul>
                        <li>
                            <h3>肿瘤排查体检套餐</h3>
                            <p>体检医院：合肥美年大健康</p>
                            <p>2019-10-01体检<span>吴彦祖</span></p>
                        </li>
                    </ul>
                </div>
                <div v-else class="yincang">
                    <img src="../assets/images/fwjl01.png" alt="">
                    <p>暂无服务</p>
                    <p>快快开启你美好生活的记录旅程吧！</p>
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
          num:0,
          flag:""
      }
  },
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
            width: 513px;
            height: 251px;
            margin-top: 200px;
        }
        p{
            color: #999;
            font-size: 35px;
        }
    }
</style>