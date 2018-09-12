<template>
  <div class="football-welcome">
    <span style="font-size: 30px;">欢迎来到世界第一足球联赛<span style="color: #409EFF;"> FA Premier League</span></span>
    <div class="football-more">
      <el-button class="more-button" type="text">新闻</el-button>
      <el-button class="more-button" type="text">赛程</el-button>
      <el-button class="more-button" type="text">数据</el-button>
      <el-button class="more-button" type="text">My Favorite</el-button>
    </div>
    <div class="football-img">
      <img src="../assets/image/salah.jpg">
      <img src="../assets/image/mane.jpg">
      <img src="../assets/image/team.jpg">
      <img src="../assets/image/akun.jpg">
    </div>
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
.football-welcome {
  width: 100%;
  height: 100%;
  background-image: url('../assets/image/football.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.football-more {
  margin-top: 20px;

  display: flex;
  .more-button {
    margin-left: 20px;
    text-decoration-line: underline;
  }
}
.football-img {
  margin-top: 20px;
  display: flex;
  height: 300px;
  justify-content: space-around;
  img {
    width: 400px;

  }
}
</style>
