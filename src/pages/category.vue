<template>
  <div id="category">
    <el-card>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="console.log('select menu')">
        <el-menu-item index="1">手机</el-menu-item>
        <el-menu-item index="2">电脑</el-menu-item>
        <el-menu-item index="3">服装</el-menu-item>
        <el-menu-item index="4">家具</el-menu-item>
        <el-menu-item index="5">生鲜</el-menu-item>
        <el-menu-item index="6">母婴</el-menu-item>
        <el-menu-item index="7">艺术</el-menu-item>
        <el-menu-item index="8">学习</el-menu-item>
        <el-menu-item index="9">美妆</el-menu-item>
        <el-menu-item index="10">医疗</el-menu-item>
        <el-menu-item index="11">交通</el-menu-item>
        <el-menu-item index="12">理财</el-menu-item>
      </el-menu>
      <el-row>
        <el-col :span="11">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">全部分类</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">手机</a></el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <el-col :span="1"><div class="none"></div> </el-col>
        <el-col :span="12">
          <span>已选择标签: </span>
          <el-tag
              :key="tag"
              v-for="tag in dynamicTags"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)">
            {{tag}}
          </el-tag>
        </el-col>
      </el-row>
      <div>
        <el-row>
          <el-col :span="2" class="tagCategory"><span>品牌:</span></el-col>
          <el-col :span="22">
            <el-row>
              <el-col class="tag" :span="3"><span>小米（MI）</span></el-col>
              <el-col class="tag" :span="3"><span>荣耀（HONOR）</span></el-col>
              <el-col class="tag" :span="3"><span>华为（HUAWEI）</span></el-col>
              <el-col class="tag" :span="3"><span>vivo</span></el-col>
              <el-col class="tag" :span="3"><span>OPPO</span></el-col>
              <el-col class="tag" :span="3"><span>黑鲨</span></el-col>
              <el-col class="tag" :span="3"><span>一加</span></el-col>
              <el-col class="tag" :span="3"><span>三星（SAMSUNG）</span></el-col>
            </el-row>
            <el-row>
              <el-col class="tag" :span="3"><span>魅族（meizu）</span></el-col>
              <el-col class="tag" :span="3"><span>Apple</span></el-col>
              <el-col class="tag" :span="3"><span>真我（realme）</span></el-col>
              <el-col class="tag" :span="3"><span>摩托罗拉（Motor...</span></el-col>
              <el-col class="tag" :span="3"><span>中兴（ZTE）</span></el-col>
              <el-col class="tag" :span="3"><span>联想（lenovo）</span></el-col>
              <el-col class="tag" :span="3"><span>ROG</span></el-col>
              <el-col class="tag" :span="3"><span>努比亚（nubia）</span></el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="2" class="tagCategory"><span>功能:</span></el-col>
          <el-col :span="22">
            <el-row>
              <el-col class="tag" :span="3"><span>超大字体</span></el-col>
              <el-col class="tag" :span="3"><span>超大音量</span></el-col>
              <el-col class="tag" :span="3"><span>SOS功能</span></el-col>
              <el-col class="tag" :span="3"><span>语音命令</span></el-col>
              <el-col class="tag" :span="3"><span>语音识别(文字语音互转)</span></el-col>
              <el-col class="tag" :span="3"><span>远程协助</span></el-col>
              <el-col class="tag" :span="3"><span>极简桌面模式</span></el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="2" class="tagCategory"><span>系统:</span></el-col>
          <el-col :span="22">
            <el-row>
              <el-col class="tag" :span="3"><span>Android</span></el-col>
              <el-col class="tag" :span="3"><span>EMUI 11.0（基于Android 10）</span></el-col>
              <el-col class="tag" :span="3"><span>HarmonyOS 2</span></el-col>
              <el-col class="tag" :span="3"><span>IOS</span></el-col>
              <el-col class="tag" :span="3"><span>其他OS</span></el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="2" class="tagCategory"><span>CPU型号:</span></el-col>
          <el-col :span="22">
            <el-row>
              <el-col class="tag" :span="3"><span>骁龙855 plus</span></el-col>
              <el-col class="tag" :span="3"><span>麒麟990</span></el-col>
              <el-col class="tag" :span="3"><span>麒麟990 5G</span></el-col>
              <el-col class="tag" :span="3"><span>骁龙768</span></el-col>
              <el-col class="tag" :span="3"><span>GExynos980</span></el-col>
              <el-col class="tag" :span="3"><span>MTK Helio G85</span></el-col>
              <el-col class="tag" :span="3"><span>MT6873</span></el-col>
              <el-col class="tag" :span="3"><span>紫光展锐</span></el-col>
              <el-col class="tag" :span="3"><span>骁龙865 plus</span></el-col>
              <el-col class="tag" :span="3"><span>天玑1000 plus</span></el-col>
            </el-row>
          </el-col>
        </el-row>

      </div>

    </el-card>
  </div>
</template>

<script>
export default {
  name: "category",
  components: {},
  data() {
    return {
      activeIndex: '',
      dynamicTags: ['标签一', '标签二', '标签三'],
      inputVisible: false,
      inputValue: '',
      categoryList: [
        {
          name: '品牌',
          tagList: ['小米（MI）','荣耀（HONOR）','华为（HUAWEI）','vivo','OPPO','黑鲨','一加','三星（SAMSUNG）'
            ,'魅族（meizu）','Apple','真我（realme）','摩托罗拉（Motor...','中兴（ZTE）','联想（lenovo）','ROG','努比亚（nubia）']
        },
        {
          name: '功能',
          tagList: ['超大字体','超大音量','SOS功能','语音命令','语音识别(文字语音互转)','远程协助','极简桌面模式']
        },
        {
          name: '系统',
          tagList: ['Android','EMUI 11.0（基于Android 10）','HarmonyOS 2','IOS','其他OS']
        },
        {
          name: 'CPU型号',
          tagList: ['骁龙855 plus','麒麟990','麒麟990 5G','骁龙768','GExynos980','MTK Helio G85','MT6873','紫光展锐','骁龙865 plus','天玑1000 plus']
        }
      ]
    }
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    }
  }
  }
</script>

<style scoped>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
.tag{
  font-size: 0.7em;
  padding: 5px;
}
.tagCategory{
  background-color: #F2F6FC;
  padding: 5px 5px 30px 5px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
