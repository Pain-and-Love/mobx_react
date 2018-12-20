import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import List from './List';

@observer
class TodoList extends PureComponent {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     value: '',
  //     list: [],
  //   }
  // }

  handleChange = (e) => {
    // this.setState({
    //   value: e.target.value.trim(),
    // });
  }

  handleClick = () => {
    // this.setState((pState) => ({
    //   value: '',
    //   list: pState.list.concat({
    //     text: pState.value,
    //     id: Math.random(),
    //     done: false,
    //   }),
    // }));
  }

  render() {
    const { value, list, unfinishedTodoCount } = this.props.todoList
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
