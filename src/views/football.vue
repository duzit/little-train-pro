<template>
  <div>
    <el-tabs v-model="paneValue" type="card" @tab-click="handleTabClick">
      <el-tab-pane label="利物浦" name="liverpool"></el-tab-pane>
      <el-tab-pane label="巴塞罗那" name="barcelona"></el-tab-pane>
    </el-tabs>
    <component :is="currentTabPane"></component>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        paneValue: 'liverpool',
      }
    },
    computed: {
      currentTabPane: function() {
        return this.paneValue;
      },
    },
    mounted() {

    },
    methods: {
      handleTabClick() {

      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
