import React, { PureComponent } from 'react';
import TodoList from './TodoList';
import TodoListState from './mobxState';

class App extends PureComponent {
  render() {
    return (
      <TodoList todoList={new TodoListState()} />
    );
  }
}

export default App;
