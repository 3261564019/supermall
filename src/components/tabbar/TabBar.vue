<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tab-bar {
    display: flex;
    box-shadow: 0 -5px 10px rgba(0,0,0,.6);

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #0d293e;

  }

</style>
