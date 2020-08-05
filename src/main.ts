import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import Nav from '@/views/Nav.vue';
import Layout from '@/views/Layout.vue';
import Icon from '@/views/Icon.vue';
import store2 from '@/models/store';
import store from './store/index'

Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Icon', Icon);
Vue.component('Layout', Layout);

store2.tagsListModel.fetch();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
