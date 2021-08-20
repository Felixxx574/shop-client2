<template>
  <div id="navigation">
    <el-card>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="console.log('select menu')">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">全部分类</el-menu-item>
        <el-menu-item index="3">手机</el-menu-item>
        <el-menu-item index="4">电脑</el-menu-item>
        <el-menu-item index="5">服装</el-menu-item>
        <el-menu-item index="6">鞋包</el-menu-item>
        <el-menu-item index="7">零食</el-menu-item>
        <el-menu-item index="8">生鲜</el-menu-item>
        <el-menu-item index="9">我的订单</el-menu-item>
        <el-menu-item index="10" @click="drawer = true">个人中心</el-menu-item>
      </el-menu>
    </el-card>
    <el-drawer
        :visible.sync="drawer"
        direction="rtl"
        size="20%"
        :show-close="false">
      <div class="avatar center">
        <el-avatar shape="square" :size="70" :src="user.avatar"></el-avatar>
      </div>
      <div class="username center top50">
        <span>{{user.username}}</span>
      </div>
      <div class="main center top50">
        <el-menu :default-active="userActiveIndex" class="el-menu-vertical-demo" mode="vertical">
          <el-menu-item index="1">个人资料</el-menu-item>
          <el-menu-item class="top10" index="2">我的订单</el-menu-item>
          <el-menu-item class="top10" index="3">我的购物车</el-menu-item>
          <el-menu-item class="top10" index="4">我的收藏</el-menu-item>
          <el-menu-item class="top10" index="5">浏览历史</el-menu-item>
          <el-menu-item class="top10" index="6">注销</el-menu-item>
        </el-menu>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: "navigation",
  components: {},
  data() {
    return {
      activeIndex: '1',
      userActiveIndex:"1",
      drawer: false,
      user: {
        avatar: "https://video.codeseeding.com/image/default/AE03865608444CB389BA0334CD67F1AC-6-2.jpg",
        username: "Cara"
      }
    }
  }
  }
</script>

<style scoped>
.avatar{

}
.username{
  font-size: 1.2em;
}
.main{

}
</style>
