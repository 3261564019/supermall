<template>
  <!--所有的item都展示同一个图片, 同一个文字-->
  <div class="tab-bar-item" @click="choose">
    <div id="pic">
      <slot  name="item-icon"></slot>
      <slot    name="item-active-icon"></slot>
    </div>
    <div id="info">
    <slot name="item-text"></slot>
    </div>
    <!--<img src="../../assets/img/tabbar/home.svg" alt="">-->
    <!--<div>首页</div>-->
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    data:function(){
        return{
          isActive:false
        }
    },
    props:{
      path:String
    }
    ,methods:{
      choose(){
        this.$router.push(this.path);
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item #pic img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  .tab-bar-item>#info{
    color: #41b381;
  }
</style>
