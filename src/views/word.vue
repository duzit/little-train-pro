<template>
  <div>
    <el-tabs v-model="paneValue" type="card" @tab-click="handleTabClick">
      <el-tab-pane label="读者" name="reader"></el-tab-pane>
      <el-tab-pane label="故事会" name="story"></el-tab-pane>
      <el-tab-pane label="公众号" name="tencent"></el-tab-pane>
    </el-tabs>
    <!-- 这里使用局部组件测试可用性 将currentTabPane返回值注册为全局组件可实现不同组件的切换 Vue.component() -->
    <component :is="currentTabPane"></component>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        paneValue: 'reader',
      }
    },
    computed: {
      currentTabPane: function() {
        return 'tab-' + this.paneValue;
      },
    },
    mounted() {
      
    },
    methods: {
      // tab点击事件处理
      handleTabClick() {
        
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
