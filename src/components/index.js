import Vue from 'vue';
import tabReader from './word/tab-reader';
import tabStory from './word/tab-story';
import tabTencent from './word/tab-tencent';
import Liverpool from './football/liverpool';
import Barcelona from './football/barcelona';
import dataTable from './common/data-table';
import viewSide from './oneday/view-side'
import viewMain from './oneday/view-main'

// 注册全局组件 该文件index.js需要在main.js中引用
Vue.component('tab-reader', tabReader);
Vue.component('tab-story', tabStory);
Vue.component('tab-tencent', tabTencent);
Vue.component('liverpool', Liverpool);
Vue.component('barcelona', Barcelona);
Vue.component('data-table', dataTable);
Vue.component('view-side', viewSide);
Vue.component('view-main', viewMain);