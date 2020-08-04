import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/views/Nav.vue';
import Layout from '@/views/Layout.vue';
import Icon from '@/views/Icon.vue';
import tagsListModel from '@/models/tagListModel';

Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Icon', Icon);
Vue.component('Layout', Layout);

window.tagList = tagsListModel.fetch();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
