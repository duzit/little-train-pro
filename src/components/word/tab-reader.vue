<template>
  <div>
    <div>读者</div>
    <div class="flex-train-main">
      <div class="flex-train-item">1</div>
      <div class="flex-train-item">2</div>
      <div class="flex-train-item">3</div>
      <div class="flex-train-item">4</div>
      <!-- flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。 -->
      <div class="flex-train-item" style="flex-shrink: 0;">5</div>
      <!-- align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性 -->
      <div class="flex-train-item" style="align-self: flex-end;">6</div>
      <div class="flex-train-item">7</div>
      <div class="flex-train-item">8</div>
      <div class="flex-train-item">9</div>
      <div class="flex-train-item">10</div>
      <div class="flex-train-item" style="flex-grow: 1;">11</div>
      <!-- order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。 -->
      <div class="flex-train-item" style="order: -1;">12</div>
    </div>
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

  },
}
</script>

<style lang="scss" scoped>
.flex-train-main {
  display: flex;
  // width: 100%; // 不设置宽度100%，否则右边界会看不到。
  height: 300px;
  border: 1px solid #E6A23C;
  flex-flow: row nowrap;
  justify-content: space-around;
  .flex-train-item {
    width: 200px;
    height: 100px;
    margin: auto; // item居中展示
    border: 1px solid gray;
    background-color: #E6A23C;
    box-sizing: border-box;
    // 设置文字居中
    line-height: 100px;
  }
}

</style>
