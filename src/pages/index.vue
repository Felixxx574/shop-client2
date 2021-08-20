<template>
  <div id="index">
    <navigation></navigation>
    <indexContent></indexContent>
  </div>
</template>

<script>
export default {
  name: "index",
  components: {
    navigation: () => import('@/components/navigation'),
    indexContent: () => import('@/views/indexContent')
  },
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
