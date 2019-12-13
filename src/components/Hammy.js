import React from 'react';
import { slide as Menu } from 'react-burger-menu'

export default props => {
  return (
    // Pass on our props
    <Menu disableAutoFocus>
      <a className="menu-item" href="#about">
        About
      </a>

      <a className="menu-item" href="/#music">
        Music
      </a>

      <a className="menu-item" href="#tour">
        Tour
      </a>

      <a className="menu-item" href="#contact">
        Contact
      </a>
    </Menu>
  );
};