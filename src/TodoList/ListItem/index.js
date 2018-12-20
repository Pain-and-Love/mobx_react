import React from 'react';
import PropTypes from 'prop-types';

const Item = props => {
  return (
    (<li>{props.item.done} - {props.item.text}</li>)
  );
};

Item.propTypes = {

};

export default Item;