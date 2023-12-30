import React from 'react';
import {Link} from "react-router-dom";
import {authUser, logOutUser} from "../../../redux/reducers/auth";
import {useDispatch} from "react-redux";
import {AiOutlineUser} from 'react-icons/ai';
import axios from "../../../utils/axios";

const Header = () => {

    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem("@@remember-rootState"))
    console.log(user)

    // const GetUserMe = (data) => {
    //     axios('/api/get_user/')
    //         .then((res) => {
    //             res.data
    //         })
    // }

    return (
        <header className='header'>
            <div className="container">
                <nav className="header__nav">
                    <div className="header__left">
                        B T <span>C</span>
                    </div>
                    <div className="header__center">
                        <Link className='header__center-link' to=''>All Product</Link>

                    </div>
                    {
                        JSON.parse(localStorage.getItem('@@remember-rootState'))?.user ?
                            <div className="header__right">
                                <Link to='/profile'><span className='header__right-icon'><AiOutlineUser/></span></Link>
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