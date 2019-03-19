<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <home-header></home-header>
    <router-view></router-view>
  </div>
</template>

<script>
import homeHeader from './components/oneday/homeHeader.vue'

export default {
  name: 'app',
  components: {
    homeHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
