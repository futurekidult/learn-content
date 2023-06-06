import { createStore } from 'vuex';
//引入子模块
import helloworld from './hello-world/index.js';
import helloworldSub from './hello-world-sub/index.js';

const store = createStore({
  modules: {
    helloworld,
    helloworldSub
  },
  state() {
    return {};
  },
  mutations: {},
  actions: {
    //异步操作,执行axios请求
    //......
  },
  getters: {}
});

export default store;
