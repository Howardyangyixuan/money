const localStorageName = 'recordList';
const recodeListModel = {
  clone(data: RecordItem[] | RecordItem) {
    return JSON.parse(JSON.stringify(data));
  },
  fetch() {
    // const record: RecordItem[] = JSON.parse(window.localStorage.getItem(localStorageName) || '[]');
    // return record
    return JSON.parse(window.localStorage.getItem(localStorageName) || '[]') as RecordItem[];
  },
  save(data: RecordItem[]) {
    window.localStorage.setItem('recordList', JSON.stringify(data));
  }
};

export default recodeListModel;