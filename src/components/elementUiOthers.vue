<template>
  <div id="elementUiOthers">
    <el-row>
      <el-col :span="8">
        <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
          <span>这是一段信息</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
      </el-col>
      <el-col :span="8">
        <el-button type="text" @click="dialogFormVisible = true">注册dialog</el-button>
        <el-dialog title="注册" :visible.sync="dialogFormVisible">
          <el-form :model="registerForm">
            <el-form-item label="用户名" :label-width="formLabelWidth">
              <el-input v-model="registerForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" :label-width="formLabelWidth">
              <el-input v-model="registerForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="性别" :label-width="formLabelWidth">
              <el-select v-model="registerForm.sex" placeholder="请选择性别">
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="female"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </el-col>
      <el-col :span="8">
        <el-button type="text" @click="outerVisible = true">登陆/注册</el-button>

        <el-dialog title="登录" :visible.sync="outerVisible" width="40%" center :show-close="false">
          <el-dialog
              width="30%"
              title="注册"
              :visible.sync="innerVisible"
              append-to-body
              center
              :show-close="false">
            <el-form :model="registerForm">
              <el-form-item label="用户名" :label-width="formLabelWidth">
                <el-input v-model="registerForm.username" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="密码" :label-width="formLabelWidth">
                <el-input v-model="registerForm.password" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="性别" :label-width="formLabelWidth">
                <el-select v-model="registerForm.sex" placeholder="请选择性别">
                  <el-option label="男" value="male"></el-option>
                  <el-option label="女" value="female"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="innerVisible = false">取 消</el-button>
              <el-button type="primary" @click="innerVisible = false">提交</el-button>
            </div>
          </el-dialog>
          <div slot="footer" class="dialog-footer">

            <el-form :model="loginForm">
              <el-form-item label="用户名" :label-width="formLabelWidth">
                <el-input v-model="loginForm.username" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="密码" :label-width="formLabelWidth">
                <el-input v-model="loginForm.password" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <el-button @click="innerVisible = true">还没有注册?</el-button>
            <el-button type="primary" @click="outerVisible = false">登录</el-button>
          </div>
        </el-dialog>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-tooltip content="Top center" placement="top">
          <div slot="content">多行信息<br/>第二行信息</div>
          <el-button>Dark Top center</el-button>
        </el-tooltip>
        <el-tooltip content="Bottom center" placement="bottom" effect="light">
          <el-button>Light</el-button>
        </el-tooltip>
      </el-col>
      <el-col :span="8">
        <el-popover
            placement="top"
            width="160"
            v-model="visible">
          <p>这是一段内容这是一段内容确定删除吗？</p>
          <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text" @click="visible = false">取消</el-button>
            <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
          </div>
          <el-button slot="reference">删除</el-button>
        </el-popover>
      </el-col>
      <el-col :span="8">
        <el-popconfirm
            confirm-button-text='好的'
            cancel-button-text='不用了'
            icon="el-icon-info"
            icon-color="red"
            title="这是一段内容确定删除吗？"
            @confirm="popConfirm"
            @cancel="popCancel"
        >
          <el-button slot="reference">删除</el-button>
        </el-popconfirm>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-row>
          <el-col :span="5" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time">{{ new Date() }}</time>
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-divider><i class="el-icon-star-off"></i></el-divider>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-carousel height="275px" indicator-position="outside" type="card">
          <el-carousel-item v-for="item in imgList" :key="item">
            <el-image :src="item.src" :preview-src-list="srcList"></el-image>
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="1"><div class="none"></div></el-col>
      <el-col :span="7">
        <el-collapse v-model="activeNames">
          <el-collapse-item title="一致性 Consistency" name="1">
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </el-collapse-item>
          <el-collapse-item title="反馈 Feedback" name="2">
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </el-collapse-item>
          <el-collapse-item title="效率 Efficiency" name="3">
            <div>简化流程：设计简洁直观的操作流程；</div>
            <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
          </el-collapse-item>
          <el-collapse-item title="可控 Controllability" name="4">
            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
            <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
          </el-collapse-item>
        </el-collapse>
      </el-col>
      <el-col :span="8">
        <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
          个人中心抽屉
        </el-button>

        <el-drawer
            title="我是标题"
            :visible.sync="drawer"
            direction="rtl"
            :before-close="handleClose">
          <span>我来啦!</span>
        </el-drawer>
      </el-col>
    </el-row>
    <el-backtop :visibility-heigh="0" target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
  </div>
</template>

<script>
export default {
  name: "elementUiOthers",
  data() {
    return {
      dialogVisible: false,
      dialogFormVisible: false,
      registerForm: {
        username: '',
        password: '',
        sex: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      loginForm: {
        username: '',
        password: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px',
      outerVisible: false,
      innerVisible: false,
      visible: false,
      imgList: [
        {src: "https://video.codeseeding.com/image/default/83D5CEE199904C4AA74DABC91C726270-6-2.jpg"},
        {src: "https://video.codeseeding.com/image/default/5A765C1A16AD47EBAED34CFAC3A6EF17-6-2.png"},
        {src: "https://video.codeseeding.com/image/default/BC4A1DC0138246A0B6BCAB49749C0AC2-6-2.jpg"},
        {src: "https://video.codeseeding.com/image/default/AE03865608444CB389BA0334CD67F1AC-6-2.jpg"}
      ],
      activeNames: ['1','2','3','4'],
      drawer:false
    }
  },
  //<el-image>标签开启大图预览需要添加:preview-src-list属性, 并指定一个数组, 且数组中的元素只能是string类型.
  //但是我们的imgList是一个对象数组, 所以我们需要把他转化成只有图片路径的新string类型数组, 就需要使用computed
  computed: {
    srcList() {
      let srcList = []
      this.imgList.forEach(item => {
        srcList.push(item.src)
      })
      return srcList
    }
  },
  //(item) => {}就像相当于是function(item) {}
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(() => {
            done();
          })
          .catch(() => {});
    },
    popConfirm() {
      this.$message.success({message: "已确认"})
    },
    popCancel () {
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
    }
  }
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  width: 480px;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.none{
  min-height: 5px;
}
</style>
