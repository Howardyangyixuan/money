import createId from '@/lib/idGenerator';

const localStorageName = 'tagsList';

const tagsListModel: TagListModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageName) || '[]');
    return this.data;
  },
  create(name) {
    const id = createId().toString();
    const names = this.data.map(item => item.name);
    if (names.indexOf(name) >= 0) return 'duplicated';
    this.data.push({id: id, name: name});
    this.save();
    return 'success';
  },
  save() {
    window.localStorage.setItem(localStorageName, JSON.stringify(this.data));
  },
  update(id, name) {
    const idList = this.data.map(item => item.id);
    if (idList.indexOf(id) >= 0) {
      const names = this.data.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        return 'duplicated';
      } else {
        const tag = this.data.filter(item => item.id === id)[0];
        tag.name = name;
        // tag.id = name;
        this.save();
        return 'success';
      }
    } else {
      return 'not found';
    }
  },
  remove(id: string) {
    let idx = -1;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id === id) {
        idx = i;
        break;
      }
    }
    console.log(idx);
    if (idx === -1) return false;
    this.data.splice(idx, 1);
    this.save();
    console.log(this.data);
    return true;
  }
};
export default tagsListModel;

