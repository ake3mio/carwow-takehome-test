import React from 'react';
import Logo from "../Logo";
import './index.scss';

const Header = () => {
    return (
        <div className="Header">
            <a href="/">
                <Logo/>
            </a>
        </div>
    );
};

export default Header;
