<template>
  <section>
    <div class="main">
      <div class="bg">
        <h1>{{msg}}</h1>
        <el-button type="text" @click="more">了解更多</el-button>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Welcome',
      }
    },
    mounted() {

    },
    methods: {
      // 了解更多
      more() {
        this.$router.push({ path: 'welcome' });
      },
    },
  }
</script>

<style lang="less" scoped>
h1 {
  font-size: 30px;
}
.main {
  padding: 0;
  margin: 0;
  .bg {
    /* 宽高设置与否不影响 */
    width: 100%;
    height: 927px;
    // position: absolute; // 绝对定位后 原本相对于父元素的宽高将变为相对于html或者body
    /* 上下左右都需要设置为0 去除横向纵向滑动条 */
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    /* 溢出隐藏 */
    overflow-x: hidden;
    overflow-y: auto;
    /* z-index: 0; */
    background-image: url('../assets/image/main.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
}
</style>
