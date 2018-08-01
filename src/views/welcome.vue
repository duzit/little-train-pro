<template>
  <section>
    <div class="welcome-header">
      <header>
        <h1>{{title}}</h1>
      </header>
    </div>
    <div class="welcome-sider">
      <!-- el-menu要有router标识 el-menu-item中的route才有效 -->
      <el-menu router background-color="#DCDFE6">
        <el-menu-item index="1" :route="{ path: word}">
          <img src="../assets/icon/word.png">
          <span slot="title"> 文字</span>
        </el-menu-item>
        <el-menu-item index="2" :route="{ path: football}">
          <img src="../assets/icon/football.png">
          <span slot="title"> 足球</span>
        </el-menu-item>
        <el-menu-item index="3" :route="{ path: movie}">
          <img src="../assets/icon/move.png">
          <span slot="title"> 电影</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="welcome-main">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
  import { getRandomInt } from '../utils/random';
  const relation = require("../mock/relation.json");

  export default {
    data() {
      return {
        word: 'word',
        movie: 'movie',
        football: 'football',
        title: '',
        randomNum: Number,
      }
    },
    mounted() {
      let self = this;

      // 随机展示title
      self.randomNum = getRandomInt(1, 10);
      self.title = relation.title_words[self.randomNum].title;
    },
    methods: {

    },
  }
</script>

<style lang="scss" scoped>
.welcome-header {
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  border: 1px solid #409EFF;
  background-color: #DCDFE6;
}
.welcome-sider {
  position: absolute;
  width: 200px;
  top: 88px;
  bottom: 8px;
  box-sizing: border-box;
  // border: 1px solid #409EFF;
  background-color: #DCDFE6;
  // overflow设置很重要 防止页面挤压后上下拉出现空白
  overflow-x: hidden;
  overflow-y: auto;
}
.welcome-main {
  position: absolute;
  top: 88px;
  left: 207px;
  right: 8px;
  bottom: 8px;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  // border: 1px solid #409EFF;
}
span {
  font-family:'Microsoft YaHei';
  margin-right: 20px;
}
</style>

