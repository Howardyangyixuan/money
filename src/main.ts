import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import Nav from '@/views/Nav.vue';
import Layout from '@/views/Layout.vue';
import Icon from '@/views/Icon.vue';
import store from '@/models/store';

Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Icon', Icon);
Vue.component('Layout', Layout);

store.tagsListModel.fetch();
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
