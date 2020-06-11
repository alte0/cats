import React from 'react';
import './main.scss';
import PropTypes from 'prop-types';

export const Main = (props) => {
  const { middle } = props;
  
  return (
    <main className={`main-content ${middle ? 'main-content_middle' : '' }`}>
      {
        props.children
      }
    </main>
  )
};

Main.defaultProps = {
  middle: false
};

Main.propTypes = {
  middle: PropTypes.bool
};