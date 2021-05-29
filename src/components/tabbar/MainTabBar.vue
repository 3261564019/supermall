<template>
  <div>

    <TabBar>
      <tab-bar-item path="/home">
        <img slot="item-active-icon" v-if="nowpath=='/home'"  src="../../assets/img/tabbar/home_active.svg">
        <img v-else slot="item-icon" src="../../assets/img/tabbar/home.svg">

        <p :class="{active:nowpath=='/home'}" slot="item-text">首页</p>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-active-icon"  v-if="nowpath=='/category'" src="../../assets/img/tabbar/category_active.svg">
        <img slot="item-icon"  v-else src="../../assets/img/tabbar/category.svg">
        <p :class="{active:nowpath=='/category'}" slot="item-text">推荐</p>
      </tab-bar-item>
      <tab-bar-item path="/shopcart">
        <img slot="item-active-icon" v-if="nowpath=='/shopcart'" src="../../assets/img/tabbar/shopcart_active.svg">
        <img slot="item-icon" v-else src="../../assets/img/tabbar/shopcart.svg">
        <p :class="{active:nowpath=='/shopcart'}" slot="item-text">购物车</p>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-active-icon" v-if="nowpath=='/profile'" src="../../assets/img/tabbar/profile_active.svg">
        <img slot="item-icon" v-else src="../../assets/img/tabbar/profile.svg">
        <p :class="{active:nowpath=='/profile'}" slot="item-text">我的</p>
      </tab-bar-item>
    </TabBar>
  </div>
</template>

<script>

import TabBar from "@/components/tabbar/TabBar";
import TabBarItem from "@/components/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  data:function(){
    return {
      nowpath:'',
      activeimg:[
        "../../assets/img/tabbar/home_active.svg",
      ]
    }
  },
  components:{
    TabBarItem,
    TabBar
  },created() {
    this.nowpath=this.$route.path
    console.log(this.$route.path);
  }
}
</script>

<style scoped>
  .active{
    color:white;
  }
</style>