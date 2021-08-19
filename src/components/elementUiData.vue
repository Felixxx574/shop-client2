<template>
  <div id="elementUiData">
    <el-tag
        :key="tag"
        v-for="tag in dynamicTags"
        closable
        type="danger"
        :disable-transitions="false"
        @close="handleClose(tag)">
      {{tag}}
    </el-tag>
    <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
    >
    </el-input>
    <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
    <div class="tag-group">
      <el-tag
          type="danger"
          effect="dark">
        Dark
      </el-tag>
      <el-tag
          type="danger"
          effect="light">
        light
      </el-tag>
      <el-tag
          type="danger"
          effect="plain">
        plain
      </el-tag>
    </div>
    <div style="width: 500px">
      <el-progress :percentage="50"></el-progress>
      <el-progress :percentage="78" :format="format"></el-progress>
      <el-progress :percentage="100" status="success"></el-progress>
      <el-progress :percentage="100" status="warning"></el-progress>
      <el-progress :percentage="50" status="exception" stroke-width="30" text-inside="当前进度为50%"></el-progress>
    </div>
    <div style="width: 300px">
      <el-progress :percentage="percentage" :color="customColorMethod"></el-progress>
      <div>
        <el-button-group>
          <el-button icon="el-icon-minus" @click="decrease"></el-button>
          <el-button icon="el-icon-plus" @click="increase"></el-button>
        </el-button-group>
      </div>
    </div>
    <div>
      <el-input
          placeholder="输入关键字进行过滤"
          v-model="filterText">
      </el-input>\
      <el-tree
          class="filter-tree"
          :data="data"
          :props="defaultProps"
          default-expand-all
          :filter-node-method="filterNode"
          ref="tree"
          draggable>
      </el-tree>
    </div>
    <div>
      <div class="block">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
            hide-on-single-page="true">
        </el-pagination>
      </div>
    </div>
    <div>
      <el-badge :value="12" :max="99" class="item" type="warning" :hidden="isRead">
        <el-button size="small" @click="isRead = true">评论</el-button>
      </el-badge>
      <el-badge value="new" class="item" :hidden="isRead">
        <el-button size="small" @click="isRead = true">回复</el-button>
      </el-badge>
      <el-badge is-dot class="item" :hidden="isRead">
        <el-button class="share-button" icon="el-icon-share" type="primary" @click="isRead = true"></el-button>
      </el-badge>
    </div>
    <div>
      <template>
        <div class="demo-type">
          <el-avatar icon="el-icon-star-on"></el-avatar>
          <el-avatar src="https://video.codeseeding.com/image/default/2EF3849380B14AE09C58F3FE01FBECE8-6-2.gif"></el-avatar>
          <el-avatar> 游客 </el-avatar>
        </div>
      </template>
    </div>
    <div class="demo-fit">
      <div class="block" v-for="fit in fits" :key="fit">
        <span class="title">{{ fit }}</span>
        <el-avatar shape="square" :size="100" :fit="fit" :src="url"></el-avatar>
      </div>
    </div>
    <div>
      <el-empty description="加载失败" image=""></el-empty>
    </div>
    <div>
      <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
      <el-dialog
          title="提示"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose">
        <el-result icon="success" title="成功提示" subTitle="请根据提示进行操作">
        </el-result>
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </el-dialog>
    </div>
  </div>

</template>

<script>
export default {
  name: "elementUiData",
  data() {
    return {
      dynamicTags: ['标签一', '标签二', '标签三'],
      inputVisible: false,
      inputValue: '',
      format(percentage) {
        return percentage === 100 ? '满' : `${percentage}%`;
      },
      percentage: 20,
      filterText: '',
      data: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      //每一个分页都需要用到
      page: {
        pageSize: 5,
        currentPage: 1,
        total: ''
      },
      isRead: false,
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      dialogVisible: false
    };
  },
  watch: {
    filterText(val) {
      //传统js获取DOM节点一般是通过getElementById("#xxx"), this.$refs.xxx
      this.$refs.tree.filter(val);
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
    },
    customColorMethod(percentage) {
      if (percentage < 30) {
        return '#909399';
      } else if (percentage < 70) {
        return '#e6a23c';
      } else {
        return '#67c23a';
      }
    },
    increase() {
      this.percentage += 10;
      if (this.percentage > 100) {
        this.percentage = 100;
      }
    },
    decrease() {
      this.percentage -= 10;
      if (this.percentage < 0) {
        this.percentage = 0;
      }
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    errorHandler() {
      console.log("loading failed")
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
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
