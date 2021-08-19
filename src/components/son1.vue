<template>
  <div id="son1">
    <h3>{{sonMsg}}</h3>
    <span>用户名: {{ user.username }}</span>
    <br>
    <span>密码: {{ user.password }}</span>
  </div>
</template>

<script>
export default {
  name: "son1",
  components: {},
  props: ["user"],
  data() {
    return {
      sonMsg: "这里是子组件1"
    }
  },

  }
</script>

<style scoped>

</style>
