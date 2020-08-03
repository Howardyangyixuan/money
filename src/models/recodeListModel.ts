const localStorageName = 'recordList';
const recodeListModel = {
  data: [] as RecordItem[],
  clone(data: RecordItem[] | RecordItem) {
    return JSON.parse(JSON.stringify(data));
  },
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageName) || '[]');
    return this.data;
  },
  save() {
    window.localStorage.setItem(localStorageName, JSON.stringify(this.data));
  }
};

export default recodeListModel;