import React from 'react';
import './list.scss';
import PropTypes from 'prop-types';

export const List = (props) => {
  const { classNameList, children } = props;

  return (
    <ul className={classNameList}>
      { children }
    </ul>
  )
};

List.propTypes = {
  classNameList: PropTypes.string,
  children: PropTypes.array.isRequired
};