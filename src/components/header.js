import React, {useState, useEffect} from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const Header = () => {
    return (
      <React.Fragment>
      <div className="header">
        <div className="navbar-header">
         <h1 className="title-header">Servant Argentina</h1>
         <FiShoppingCart  className="icon-cart-header"/>
        </div>
      </div>
      </React.Fragment>
    );
};

export default Header;
