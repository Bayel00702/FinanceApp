import React from 'react';
import {Link} from "react-router-dom";
import {logOutUser} from "../../../redux/reducers/auth";
import {useDispatch} from "react-redux";
import userIcon from '../../../assets/usericon.png'
import {AiOutlineUser} from 'react-icons/ai';

const Header = () => {

    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem("@@remember-rootState"))
    console.log(user)
    return (
        <header className='header'>
            <div className="container">
                <nav className="header__nav">
                    <div className="header__left">
                        B T <span>C</span>
                    </div>
                    <div className="header__center">
                        <Link className='header__center-link' to=''>All product</Link>

                    </div>
                    {
                        JSON.parse(localStorage.getItem('@@remember-rootState'))?.user ?
                            <div className="header__right">
                                <Link to='/profile'><span className='header__right-icon'><AiOutlineUser/></span></Link>
                                <button onClick={() => dispatch(logOutUser())} className="header__right-logOut">Log Out</button>
                            </div>
                             :
                            <div className="header__right">
                                <Link className='header__right-link' to='/login'>Sign In</Link>
                                <Link className='header__right-link' to='/register'>Sign Up</Link>
                            </div>
                    }

                </nav>
            </div>
        </header>
    );
};

export default Header;