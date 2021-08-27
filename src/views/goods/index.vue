<template>
  <div id="goodsIndex">
<!--    <span>商品id为:{{id}}</span>-->
    <el-row>
      <el-col :span="10">
        <el-image :src="checkedImgUrl" style="height: 500px;width: 500px" :previewSrcList="previewSrcList"></el-image>
        <ul style="width: 500px">
          <li v-for="(item,index) in imgUl" :key="index" class="img_li" :class="{img_li_checked: item.checked}" @click="checkImg(index)">
            <el-image :src="item.url" style="width: 50px;height: 50px"></el-image>
          </li>
        </ul>
      </el-col>
      <el-col :span="14">

      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "goodsIndex",
  props: ["id"],
  components: {},
  data() {
    return {
      activeIndex: "1",
      goodsDetail: {},
      checkedImgUrl: ""
    }
  },
  computed:{
    previewSrcList(){
      let previewSrcList = []
      this.goodsDetail.colorList.forEach((item) => {
        if(item.checked)
          previewSrcList = item.imgUrlList
      })
      return previewSrcList
    },
    imgUl() {
      let imgUl = []
      this.goodsDetail.colorList.forEach((item) => {
        if (item.checked) {
          for (let i = 0; i < item.imgUrlList.length; i++) {
            let img = {url: item.imgUrlList[i], checked: false}
            if(i==0)
              img.checked = true
            imgUl.push(img)
          }
        }
      })
      return imgUl
    }
  },
  methods: {
    toDetail() {
      this.$router.push({path: "/goods/:id/detail"})
    },
    toSpec() {
      this.$router.push({path: "/goods/:id/spec"})
    },
    toService() {
      this.$router.push({path: "/goods/:id/service"})
    },
    toComments() {
      this.$router.push({path: "/goods/:id/comments"})
    },
    checkImg(index) {
      console.log(index)
      this.imgUl.forEach((item) => {
        item.checked = false
      })
      this.imgUl.forEach((item,index1) => {
        if(index1 == index){
          item.checked = true
          //不写这句，VUE实例不会跟着变化，原因未知
          this.checkedImgUrl = item.url
        }
      })
    }
  },
  //created在DOM节点
  created() {
    let goodsDetail = {
      id: "123456",
      name: "Apple iPhone 12 (A2404) 256GB 蓝色 支持移动联通电信5G",
      price: 7399.00,
      discount: 6999.00,
      couponList: [],
      wight: 0.368,
      colorList: [
        {
          color: "黑色",
          imgUrlList: [
            "https://img12.360buyimg.com/n1/s450x450_jfs/t1/176857/9/19739/153104/611cd418Ea16567cb/10062b43c154d915.jpg",
            "https://img12.360buyimg.com/n1/s450x450_jfs/t1/148365/35/10544/41607/5f8617e9E8f9c9c20/d2d1b5acde7afb6d.jpg",
            "https://img12.360buyimg.com/n1/s450x450_jfs/t1/155118/2/2200/90492/5f8617ecEa3a5df3a/d21ac63e3980e303.jpg",
            "https://img12.360buyimg.com/n1/s450x450_jfs/t1/154268/23/2067/56921/5f8617f0E7b0d7eaa/5bed893881d9ddea.jpg",
            "https://img12.360buyimg.com/n1/s450x450_jfs/t1/143793/18/10733/65543/5f8617fbEcd2d418d/586ce1ddaa802373.jpg",
            "https://img12.360buyimg.com/n1/s450x450_jfs/t1/176423/9/5663/314754/607f988bEe51391a5/353fb73d54982b7e.jpg",
            "https://img12.360buyimg.com/n1/s450x450_jfs/t1/123480/9/14911/82376/5f8617ffEcf0c9501/f35f5aea6936e109.jpg",
          ]
        },
        {
          color: "白色",
          imgUrlList: [
            "https://img12.360buyimg.com/n5/s54x54_jfs/t1/176857/9/19739/153104/611cd418Ea16567cb/10062b43c154d915.jpg",
            "https://img12.360buyimg.com/n5/s54x54_jfs/t1/148365/35/10544/41607/5f8617e9E8f9c9c20/d2d1b5acde7afb6d.jpg",
            "https://img12.360buyimg.com/n5/s54x54_jfs/t1/155118/2/2200/90492/5f8617ecEa3a5df3a/d21ac63e3980e303.jpg",
            "https://img12.360buyimg.com/n5/s54x54_jfs/t1/154268/23/2067/56921/5f8617f0E7b0d7eaa/5bed893881d9ddea.jpg",
            "https://img12.360buyimg.com/n5/s54x54_jfs/t1/143793/18/10733/65543/5f8617fbEcd2d418d/586ce1ddaa802373.jpg",
            "https://img12.360buyimg.com/n5/s54x54_jfs/t1/176423/9/5663/314754/607f988bEe51391a5/353fb73d54982b7e.jpg",
            "https://img12.360buyimg.com/n5/s54x54_jfs/t1/123480/9/14911/82376/5f8617ffEcf0c9501/f35f5aea6936e109.jpg",
          ]
        },
        {
          color: "蓝色",
          imgUrlList: [
            "https://img12.360buyimg.com/n5/s54x54_jfs/t1/176857/9/19739/153104/611cd418Ea16567cb/10062b43c154d915.jpg",
            "https://img12.360buyimg.com/n5/s54x54_jfs/t1/148365/35/10544/41607/5f8617e9E8f9c9c20/d2d1b5acde7afb6d.jpg",
            "https://img12.360buyimg.com/n5/s54x54_jfs/t1/155118/2/2200/90492/5f8617ecEa3a5df3a/d21ac63e3980e303.jpg",
            "https://img12.360buyimg.com/n5/s54x54_jfs/t1/154268/23/2067/56921/5f8617f0E7b0d7eaa/5bed893881d9ddea.jpg",
            "https://img12.360buyimg.com/n5/s54x54_jfs/t1/143793/18/10733/65543/5f8617fbEcd2d418d/586ce1ddaa802373.jpg",
            "https://img12.360buyimg.com/n5/s54x54_jfs/t1/176423/9/5663/314754/607f988bEe51391a5/353fb73d54982b7e.jpg",
            "https://img12.360buyimg.com/n5/s54x54_jfs/t1/123480/9/14911/82376/5f8617ffEcf0c9501/f35f5aea6936e109.jpg",
          ]
        },
      ],
      RAMList: ["64GB","128GB","256GB"],
      type: ["公开版","AirPods套装","快充套装","官方标配"],
      setList: ["优惠套装1","优惠套装2","优惠套装3","优惠套装4"],
      serviceList: ["换休无忧月付版","换休无忧年付版","原厂电池换新","碎屏保"],
    }
    for (let i = 0; i < goodsDetail.colorList.length; i++) {
      i == 0 ? goodsDetail.colorList[i] = Object.assign(goodsDetail.colorList[i],{checked:true})
          : goodsDetail.colorList[i] = Object.assign(goodsDetail.colorList[i],{checked:false})
    }
    this.goodsDetail = goodsDetail
    this.checkedImgUrl = this.imgUl[0].url
  }
}
</script>

<style scoped>
.img_li{
  list-style-type: none;
  float: left;
  padding: 5px;
}
.img_li_not_checked{
  border: 2px solid #ffffff;
}
.img_li_checked{
  border: 2px solid #F56C6C;
}
</style>
