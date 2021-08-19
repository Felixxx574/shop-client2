<template>
  <div id="index">
    <el-row>
      <el-col :span="6"><div class="none"></div></el-col>
      <el-col :span="12">
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
            <el-menu-item index="10">个人中心</el-menu-item>
          </el-menu>
        </el-card>
      </el-col>
      <el-col :span="6"><div class="none"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "index",
  components: {},
  data() {
    return {
      activeIndex: '1'
    }
  }
  }
</script>

<style scoped>
.none{
  min-height: 5px;
}
</style>
