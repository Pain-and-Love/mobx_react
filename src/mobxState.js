import { observable, computed, configure } from 'mobx';

configure({ enforceActions: true });

class TodoListState {
  @observable list = [];
  @observable value = '';
  @computed get unfinishedTodoCount() {
    return this.todos.filter(list => !list.done).length;
  }
}

export default TodoListState;
