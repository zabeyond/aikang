<template>
    <div class="foot">
            <div class="every" v-for='(item,index) of items' :class='[item.cls,{on:index === idx}]' @click="$router.push(item.push)">
                <img :src="index===idx?item.iconSelect:item.icon">
                <div :class="['colorChange',{on:index===idx}]" >{{item.name}}</div>
            </div>
    </div>
</template>
<script>
export default {
    name: 'pagefoot',
    props:['idx'],
    data(){
        return{
            items:[{
					cls:"home",
					name:"首页",
					push:"/index",
					icon: require('../assets/images/tabbar01.png'),
					iconSelect:require('../assets/images/tabbar1.png')
				},
				{
					cls:"shares",
					name:"预约",
					push:"/qyZjxm",
					icon:require('../assets/images/tabbar02.png'),
					iconSelect:require('../assets/images/tabbar2.png')
				},
				{
					cla:"mine",
					name:"我的",
					push:"/my",
					icon:require('../assets/images/tabbar03.png'),
					iconSelect:require('../assets/images/tabbar3.png')
				}]
        }
    }
}
    

</script>
<style lang="scss" scoped>
    .foot{
        width: 750px;
        height: 110px;
        background: #ffffff;
        position: fixed;
        bottom: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;

    }
    .every{
        font-size:22px;
        img{
            width: 50px;
            height: 50px;
        }
    }
    .on{
        color: #4F73FE;
    }

</style>