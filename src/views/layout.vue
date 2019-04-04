<template>
  <div class="lay-out">
    <home-header></home-header>
    <router-view></router-view>
  </div>
</template>

<script>
import homeHeader from '@/components/homeHeader.vue'

export default {
  name: 'app',
  components: {
    homeHeader
  }
}
</script>

<style>
.lay-out {
  height: 100%;
}
</style>
