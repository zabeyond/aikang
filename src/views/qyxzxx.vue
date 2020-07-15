<template>
  <div>
    <headers :title="'新增信息'" :background="'#ffffff'"></headers>
    <div class="laji"></div>
    <ul class="br_xx">
        <li>
            <div>姓名</div>
            <input type="text" placeholder="请输入姓名">
        </li>
        <li>
            <div>性别</div>
            <div class="xuanze">
                <div class="xz1">
                    <div :class="[ison==true?'yinc':'yinc1']" @click="tab()"><p class="dui">√</p></div>
                    <p>男</p>
                </div>
                <div class="xz1">
                    <div :class="[ison==true?'yinc1':'yinc']" @click="tab()"><p class="dui">√</p></div>
                    <p>女</p>
                </div>
            </div>
        </li>
        <li>
            <div>婚史</div>
            <div class="xuanze">
                <div class="xz1">
                    <div :class="[isons==true?'yinc1':'yinc']" @click="tabs()"><p class="dui">√</p></div>
                    <p>已婚</p>
                </div>
                <div class="xz1">
                    <div :class="[isons==true?'yinc':'yinc1']" @click="tabs()"><p class="dui">√</p></div>
                    <p>未婚</p>
                </div>
            </div>
        </li>
        <li>
            <div>年龄</div>
            <input type="text" placeholder="请输入年龄">
        </li>
        <li>
            <div>证件号</div>
            <input type="text" placeholder="请输入身份证号">
        </li>
        <li>
            <div>详细地址</div>
            <input type="text" placeholder="请输入家庭住址">
        </li>
        <li>
            <div>手机号</div>
            <input type="text" placeholder="请输入手机号">
        </li>
    </ul>
    <div class="br_bc">保存</div>
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
      ison:true,
      isons:true
    }
  },
  methods: {
    tab(){
      this.ison==true?this.ison=false:this.ison=true
    },
    tabs(){
      this.isons==true?this.isons=false:this.isons=true
    }
  },
};
</script>
<style lang="scss" scoped>
.laji {
  width: 750px;
  height: 80px;
}
.br_xx{
    width: 750px;
    background: #ffffff;
    border-top: 1px solid #dedede;
    li{
        width: 700px;
        height: 95px;
        margin: 0 auto;
        border-bottom: 1px solid #dedede;
        display: flex;
        justify-content: space-between;
        input{
            width: 550px;
            border: none;
            outline: none;
            font-size: 28px;
        }
        div{
            line-height: 95px;
            font-size: 28px;
            
        }
        .xuanze{
            width: 550px;
            display: flex;
            .xz1{
                display: flex;
                align-items: center;
                margin-right: 40px;
                div{
                    width: 42px;
                    height: 42px;
                    border: 1px solid #ffffff;
                    border-radius: 50%;
                    margin-right: 20px;
                    .dui{
                        line-height: 50px;
                        font-size: 33px;
                        color: #ffffff;
                    }
                }
            }
            .yinc{
                background: #51abff;
            }
            .yinc1{
                border: 1px solid #999999;
            }
        }
    }
}

.br_bc{
    width: 700px;
    height: 90px;
    background: #51abff;
    border-radius: 20px;
    margin: 40px auto;
    font-size: 30px;
    color: #ffffff;
    line-height: 90px;
}
</style>