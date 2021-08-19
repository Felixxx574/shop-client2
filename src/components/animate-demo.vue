<template>
  <div id="animate-demo">
<!--    <button v-on:click="show = !show">-->
<!--      Toggle-->
<!--    </button>-->
<!--    //在vue官方文档中自定义类名demo中使用的animate版本较低, 那我们现在应该是使用的animate动画类名是 animate__animated-->
<!--    <transition-->
<!--        name="hello"-->
<!--        enter-active-class="animate__animated animate__fadeInUp"-->
<!--        leave-active-class="animate__animated animate__fadeOutUp">-->
<!--      <p v-if="show">hello</p>-->
<!--    </transition>-->

<!--    //1.transition-group应该加上tag属性用来标记将要渲染的子标签, 默认为span-->
<!--    //2.transition-group包裹起来的渲染目标标签 应该加上class, 它的值就是transition-group的 name + 'item'-->
<!--    //3.transition-group包裹起来的渲染目标标签 的:key不应该使用index, 规范的做法是给每一个item对象都加上id字段-->
    <div id="list-demo" class="demo">
      <button v-on:click="add">Add</button>
      <button v-on:click="remove">Remove</button>
      <transition-group name="list" tag="p">
      <span v-for="item in items" v-bind:key="item" class="list-item">
        {{ item }}
      </span>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "animate-demo",
  data() {
    return{
      items: [1,2,3,4,5,6,7,8,9],
      nextNum: 10
    }
  },
  methods: {
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length)
    },
    add: function () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove: function () {
      this.items.splice(this.randomIndex(), 1)
    },
  }
}
</script>

<style scoped>
/*enter-active表示显示的过程,leave-active表示隐藏的过程*/
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
/*enter表示显示, leave-to表示隐藏*/
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to
  /* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
