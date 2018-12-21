import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import Item from '../ListItem';

// 装饰默认的render方法
const List = observer(props => {
  return (
    <ul>
      {
        props.list.map(item => <Item key={item.id} item={item}/>)
      }
    </ul>
  );
});

export default List;
