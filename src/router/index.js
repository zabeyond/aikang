import Vue from 'vue'
import VueRouter from 'vue-router'

import login from '@/views/login/login.vue' // 登录页面

import index from '@/views/index.vue'    // 首页
import tjjs from '@/views/tjjs.vue'   // 体检介绍   (底部导航预约)
// import akjj from '@/views/akjj.vue'   // 爱康机构简介

import my from '@/views/my.vue'   // 我的 
import brxx from '@/views/brxx.vue'   // 本人信息
import reg from '@/views/login/reg.vue'   // 修改密码页面
import yydd from '@/views/yydd.vue'  //  预约订单
import gmjl from '@/views/gmjl.vue'   // 购买记录
import tjbg from '@/views/tjbg.vue'   // 体检报告
import mybg from '@/views/mybg.vue'   // (体检报告) 我的报告
// import fwjl from '@/views/fwjl.vue'  // 服务记录


// import xzyy from '@/views/xzyy.vue'  // 选择医院
// import qitayy from '@/views/qitayy.vue'  // 其他医院
import tclb from '@/views/tclb.vue'  // 套餐列表
import tcxq from '@/views/tcxq.vue'  //  套餐详情

import zjxm from '@/views/zjxm.vue'  // 增加项目
import jxb from '@/views/jxb.vue'  // 加项包
import jxbjs from '@/views/jxbjs.vue'  // 加项包介绍


import yycg from '@/views/yycg.vue'  // 预约成功页面
import qylb from '@/views/qylb.vue'  // 亲友列表
import qyxzxx from '@/views/qyxzxx.vue'  // 亲友新增信息

import tjdd from '@/views/tjdd.vue'  // 体检订单

import ddxq from '@/views/ddxq.vue'  // 订单详情

//  提交订单
import ddtj from '@/views/ddtj.vue'

import qyZjxm from '@/views/qiyeUser/qyZjxm.vue'   // 企业用户 增加项目

Vue.use(VueRouter)

const routes = [
  {
    path: '/',   // 登录页面
    name: 'login',
    component: login
  },
  {
    path:'/index',  // 首页
    name:'index',
    component:index
  },
  {
    path:'/tjjs',  // 体检介绍
    name:'tjjs',
    component:tjjs
  },
  {
    path:'/my',  // 我的 
    name:'my',
    component:my
  },
  {
    path:'/brxx',  // 本人信息
    name:'brxx',
    component:brxx
  },
  {
    path:'/reg',  // 修改密码页面
    name:'reg',
    component:reg
  },
  {
    path:'/yydd',  //  预约订单
    name:'yydd',
    component:yydd
  },
  {
    path:'/gmjl',  // 购买记录
    name:'gmjl',
    component:gmjl
  },
  {
    path:'/tjbg',  // 体检报告
    name:'tjbg',
    component:tjbg
  },
  {
    path:'/mybg',   // (体检报告) 我的报告
    name:'mybg',
    component:mybg
  },
  
  {
    path:'/tclb',  // 套餐列表
    name:'tclb',
    component:tclb
  },
  {
    path:'/tcxq',  //  套餐详情
    name:'tcxq', 
    component:tcxq
  },
  {
    path:'/zjxm',   // 增加项目
    name:'zjxm',
    component:zjxm
  },
  {
    path:'/jxb',   // 加项包
    name:'jxb',
    component:jxb
  },
  {
    path:'/jxbjs',   // 加项包介绍
    name:'jxbjs',
    component:jxbjs
  },
  {
    path:'/yycg',   // 预约成功页面
    name:'yycg',
    component:yycg
  },
  {
    path:'/qylb',  // 亲友列表
    name:'qylb',
    component:qylb
  },
  {
    path:'/qyxzxx',  // 亲友新增信息
    name:'qyxzxx',
    component:qyxzxx
  },
  {
    path:'/tjdd',  // 体检订单
    name:'tjdd',
    component:tjdd
  },
  {
    path:'/ddtj',  //  提交订单
    name:'ddtj',
    component:ddtj
  },
  {
    path:'/ddxq',  //  订单详情
    name:'ddxq',
    component:ddxq
  },

  // 企业用户
  {
    path:'/qyZjxm',  // 企业用户 增加项目
    name:'qyZjxm',
    component:qyZjxm
  },

  // {
  //   path:'/xzyy',  // 选择医院
  //   name:'xzyy',
  //   component:xzyy
  // },
  // {
  //   path:'/qitayy',  // 其他医院
  //   name:'qitayy',
  //   component:qitayy
  // },
  // {
  //   path:'/akjj',   // 爱康机构简介
  //   name:'akjj',
  //   component:akjj
  // },
  // {
  //   path:'/fwjl',  // 服务记录
  //   name:'fwjl',
  //   component:fwjl
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
