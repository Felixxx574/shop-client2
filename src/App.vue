<template>
  <div id="app">
    <div id="nav">
<!--      //router-link相当于以前的a标签, router-link不同于a标签的跳转, 而是渲染当前路径对应的路由, 由路由来决定渲染哪些组件-->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <el-button @click="toHome()">Home</el-button>
      <el-button @click="toAbout()">About</el-button>
      <el-button @click="toGoods()">Goods</el-button>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'Home',
  components: {

  },
  data() {
    return {

    }
  },
  methods: {
    toHome() {
      this.$router.push({path:'/'})
    },
    toAbout() {
      this.$router.push({path:'/about'})
    },
    toGoods() {
      this.$router.push({path:'/goods/001'})
    },
  }
}
</script>

<style>
#app {

}
.none{
  min-height: 5px;
}
</style>
