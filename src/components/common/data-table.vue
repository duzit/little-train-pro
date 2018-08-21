<template>
  <el-table :data="dataTable" border stripe style="width:100%;">
    <el-table-column v-for="(column, index) of columns" :key="index" v-bind="column">

    </el-table-column>
    <!-- 表格中操作栏 -->
    <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <el-button v-for="(item, index) of options" :key="index" @click="$emit(item.callback, scope.row)" type="primary" size="small">
          {{item.name}}
        </el-button>
      </template>
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
    options: {type: Array},
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
