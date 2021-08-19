<template>
  <div id="father">
    <h3>{{fatherMsg}}</h3>
    <el-button @click="setUser()">setUser</el-button>
    <el-button @click="getUser()">getUser</el-button>
    <el-button @click="login()">登录</el-button>
    <el-button @click="logout()">注销</el-button>
    <el-card class="card">
      <span>用户名</span>
      <el-input v-model="user.username"></el-input>
      <span>密码</span>
      <el-input v-model="user.password"></el-input>
    </el-card>
    <son1 :user="user"></son1>
    <son2></son2>
    <son3></son3>
  </div>
</template>

<script>
export default {
  name: "father",
  components: {
    son1 : () => import ('@/components/son1'),
    son2 : () => import ('@/components/son2'),
    son3 : () => import ('@/components/son3')
  },
  data() {
    return {
      fatherMsg: "这里是父组件",
      user: {
        username: "",
        password: "",
      }
    }
  },
  watch: {
    user: {
      handler: function(val) {
        console.log(val)
        this.$store.state.user = val
      },
      //深监听
      deep: true
    }
  },
  methods: {
    getUser() {
      console.log(this.$store.getters.user)
    },
    //对store中的数据进行修改时不用用this.$store.mutations, 我们只需要提交commit即可, 因为这个修改方法时已经写死在mutations中的
    setUser() {
      let user = {username: "Caracaracara",password: "rootrootroot"}
      this.$store.commit('setUser', user)
    },
    login() {
      this.$store.dispatch('login')
    },
    logout() {
      this.$store.dispatch('logout')
    }
  }
  }
</script>

<style scoped>
.card{
  width: 500px;
}
</style>
