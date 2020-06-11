import React from 'react';
import './loading.scss';
import logo from '../../images/logo.svg';

export const Loading = () => (
  <div className="loading">
    <img src={logo} className="loading__logo" alt="logo" />
  </div>
);
