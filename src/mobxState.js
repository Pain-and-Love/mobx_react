import { observable, computed, configure, action } from 'mobx';

configure({ enforceActions: 'observed' });

class TodoItem {
  @observable text;
  @observable done;

  constructor(text = '') {
    this.text = text;
    this.done = false;
    this.id = Math.random();
  }

  @action.bound
  changeText(value){
    this.text = value.trim();
  }

  @action.bound
  toggleDone(){
    this.done = !this.done;
  }
}

class TodoListState {
  @observable list;
  @observable value;

  constructor() {
    this.list = [];
    this.value = '';
  }

  @computed get unfinishedTodoCount() {
    return this.list.filter(item => !item.done).length;
  }

  @action.bound
  add() {
    this.list.push(new TodoItem(this.value))
    this.value = '';
  }

  @action.bound
  changeValue(value) {
    this.value = value.trim();
  }
}

export default TodoListState;
