<!--在vuecli中app.vue中的templete就是body-->
<template>
  <div id="app">
    <father></father>
  </div>
</template>

<script>
import father from "./components/father";
export default {
  name: 'app',
  components: {
    father
  }
}
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
</style>
