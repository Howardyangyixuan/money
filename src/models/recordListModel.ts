import clone from '@/lib/clone';

const localStorageName = 'recordList';
const recordListModel = {
  data: [] as RecordItem[],
  createTag(record: RecordItem) {
    const recordCopy: RecordItem = clone(record);
    recordCopy.createdAt = new Date().toISOString();
    this.data.push(recordCopy);
    this.saveTag();
  },
  fetchTags() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageName) || '[]');
    return this.data;
  },
  saveTag() {
    window.localStorage.setItem(localStorageName, JSON.stringify(this.data));
  }
};
recordListModel.fetchTags();
export default recordListModel;