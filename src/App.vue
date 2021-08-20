<template>
  <div id="app">
    <el-row>
      <el-col :span="5"><div class="none"></div></el-col>
      <el-col :span="14">
        <router-view/>
      </el-col>
      <el-col :span="5"><div class="none"></div></el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Home'
}
</script>

<style>
#app {

}
.none{
  min-height: 5px;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.center{
  text-align: center;
}
.top10{
  margin-top: 10px;
}
.top30{
  margin-top: 30px;
}
.top50{
  margin-top: 50px;
}
</style>
