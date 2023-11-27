import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <nav className="header__nav">
                    <div className="header__left">
                        BTC
                    </div>
                    <div className="header__center">
                        <Link className='header__center-link' to=''>All product</Link>
                        <Link className='header__center-link' to=''>Popular product</Link>
                    </div>
                    <div className="header__right">
                        <Link className='header__right-link' to='/login'>Log In</Link>
                        <Link className='header__right-link' to='/register'>Sign In</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;