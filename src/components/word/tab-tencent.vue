<template>
  <div>
    <div>VueJS</div>
    <div class="vuejs-main">
      <el-button @click="bShow = !bShow" type="primary" size="small">CSS过度</el-button>
      <transition name="fade">
        <p v-if="bShow">Hello</p>
      </transition>
      <el-button @click="bAnimation = !bAnimation" type="primary" size="small">CSS动画</el-button>
      <transition name="bounce">
        <p v-if="bAnimation">Hello, how are you.</p>
      </transition>
      <transition mode="out-in" name="fade">
        <el-button @click="swtich = swtich == 'off' ? 'on' : 'off'" size="small">{{swtich}}</el-button>
      </transition>
      <div class="list-demo">
        <el-button @click="add">add</el-button>
        <el-button @click="remove">remove</el-button>
        <transition-group name="list" tag="p">
          <span v-for="item of items" :key="item" class="list-item">
            {{item}}
          </span>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bShow: true,
      bAnimation: true,
      swtich: 'off',
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
    }
  },
  mounted() {

  },
  methods: {
    randomIndex() {
      return Math.floor(Math.random * this.items.length);
    },
    add() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove() {
      this.items.splice(this.randomIndex(), 1);
    },
  },
}
</script>

<style lang="scss" scoped>
.vuejs-main {
  height: 400px;
  border: 1px solid rebeccapurple;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
