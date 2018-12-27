import Vue from 'vue'
import VueRouter from 'vue-router'

import main from '../views/main'
import welcome from '../views/welcome'
import word from '../views/word'
import football from '../views/football'
import movie from '../views/movie'

// oneday
import oneday from '../views/oneday/oneday'

// 球员详细信息
import footballerInfo from '../components/football/footballerInfo'

// 路由配置
const routes = [
  {
    path: '/', // 默认路径'/'
    component: main,
  },
  {
    path: '/welcome', // path要加'/'
    component: welcome, // 组件welcome包含子组件 在main中展示
    children: [
      {
        path: '/word',
        component: word,
      },
      {
        path: '/football',
        component: football,
      },
      {
        path: '/movie',
        component: movie,
      },
      {
        path: '/footballerInfo',
        component: footballerInfo,
      },
    ],
  },
  {
    path: '/oneday',
    component: oneday,
  },
];

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

const rejectList = ['/compositeScores'];

router.beforeEach((to, from, next) => {
  if (rejectList.includes(to.path)) {
    return next(false);
  }
  return next();
})

export default router