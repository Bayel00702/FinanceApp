import React, {useState} from 'react';
import {logOutUser} from "../../redux/reducers/auth";
import {useDispatch} from "react-redux";

const Profile = () => {

    const dispatch = useDispatch()
    const [tab,setTab] = useState("Profile");
    const user = JSON.parse(localStorage.getItem("@@remember-rootState")).user;
    console.log(user);

    return (
        <section className='profile'>
            <div className="container">
                <div className="profile__row">
                    <div className="profile__left">
                        <div className="profile__row-list">
                            <button className={`profile__item ${tab === 'Profile' ? 'active' : ''}`} onClick={() => setTab('Profile')} >Profile</button>
                            <button className={`profile__item ${tab === 'Update profile' ? 'active' : ''}`} onClick={() => setTab('Update profile')}>Update profile</button>
                            <button className={`profile__item ${tab === 'Update password' ? 'active' : ''}`} onClick={() => setTab('Update password')}>Update password</button>
                        </div>
                        <div className="profile__row-btn">
                            <button onClick={() => dispatch(logOutUser())} className='profile__left-logout'>LogOut</button>
                        </div>
                    </div>
                    {
                        tab === 'Profile' ?
                        //     email
                        //     name
                        //     firstname
                        //     lastname
                        //      bithday
                        // mobile
                            <div className='profile__right'>
                                <ul className='profile__right-list'>
                                    <li className='profile__right-item'>Email : {user.email}</li>
                                    <li className='profile__right-item'>User Name : {user.username}</li>
                                    <li className='profile__right-item'>First Name : {user.first_name}</li>
                                    <li className='profile__right-item'>Last Name : {user.last_name}</li>
                                    <li className='profile__right-item'>Birthday : {user.birthday}</li>
                                    <li className='profile__right-item'>mobile : {user.mobile}</li>
                                </ul>
                            </div>
                            : tab === 'Update profile' ?
                            <div className='profile__right'>
                                <form className='profile__right-form'>
                                    <label htmlFor="" className="profile__right-label">
                                        <h3 className="profile__right-subtitle">Email:</h3>
                                        <input className='profile__right-input' placeholder={user.email} type="email"/>
                                    </label>
                                    <label htmlFor="" className="profile__right-label">
                                        <h3 className="profile__right-subtitle">User Name:</h3>
                                        <input className='profile__right-input' placeholder={user.username} type="email"/>
                                    </label>
                                    <label htmlFor="" className="profile__right-label">
                                        <h3 className="profile__right-subtitle">First Name:</h3>
                                        <input className='profile__right-input' placeholder={user.first_name} type="email"/>
                                    </label>
                                    <label htmlFor="" className="profile__right-label">
                                        <h3 className="profile__right-subtitle">Last name:</h3>
                                        <input className='profile__right-input' placeholder={user.last_name} type="email"/>
                                    </label>
                                    <label htmlFor="" className="profile__right-label">
                                        <h3 className="profile__right-subtitle">Birthday:</h3>
                                        <input className='profile__right-input' placeholder={user.birthday} type="email"/>
                                    </label>
                                    <label htmlFor="" className="profile__right-label">
                                        <h3 className="profile__right-subtitle">Mobile:</h3>
                                        <input className='profile__right-input' placeholder={user.mobile} type="email"/>
                                    </label>
                                    <button className='profile__right-btn'>Submit</button>
                                </form>
                            </div> : tab === 'Update password' ?
                                <div className='profile__right'>
                                    <h1>q</h1>
                                </div> : ''
                    }
                </div>
            </div>
        </section>
    );
};

export default Profile;