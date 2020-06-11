import React from 'react';
import './list-item.scss';
import PropTypes from 'prop-types';

export const ListItem = (props) => {
  const { classNameLi, children } = props;

  return (
    <li className={`${classNameLi}`}>
      {children}
    </li>
  )
};

ListItem.propTypes = {
  classNameLi: PropTypes.string,
  children: PropTypes.element.isRequired
};