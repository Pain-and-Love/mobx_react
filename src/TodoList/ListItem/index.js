import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

// 装饰默认的render方法
const Item = observer(props => {
  return (
    (<li><input type="checkbox" checked={props.item.done} onChange={props.item.toggleDone}/>{props.item.text}</li>)
  );
});

Item.propTypes = {

};

export default Item;