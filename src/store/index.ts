import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';

Vue.use(Vuex);
const localStorageName = 'recordList';
const store = new Vuex.Store({
  state: {
    data: [] as RecordItem[]
  },
  mutations: {
    create(state, record: RecordItem) {
      const recordCopy: RecordItem = clone(record);
      recordCopy.createdAt = new Date();
      state.data.push(recordCopy);
      store.commit('save');
    },
    fetch(state) {
      state.data = JSON.parse(window.localStorage.getItem(localStorageName) || '[]');
      return state.data;
    },
    save(state) {
      window.localStorage.setItem(localStorageName, JSON.stringify(state.data));
    }
  },
  actions: {},
  modules: {}
});
store.commit('fetch');
export default store;