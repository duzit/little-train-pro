<template>
  <div class="home-header">
    <el-button
      class="home-button"
      type="text"
      @click="homeClick"
    >
      <span class="home-span">
        {{ "Home Road" }}
      </span>
    </el-button>
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
      homeClick() {
        this.$router.push("/")
      },
    }
  }
</script>
<style lang="scss" scoped>
.home-header {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #C0C4CC;
  .home-button {
    float: left;
    padding-left: 20px;
    margin-top: 5px;
  }
  .home-span {
    font-weight: 600;
    font-size: 20px;
  }
}
</style>
