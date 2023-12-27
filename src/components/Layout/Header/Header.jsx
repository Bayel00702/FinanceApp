import React from 'react';
import {Link} from "react-router-dom";
import {logOutUser} from "../../../redux/reducers/auth";
import {useDispatch} from "react-redux";

const Header = () => {

    const dispatch = useDispatch()

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
                    {
                        JSON.parse(localStorage.getItem('@@remember-rootState'))?.email ?
                            <div className="header__right">
                                <button onClick={() => dispatch(logOutUser())} className="header__right-logOut">Log Out</button>
                            </div>
                             :
                            <div className="header__right">
                                <Link className='header__right-link' to='/login'>Log In</Link>
                                <Link className='header__right-link' to='/register'>Sign In</Link>
                            </div>
                    }

                </nav>
            </div>
        </header>
    );
};

export default Header;