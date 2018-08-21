<template>
  <div>
    <data-table v-bind="tableData" @more="moreInfo"></data-table>
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
        options: [
          {name: '更多', callback: 'more'},
        ],
      },
    }
  },
  mounted() {
    let self = this;

    self.tableData.dataTable = relation.footballer_data_liverpool;
  },
  methods: {
    // 更多
    moreInfo(row) {
      this.$router.push({ path: "footballerInfo", query: { info: row } });
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
