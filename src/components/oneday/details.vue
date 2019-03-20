<template>
  <div class="oneday-detail">
    <div>
      <h3 id="css">{{ '# CSS过渡' }}</h3>
      <div class="item-detail">
        <p class="el-icon-document"><b>{{ ' transition' }}</b></p>
        <p><i>transition-property</i> 指定哪个或哪些css属性用于过渡。只有指定的属性才会在过渡中发生动画。（width、height）</p>
        <p><i>transition-duration</i> 指定过渡的时长。为所有属性指定一个值，或者为每个属性指定不同的值。（0.5s、1s）</p>
        <p><i>transition-timing-function</i> 指定一个函数，指定属性值怎么变化。（ease、linear）</p>
        <p><i>transition-delay</i> 指定延迟，即属性开始变化时与过渡开始发生时之间的时长。</p>
      </div>
      <div class="item-detail">
        <p class="el-icon-document">
          <b>{{ ' transform' }}</b>
          <span>
            {{ ' 向元素应用2D或3D转换。该属性允许我们对元素进行旋转、缩放、移动和倾斜。' }}
          </span>
        </p>
        <p><i>translate()</i> 元素从其当前位置移动，根据给定的left(x坐标)和top(y坐标)位置参数。</p>
        <p><i>rotate()</i> 默认顺时针旋转给定角度，负数时按逆时针。</p>
        <p><i>scale()</i> 元素的尺寸增加或减少，根据给定的宽度(x轴)和高度(y轴)参数。</p>
      </div>
      <div class="item-detail">
        <p class="el-icon-document">
          <b>{{ ' animation' }}</b>
          <span>
            {{ ' 配合@keyframes使用' }}
          </span>
        </p>
      </div>
      <div class="item-detail">
        <p>
          <b>示例：</b>
          <span>{{ '鼠标悬浮变化' }}</span>
        </p>
        <el-row>
          <el-col :span='12'>
            <div class="css-demo-0"></div>
          </el-col>
          <el-col :span='12'>
            <div class="css-demo-1"></div>
          </el-col>
          <el-col :span='12'>
            <div class="css-demo-2">{{ 'translate' }}</div>
          </el-col>
          <el-col :span='12'>
            <div class="css-demo-3">{{ 'rotateY' }}</div>
          </el-col>
          <el-col :span='12'>
            <div class="css-demo-4">{{ 'scale' }}</div>
          </el-col>
          <el-col :span='12'>
            <div class="css-demo-5">{{ 'animation' }}</div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div>
      <h3 id="next-tick">{{ '# Vue.nextTick()' }}</h3>
      <div class="item-detail">
        <p>在下次DOM更新循环结束以后执行延迟回调，在修改数据之后立即使用这个方法，获取更新后的DOM。</p>
        <pre>
          // 修改数据
          vm.msg = 'Hello'
          // DOM还未更新
          Vue.nextTick(() => {
            // DOM更新了
          })
        </pre>
      </div>
    </div>
    <div>
      <h3 id="opacity">{{ '# opacity' }}</h3>
      <div class="item-detail">
        <p>设置div元素的不透明级别</p>
        <div class="css-opacity">{{ 'Opacity ' }}</div>
      </div>
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
    locationHref(href) {
      location.href = href
    }
  },
}
</script>
<style lang="scss" scoped>
.oneday-detail {
  text-align: left;
  margin-bottom: 10px;
  .css-demo-0 {
    width: 100px;
    height: 100px;
    background: #409EFF;
    transition: width 2s;
    -webkit-transition: width 2s;
  }
  .css-demo-0:hover {
    width: 300px
  }
  
  .css-demo-1 {
    width: 100px;
    height: 100px;
    background: #67C23A;
    transition: width 2s, height 2s, background-color 2s, transform 2s;
    -webkit-transition: width 2s, height 2s, background-color 2s, -webkit-transform 2s,
  }
  .css-demo-1:hover {
    width: 150px;
    height: 150px;
    background: #409EFF;
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
  }

  .css-demo-2 {
    width: 100px;
    height: 100px;
    background: #E6A23C;
    transition: width 1.5s, transform 1.5s;
    -webkit-transition: width 1.5s, height 1.5s, -webkit-transform 1.5s;
  }
  .css-demo-2:hover {
    width: 50px;
    height: 50px;
    background: #E6A23C;
    transform: translate(50px, 0)
  }

  .css-demo-3 {
    width: 100px;
    height: 100px;
    background: #409EFF;
    transition: width 1.5s, transform 1.5s;
    -webkit-transition: width 1.5s, height 1.5s, -webkit-transform 1.5s;
  }
  .css-demo-3:hover {
    width: 100px;
    height: 100px;
    background: #E6A23C;
    transform: rotateY(180deg)
  }

  .css-demo-4 {
    width: 100px;
    height: 100px;
    background: #409EFF;
    transition: width 1s, transform 1s;
    -webkit-transition: width 1s, height 1s, -webkit-transform 1s;
  }
  .css-demo-4:hover {
    width: 100px;
    height: 100px;
    background: #E6A23C;
    transform: scale(1.2)
  }

  .css-demo-5 {
    width: 100px;
    height: 100px;
    background: #409EFF;
    animation: anima 3s;
    -webkit-animation: anima 3s;
  }
  @keyframes anima {
    0% {
      background: rebeccapurple;
      transform: scale(0);
    }
    50% {
      background: #E6A23C;
      transform: scale(1.5);
    }
    100% {
      background: #409EFF;
      transform: scale(1);
    }
  }

  .css-opacity {
    width: 60px;
    height: 40px;
    background: #67C23A;
  }
  .css-opacity:hover {
    opacity: 0.5;
  }
}
</style>
