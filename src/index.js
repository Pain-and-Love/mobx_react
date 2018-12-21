import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'
import Store from './mobxState';
import App from './App';

ReactDOM.render(
  <Provider
    todoList={new Store()}
  >
    <App />
  </Provider>
  , document.getElementById('root'));
