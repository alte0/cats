import React from 'react';
import './form.scss';
import PropTypes from 'prop-types';

export const Form = (props) => {
  const { title } = props;

  return (
    <form action="/" method="post" className="form">
      <h1 className="form__title">{title}</h1>
      {
        props.children
      }
    </form>
  )
};

Form.defaultProps = {
  title: ''
};

Form.propTypes = {
  title: PropTypes.string
};