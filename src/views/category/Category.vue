<template>
  <div>
    tuijia
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
import TabBar from "@/components/tabbar/TabBar";
import TabBarItem from "@/components/tabbar/TabBarItem";
import MainTabBar from "@/components/tabbar/MainTabBar";

export default {
name: "Category"
  ,components:{
    MainTabBar,
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>