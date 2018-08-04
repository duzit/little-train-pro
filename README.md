# vue-train

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
## 记录
  - main.js是入口文件，初始化路由也在该文件中。
      new Vue({
        render: h => h(App), // 渲染函数，指向App.vue内容，使用render必须要用$mount挂载。如果使用el，则不用mount。
      }).$mount('#app') // #app指向App.vue中'app'选择器
  - router.js 路由配置文件
      + 安装vue-router, npm install vue-router
      + 引用和使用
          import VueRouter from 'vue-router'
          Vue.use(VueRouter)
      + 挂载目标文件中使用<router-view></router-view>
  - 全局引用element-ui样式
      import 'element-ui/lib/theme-chalk/index.css';
  - eslint配置在package.json中的 eslintConfig 字段或者新建.eslintrc.js文件