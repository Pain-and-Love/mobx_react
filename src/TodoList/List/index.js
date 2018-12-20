import React from 'react';
import PropTypes from 'prop-types';
import Item from '../ListItem';

const List = props => {
  return (
    <ul>
      {
        props.list.map(item => <Item key={item.id} item={item}/>)
      }
    </ul>
  );
};

export default List;
