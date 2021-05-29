<template>
  <div className="home">
    <input type="text">
    <button>click me</button>
<!--    下方导航栏   -->
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
import TabBar from "@/components/tabbar/TabBar";
import TabBarItem from "@/components/tabbar/TabBarItem";
import MainTabBar from "@/components/tabbar/MainTabBar";

export default {
  data: function () {
    return {
      crs: ["dsada", "grgwrgw", "hrtjrs"],
      res: null,
      npnum: 20,
    };
  },
  components: {
    TabBarItem,
    TabBar,
    MainTabBar
  }
}
</script>
<style scoped>
</style>