<template>
  <div>
    <data-table v-bind="tableData"></data-table>
  </div>
</template>

<script>
const relation = require("../../mock/relation.json");
export default {
  data() {
    return {
      tableData: {
        columnsType: 'football',
        dataTable: [],
      },
    }
  },
  mounted() {
    let self = this;

    self.tableData.dataTable = relation.footballer_data_liverpool;
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>

</style>
