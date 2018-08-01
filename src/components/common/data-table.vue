<template>
  <el-table :data="dataTable" border stripe style="width:100%;">
    <el-table-column v-for="(column, index) of columns" :key="index" v-bind="column">

    </el-table-column>
    </el-table>
</template>

<script>
const relation = require("../../mock/relation.json");

export default {
  props: {
    columnsType: { type: String },
    dataTable: { type: Array },
    columns: {
      type: Array,
      default() {
        if (this.columnsType == 'football') {
          return relation.football_table;
        }
      }
    },
  },
  data() {
    return {

    }
  },
  mounted() {
    
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>

</style>
