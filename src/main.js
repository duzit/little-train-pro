import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import ElementUI from 'element-ui';
// 引用element-ui样式
import 'element-ui/lib/theme-chalk/index.css';
// 引用注册全局组件的文件
import './components/index'; 

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
