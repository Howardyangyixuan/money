import clone from '@/models/clone';

const localStorageName = 'recordList';
const recodeListModel = {
  data: [] as RecordItem[],
  create(record: RecordItem) {
    const recordCopy: RecordItem = clone(record);
    recordCopy.createdAt = new Date();
    this.data.push(recordCopy);
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