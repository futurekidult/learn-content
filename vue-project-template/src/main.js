import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store/index.js';
import BaseChoose from './components/common/base-choose.vue';
import GlobalData from './components/common/global-data.vue';
import BaseConfirm from './components/common/base-confirm-dialog.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('BaseChoose', BaseChoose);
app.component('BaseConfirm', BaseConfirm);

app.config.globalProperties.$global = GlobalData;

let localVersion = '';
if (!localVersion) {
  localStorage.removeItem('logistics-column');
}

app.mount('#app');
