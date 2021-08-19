<template>
  <div id="elementUiNotice">
    <el-row>
      <el-col :span="7">
        <div>
          <el-alert
              title="成功提示的文案"
              type="success" show-icon >
          </el-alert>
          <el-alert
              title="消息提示的文案"
              type="info" show-icon>
          </el-alert>
          <el-alert
              title="警告提示的文案"
              type="warning" show-icon>
          </el-alert>
          <el-alert
              title="错误提示的文案"
              type="error" show-icon>
          </el-alert>
        </div>
      </el-col>
      <el-col :span="1"><div class="none"></div></el-col>
      <el-col :span="7">
        <div>
          <el-alert
              title="成功提示的文案"
              type="success"
              effect="dark" center>
          </el-alert>
          <el-alert
              title="消息提示的文案"
              type="info"
              effect="dark" center>
          </el-alert>
          <el-alert
              title="警告提示的文案"
              type="warning"
              effect="dark" center>
          </el-alert>
          <el-alert
              title="错误提示的文案"
              type="error"
              effect="dark" center>
          </el-alert>
        </div>
      </el-col>
      <el-col :span="1"><div class="none"></div></el-col>
      <el-col :span="7">
        <el-alert
            title="不可关闭的 alert"
            type="success"
            :closable="false">
        </el-alert>
        <el-alert
            title="自定义 close-text"
            type="info"
            close-text="知道了">
        </el-alert>
        <el-alert
            title="设置了回调的 alert"
            type="warning"
            @close="hello">
        </el-alert>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <div>
          <el-alert
              title="技术总监@了你"
              type="warning"
              description="需求改了wdnmd,今晚加班"
              show-icon>
          </el-alert>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-button
            type="primary"
            @click="openFullScreen1"
            v-loading.fullscreen.lock="fullscreenLoading">
          指令方式
        </el-button>
        <el-button
            type="primary"
            @click="openFullScreen2">
          服务方式
        </el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-button :plain="true" @click="open2" duration="1000">成功</el-button>
        <el-button :plain="true" @click="open3" duration="1000">警告</el-button>
        <el-button :plain="true" @click="open1" duration="1000">消息</el-button>
        <el-button :plain="true" @click="open4" duration="1000">错误</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-button
            plain
            @click="open5">
          可自动关闭
        </el-button>
        <el-button
            plain
            @click="open6">
          不会自动关闭
        </el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-button type="text" @click="openConfirm">删除</el-button>
      </el-col>
      <el-col :span="8">
        <el-button type="text" @click="openSubmit">提交</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// eslint-disable-next-line
import { Loading } from 'element-ui';
export default {
  name: "elementUiNotice",
  data() {
    return {
      fullscreenLoading: false,
      options: {
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      }
    }
  },
  methods: {
    hello() {
      alert('真的要关闭吗?');
    },
    openFullScreen1() {
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
      }, 2000);
    },
    openFullScreen2() {
      const loading = this.$loading({
        lock: true,
        text: 'Loading...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
    },
    open1() {
      this.$message({
        center: true,
        showClose: true,
        dangerouslyUseHTMLString: true,
        message:'<strong>这是 <i>HTML</i> 富文本</strong>',
        duration: 1000
      });
    },
    open2() {
      this.$message({
        center: true,
        showClose: true,
        message: '恭喜你，这是一条成功消息',
        type: 'success',
        duration: 1000
      });
    },
    open3() {
      this.$message({
        center: true,
        showClose: true,
        message: '警告哦，这是一条警告消息',
        type: 'warning',
        duration: 1000
      });
    },
    open4() {
      this.$message.error({
        center: true,
        showClose: true,
        message:'这是一条消息提示',
        duration: 1000
      });
    },
    open5() {
      const h = this.$createElement;

      this.$notify({
        title: '技术总监@了你',
        type: 'warning',
        message: h('i', { style: 'color: teal'}, '需求改了wdnmd,今晚加班'),
        duration: 2000,
      });
    },
    open6() {
      this.$notify({
        title: '提示',
        message: '这是一条不会自动关闭的消息',
        duration: 0
      });
    },
    openConfirm() {
      //this.$confirm是一个异步组件, 当我们点击确定后会调用then方法, 点击取消会被视为一个异常, 调用catch方法
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    openSubmit() {
      this.$prompt('请输入邮箱', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: '邮箱格式不正确'
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: '你的邮箱是: ' + value
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });
      });
    }

  },
  mounted() {
    // Loading.service(this.options);
  }
}
</script>

<style scoped>
.none{
  min-height: 5px;
}
</style>
