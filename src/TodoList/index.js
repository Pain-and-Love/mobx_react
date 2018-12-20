import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import List from './List';

class TodoList extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      list: [],
    }
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value.trim(),
    });
  }

  handleClick = () => {
    this.setState((pState) => ({
      value: '',
      list: pState.list.concat({
        text: pState.value,
        id: Math.random(),
        done: false,
      }),
    }));
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>确认</button>
        <List list={this.state.list} />
      </div>
    );
  }
}

TodoList.propTypes = {};

export default TodoList;