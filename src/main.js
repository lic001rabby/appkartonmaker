import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import './assets/scss/element-variables.scss';
import Papa from 'papaparse';
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Papa);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
