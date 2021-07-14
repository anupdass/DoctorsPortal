import React from 'react';

import Navbar from '../Navbar/Navbar';
import Headermain from '../Headermain/Headermain';
import './Header.css';
import Businessinfo from '../Businessinfo/Businessinfo';

const Header = () => {
    return (
        <div className="header-container container">
            <Navbar></Navbar>
            <Headermain></Headermain>
            <Businessinfo></Businessinfo>
        </div>
    );
};

export default Header;