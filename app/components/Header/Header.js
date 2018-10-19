import React from 'react';
import Logo from './images/abihome-logo-header.svg';
import './style.scss';

const Header = () => (
  <div className="header">
    <img src={Logo} alt="ABIHOME" />
    <h2>ABIHOME - React Webpage</h2>
  </div>
);

export default Header;
