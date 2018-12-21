import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import List from './List';

@inject('todoList')
@observer
class TodoList extends Component {
  handleChange = (e) => {
    const { changeValue } = this.props.todoList;
    changeValue(e.target.value);
  }

  handleClick = () => {
    const { todoList: { add, value } } = this.props;
    if(!value.trim()) return;
    add();
  }

  render() {
    const { list, unfinishedTodoCount, value } = this.props.todoList
    return (
      <div>
        <input type="text" value={value} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>确认</button>
        <List list={list} />
        <div>剩下: {unfinishedTodoCount}个</div>
      </div>
    );
  }
}

TodoList.propTypes = {};

export default TodoList;
