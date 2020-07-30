const model = {
  fetch(){
    return JSON.parse(window.localStorage.getItem('recordList') || '[]');
  },
  save(){
    window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
  }
}
export default model