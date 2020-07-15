<template>
  <div>
      <!-- 头部一块 -->
    <div class="header">
      <div class="header_one">

        <div class="q1">
          <span>合肥市</span>
          <img src="../assets/images/index10.png" alt />
        </div>

        <div class="q2">
          <input type="text" placeholder="体检" />
          <img src="../assets/images/index02.jpg" alt />
        </div>
        
        <div class="q3">
          <img src="../assets/images/index03.png" alt />
          <div>6</div>
        </div>

      </div>
    </div>

<!-- 第二块 -->
    <div class="white">
      <router-link to="/qyZjxm">
        <div>
        <img src="../assets/images/index05.png" alt />
        <p>去预约</p>
      </div>      
      </router-link>
      <div>
        <img src="../assets/images/index06.png" alt />
        <p>健康体检</p>
      </div>
    </div>

<!-- 第三块 -->
    <div class="tre">

      <div class="tres">
          <div class="t1">
        <p class="ty">医疗</p>
        <p>头条</p>
        </div>
        <div class="shu"></div>
        <div class="tuij">推荐</div>
      </div>

      <p class="shx">生活小百科这里告诉你</p>

      <img src="../assets/images/index07.png" alt />

    </div>

<!-- 流程介绍 -->
    <div class="liuc">
      <img src="../assets/images/liuc.png" alt="">
      <p>流程介绍</p>
    </div>

<!-- 简介 图 -->
    <div class="jianj">
      <p class="j1">体检流程简介</p>
      <p class="j2">环境、医生、体检须知</p>
      <router-link to="tjjs"><div>一键了解</div></router-link>
    </div>

    <div class="dian"></div>

    <pagefoot :idx="0"></pagefoot>

  </div>
</template>
<script>
import pagefoot from "@/components/pagefoot.vue";
export default {
  components: {
    pagefoot
  }
};
</script>
<style lang="scss" scoped>

.header {
  background: url("../assets/images/index01.png") no-repeat center center;
  background-size: 100% 100%;
  width: 750px;
  height: 448px;
  overflow: hidden;
}

// 头部一块
.header_one {
  width: 690px;
  display: flex;
  margin: 0 auto;
  margin-top: 64px;
  align-items: center;
  .q1 {
    font-size: 26px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    img {
      width: 16px;
      height: 10px;
      padding: 5px 10px;
    }
    padding: 0 15px;
  }
  .q2 {
    width: 460px;
    height: 62px;
    background: #ffffff;
    border-radius: 25px;
    display: flex;
    font-size: 50px;
    input {
      outline: none;
      border: none;
      height: 61px;
      margin-left: 29px;
      width: 380px;
      font-size: 28px;
    }
    img {
      width: 27px;
      height: 28px;
      padding: 17px 18px;
    }
  }
  .q3 {
    position: relative;
    margin-left: 26px;
    img {
      width: 48px;
      height: 48px;
    }
    div {
      background: url("../assets/images/index04.png") no-repeat center center;
      background-size: 100%;
      position: absolute;
      top: -15px;
      right: -15px;
      width: 34px;
      height: 34px;
      font-size: 20px;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 33px;
    }
  }
}

// 第二块
.white {
  background: url("../assets/images/index11.png") no-repeat center center;
  background-size: 100%;
  width: 749px;
  height: 253px;
  border-radius: 10px;
  position: absolute;
  top: 370px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  div {
    font-size: 24px;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    img {
      width: 110px;
      height: 110px;
    }
  }
}

// 第三块
.tre {
  width: 700px;
  margin: 0 auto;
  display: flex;
  margin-top: 220px;
  align-items: center;
  justify-content: space-between;
  .tres{
      display: flex;
      align-items: center;
  }
  .t1 {
    p {
      font-size: 30px;
    }
    .ty {
      color: #5fa0ff;
    }
  }
  .shu {
    width: 4px;
    height: 35px;
    background: #333333;
    margin: 0 15px;
  }
  .tuij {
    width: 64px;
    height: 26px;
    border: 1px solid #5fa0ff;
    font-size: 24px;
    color: #5fa0ff;
    line-height: 26px;
  }
  .shx {
    font-size: 30px;
    margin-right: 150px;
    font-weight: 800;
  }
  img {
    width: 12px;
    height: 21px;
  }
}

// 流程介绍
.liuc {
  width: 700px;
  display: flex;
  font-size: 36px;
  font-weight: 800;
  margin: 0 auto;
  margin-top: 80px;
  align-items: center;
  img{
    width: 6px;
    height: 34px;
    padding-right: 10px;
  }
}

// 简介   图
.jianj {
  background: url("../assets/images/index08.png") no-repeat center center;
  background-size: 100%;
  width: 700px;
  height: 248px;
  margin: 0 auto;
  margin-top: 30px;
  .j1 {
    font-size: 36px;
    font-weight: 800;
    color: rgba(95, 156, 255, 1);
    width: 260px;
    padding-top: 30px;
  }
  .j2 {
    font-size: 26px;
    font-weight: 800;
    color: rgba(191, 191, 191, 1);
    width: 310px;
    padding-top: 10px;
  }
  div {
    background: url("../assets/images/index09.png") no-repeat center center;
    background-size: 100%;
    width: 154px;
    height: 46px;
    font-size: 24px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 46px;
    margin-top: 20px;
    margin-left: 30px;
  }
}

.dian {
  width: 750px;
  height: 110px;
  margin-top: 30px;
}
</style>