import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import createId from '@/lib/idGenerator';

Vue.use(Vuex);
const localStorageNameRecordList = 'recordList';
const localStorageNameTagList = 'tagsList';


const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    tagList: [] as Tag[],
  },
  mutations: {
    createRecord(state, record: RecordItem) {
      const recordCopy: RecordItem = clone(record);
      recordCopy.createdAt = new Date().toISOString();
      state.recordList.push(recordCopy);
      store.commit('saveRecord');
    },
    fetchRecord(state) {
      state.recordList = JSON.parse(window.localStorage.getItem(localStorageNameRecordList) || '[]');
      return state.recordList;
    },
    saveRecord(state) {
      window.localStorage.setItem(localStorageNameRecordList, JSON.stringify(state.recordList));
    },
    fetchTags(state) {
      state.tagList = JSON.parse(window.localStorage.getItem(localStorageNameTagList) || '[]');
      return state.tagList;
    },
    createTag(state, name: string) {
      const id = createId().toString();
      const names = state.tagList.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        window.alert('标签名已存在，无需重复创建');
        return 'duplicated';
      }
      state.tagList.push({id: id, name: name});
      store.commit('saveTag');
      window.alert('添加成功');
      return 'success';
    },
    saveTag(state) {
      window.localStorage.setItem(localStorageNameTagList, JSON.stringify(state.tagList));
    },
    updateTag(state, {id, name}) {
      const idList = state.tagList.map(item => item.id);
      if (idList.indexOf(id) >= 0) {
        const names = state.tagList.map(item => item.name);
        if (names.indexOf(name) >= 0) {
          window.alert('标签名已存在，无需重复创建');
        } else {
          const tag = state.tagList.filter(item => item.id === id)[0];
          tag.name = name;
          store.commit('saveTag');
        }
      } else {
        return 'not found';
      }
    },
    removeTag(state, id: string) {
      let idx = -1;
      for (let i = 0; i < state.tagList.length; i++) {
        if (state.tagList[i].id === id) {
          idx = i;
          break;
        }
      }
      if (idx === -1) {
        window.alert('删除失败');
      }
      state.tagList.splice(idx, 1);
      store.commit('saveTag');
    }

  },
  actions: {},
  modules: {}
});
store.commit('fetchRecord');
store.commit('fetchTags');
export default store;