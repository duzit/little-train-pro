<template>
  <div class="h100 oneday">
    <el-row :gutter="18">
      <el-col :span="6">
        <view-side></view-side>
      </el-col>
      <el-col :span="18">
        <view-main></view-main>
      </el-col>
    </el-row>
    
    
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    mounted() {

    },
    methods: {

    }
  }
</script>
<style lang="scss" scoped>
.oneday {
  .el-row,
  .el-col {
    height: 100%;
  }
}
</style>
