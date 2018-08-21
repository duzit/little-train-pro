<template>
  <section>
    <div>
      <span>姓名：{{name}}</span>
      <span>描述：{{description}}</span>
      <!-- img不能动态绑定src -->
      <img :src="img">
    </div>
  </section>
</template>

<script>
const ballerInfo = require("../../mock/footballerInfo.json");

export default {
  data() {
    return {
      footballerInfo: null,
      name: '',
      description: '',
      img: '',
    }
  },
  mounted() {
    let self = this;

    self.footballerInfo = self.$route.query.info;
    for (let item of ballerInfo.footballerInfo) {
      if (item.name == self.footballerInfo.name) {
        self.name = item.name;
        self.description = item.description;
        self.img = '../../../public/img/' + item.img;
        console.log(self.img, 222)
      }
    }
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>

</style>
