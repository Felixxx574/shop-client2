<template>
  <div id="son2">
    <h3>{{sonMsg}}</h3>
    <span>用户名: {{ user.username }}</span>
    <br>
    <span>密码: {{ user.password }}</span>
  </div>
</template>

<script>
export default {
  name: "son2",
  components: {},
  data() {
    return {
      sonMsg: "这里是子组件2"
    }
  },
  //如果需要通过某些逻辑运算得到一个未知的值, 就用computed
  //computed可以理解为依赖
  computed: {
    user() {
      let user = {}
      user = this.$store.getters.user
      return user
    }
  }
}
</script>

<style scoped>

</style>
