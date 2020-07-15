<template>
  <div>
    <headers :title="'购买记录'" :background="'#ffffff'"></headers>
    <div class="laji"></div>

    <div v-if="flag">
      <ul>
        <li class="slider" v-for="(item,index) in list">
          <div
            class="content"
           
          >
            <h3>{{item.combo.name}}</h3>
            <p>体检医院：{{item.vender.name}}</p>
            <p>
              {{item.timeday}}体检
              <span>{{item.name}}</span>
            </p>
          </div>
          <div class="remove" ref="remove" @click="deleteData(item.id,index)">删除</div>
        </li>
      </ul>
    </div>

    <!-- 如果没有数据  则显示 -->
    <div v-else class="yincang">
      <img src="../assets/images/gmjl01.png" alt />
      <p>暂无购买记录</p>
    </div>
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
      flag: true,
      list:[],  // 存储的数据
      arrtop:[],  // 存储删除选中的id
      fuck:-1,
      startX: 0, //触摸位置
      endX: 0, //结束位置
      moveX: 0, //滑动时的位置
      disX: 0, //移动距离
      deleteSlider: "" //滑动时的效果,使用v-bind:style="deleteSlider"
    };
  },
  created(){
  },
  mounted(){ 
   let formdata=new FormData()
    formdata.append('userid',sessionStorage.getItem('id'))
    formdata.append('sta','1')
    this.$axios({
        url:"/api/index.php/api/orderList",
        method:'post',
        data:formdata
    }).then(res=>{
        console.log(res.data.res)
        this.list=res.data.res
    })
  },
  methods: {
    //   删除操作
    // deleteData(id,index){
    //     this.arrtop.push(id)
    //     for(let i = 0; i < this.arrtop.length; i++){
    //       this.list= this.list.filter(item => item.id !=this.arrtop[i]);
    //     }

    //     console.log(this.arrtop)

    //     this.deleteSlider='transform:translateX(0px)'



    //  @touchstart="touchStart($event,index)"
    //         @touchmove="touchMove($event,index)"
    //         @touchend="touchEnd($event,index)"
    //         :style="fuck==index?deleteSlider:'transform:translateX(0px)'"
    //   },


    //  滑动
    touchStart(ev,index) {
      ev = ev || event;
      this.fuck=index
      //tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕

      if (ev.touches.length == 1) {
        // 记录开始位置
        this.startX = ev.touches[0].clientX;
      }
    },
    touchMove(ev,index) {
      ev = ev || event;
      this.fuck=index
      //获取删除按钮的宽度，此宽度为滑块左滑的最大距离
      let wd = this.$refs.remove[index].offsetWidth+10;
      if (ev.touches.length == 1) {
        // 滑动时距离浏览器左侧实时距离
        this.moveX = ev.touches[0].clientX;

        //起始位置减去 实时的滑动的距离，得到手指实时偏移距离
        this.disX = this.startX - this.moveX;
        // console.log(this.disX);
        // 如果是向右滑动或者不滑动，不改变滑块的位置
        if (this.disX < 0 || this.disX == 0) {
          this.deleteSlider = "transform:translateX(0px)";
          // 大于0，表示左滑了，此时滑块开始滑动
        } else if (this.disX > 0) {
          //具体滑动距离我取的是 手指偏移距离*5。
          this.deleteSlider = "transform:translateX(-" +  wd + "px)";

          // 最大也只能等于删除按钮宽度
          // if (this.disX * 5 >= wd) {
          //   this.deleteSlider = "transform:translateX(-" + wd + "px)";
          // }
        }
      }
    },
    touchEnd(ev,index) {
      ev = ev || event;
      this.fuck=index
      let wd = this.$refs.remove.offsetWidth+10;
      if (ev.changedTouches.length == 1) {
        let endX = ev.changedTouches[0].clientX;

        this.disX = this.startX - endX;
        // console.log(this.disX);
        //如果距离小于删除按钮一半,强行回到起点

        if (this.disX * 5 < wd / 2) {
          this.deleteSlider = "transform:translateX(0px)";
        } else {
          //大于一半 滑动到最大值
          this.deleteSlider = "transform:translateX(-" + wd + "px)";
        }
      }
    }
    
  }
};
</script>
<style lang="scss" scoped>
.slider {
  width: 750px;
  height: 190px;
  position: relative;
  user-select: none;
  margin-top: 20px;
  // box-sizing: border-box;
  // padding: 20px 30px;
  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #ffffff;
    z-index: 100;
    transition: 0.3s;
    box-sizing: border-box;
    padding: 20px 30px;
    h3 {
      font-size: 30px;
      text-align: left;
    }
    p {
      text-align: left;
      font-size: 24px;
      color: #999999;
      padding-top: 15px;
    }
    span {
      padding-left: 30px;
    }
  }
  .remove {
    position: absolute;
    width: 170px;
    height: 190px;
    background: red;
    right: 0;
    top: 0;
    color: #fff;
    text-align: center;
    font-size: 32px;
    line-height: 190px;
  }
}
.laji {
  width: 750px;
  height: 80px;
}
.yincang {
  img {
    width: 550px;
    height: 308px;
    margin-top: 200px;
  }
  p {
    color: #0090ff;
    font-size: 35px;
  }
}
</style>