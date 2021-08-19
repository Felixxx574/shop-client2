<template>
  <div id="elementUiForm">
    <div>
      <el-radio v-model="radio" label="1" @change="sexChange('男')">男</el-radio>
      <el-radio v-model="radio" label="2" @change="sexChange('女')">女</el-radio>
    </div>
    <div style="margin-top: 20px">
      <el-radio-group v-model="radio3" size="small">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京" disabled ></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </div>
    <div>
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <div style="margin: 15px 0;"></div>
      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
      </el-checkbox-group>
    </div>
    <div style="width: 400px">
      <span>您的账号是{{ user.username }}   您的密码是{{user.password}}</span>
      <el-input v-model="user.username" placeholder="请输入账号" prefix-icon="el-icon-user" minlength="6" maxlength="16" show-word-limit></el-input>
      <el-input v-model="user.password" placeholder="请输入密码" show-password suffix-icon="el-icon-bell"></el-input>
    </div>
    <div>
      <el-input-number v-model="num1"  :min="1" :max="10" label="描述文字" controls-position="right" @focus="inputFocus()" @blur="inputBlur()"></el-input-number>
      <el-input-number v-model="num2"  :min="0" :max="100" label="描述文字" :step="10"></el-input-number>
    </div>
    <div>
      <el-select v-model="value" multiple placeholder="请选择">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div>
      <el-cascader
          :options="options1"
          :props="props"
          collapse-tags
          clearable></el-cascader>
    </div>
    <div>
      <el-switch
          style="display: block"
          v-model="value2"
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-text="按月付费"
          inactive-text="按年付费">
      </el-switch>
    </div>
    <div style="width: 300px">
      <template>
        <div class="block">
          <el-slider
              v-model="value3"
              show-input
          :step="10">
          </el-slider>
        </div>
      </template>
    </div>
    <div>
      <el-rate
          v-model="value"
          show-text
          :texts="rates"
          :colors="colors">
      </el-rate>
    </div>
    <div>
      <el-form style="width: 500px" @submit.native.prevent="onSubmit">
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">修改姓名</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
  name: "elementUiForm",
  data() {
    return {
      radio: '1',
      radio3: '上海',
      checkAll: false,
      checkedCities: ['上海', '北京'],
      cities: cityOptions,
      isIndeterminate: true,
      user: {
        username: "",
        password: ""
      },
      num1: 0,
      num2: 0,
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      options1: [{
        value: 1,
        label: '东南',
        children: [{
          value: 2,
          label: '上海',
          children: [
            { value: 3, label: '普陀' },
            { value: 4, label: '黄埔' },
            { value: 5, label: '徐汇' }
          ]
        }, {
          value: 7,
          label: '江苏',
          children: [
            { value: 8, label: '南京' },
            { value: 9, label: '苏州' },
            { value: 10, label: '无锡' }
          ]
        }, {
          value: 12,
          label: '浙江',
          children: [
            { value: 13, label: '杭州' },
            { value: 14, label: '宁波' },
            { value: 15, label: '嘉兴' }
          ]
        }]
      }, {
        value: 17,
        label: '西北',
        children: [{
          value: 18,
          label: '陕西',
          children: [
            { value: 19, label: '西安' },
            { value: 20, label: '延安' }
          ]
        }, {
          value: 21,
          label: '新疆维吾尔族自治区',
          children: [
            { value: 22, label: '乌鲁木齐' },
            { value: 23, label: '克拉玛依' }
          ]
        }]
      }],
      props: { multiple: true },
      value2: true,
      value3: 0,
      rates: ["差劲","一般","还行","不错","绝绝子"],
      colors: ["#D9ECFF","#B3D8FF","#8CC5FF","#66B1FF","#409EFF"],
      form: {
        name: ""
      }
    }
  },
  watch: {
    num(val) {
      console.log(val)
    }

  },
  methods: {
    sexChange(sex) {
      console.log("性别切换了"+sex)
    },
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
    },
    inputFocus() {
      console.log("inputFocus")
    },
    inputBlur() {
      console.log("inputBlur")
    },
    onSubmit() {
      console.log('已提交,您的姓名是:'+this.form.name);
    }
  }
}
</script>

<style scoped>

</style>
