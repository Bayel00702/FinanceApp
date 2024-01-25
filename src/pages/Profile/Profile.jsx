import React, {useState} from 'react';
import {logOutUser,setUser} from "../../redux/reducers/auth";
import {useDispatch} from "react-redux";
import axios from "../../utils/axios";
import {useNavigate} from "react-router-dom";


const Profile = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const [tab,setTab] = useState("Profile");
    const user = JSON.parse(localStorage.getItem("@@remember-rootState")).user;
    const [updatedProfile, setUpdatedProfile] = useState({
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        mobile: user.mobile,
        birthday: user.birthday,
    });

    const [updatePassword,setUpdatePassword] = useState({
        old_password: '',
        new_password1: '',
        new_password2: ''
    })

    const handleUpdateProfile = (e) => {
        e.preventDefault();

        axios.put('/api/update/', updatedProfile, {
            headers: {
                Authorization: `token ${user.token}`,
            },
        })
            .then((res) => {
                console.log('Profile updated successfully:', res.data);
                dispatch(setUser(res.data));

                localStorage.clear();

                localStorage.setItem('@@remember-rootState', JSON.stringify({"user":{...res.data,token: user.token,username: user.username}}))
                navigate('/')
            })
            .catch((error) => {
                console.error('Error updating profile:', error);
            });
    };

    const handleUpdatePassword = (e) => {
        e.preventDefault();

        axios.post('/api/change_password/', updatePassword, {
            headers: {
                Authorization: `token ${user.token}`,
            },
        })
            .then((res) => {
                console.log('Password updated successfully:');
                dispatch(setUser(res.data));
                navigate('/')

            })
            .catch((error) => {
                console.error('Error updating profile:', error);
            });
    };

    const handleLogOut = () => {
        dispatch(logOutUser())
        navigate('/')

    }


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
                            <button onClick={() =>
                                handleLogOut()
                            } className='profile__row-logout'>LogOut</button>
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
                                        <h3  className="profile__right-subtitle">Email:</h3>
                                        <input className='profile__right-input'
                                               onChange={(e) => setUpdatedProfile({ ...updatedProfile, email: e.target.value })}
                                               placeholder={user.email} type="email"/>
                                    </label>
                                    <label htmlFor="" className="profile__right-label">
                                        <h3 className="profile__right-subtitle">User Name:</h3>
                                        <input
                                            className='profile__right-input' placeholder={user.username} type="text"/>
                                    </label>
                                    <label htmlFor="" className="profile__right-label">
                                        <h3 className="profile__right-subtitle">First Name:</h3>
                                        <input
                                            onChange={(e) => setUpdatedProfile({ ...updatedProfile, first_name: e.target.value })}
                                            className='profile__right-input' placeholder={user.first_name} type="text"/>
                                    </label>
                                    <label htmlFor="" className="profile__right-label">
                                        <h3 className="profile__right-subtitle">Last name:</h3>
                                        <input
                                            onChange={(e) => setUpdatedProfile({ ...updatedProfile, last_name: e.target.value })}
                                            className='profile__right-input' placeholder={user.last_name} type="text"/>
                                    </label>
                                    <label htmlFor="" className="profile__right-label">
                                        <h3 className="profile__right-subtitle">Mobile:</h3>
                                        <input
                                            onChange={(e) => setUpdatedProfile({ ...updatedProfile, mobile: e.target.value })}
                                            className='profile__right-input' placeholder={user.mobile} type="number"/>
                                    </label>
                                    <label htmlFor="" className="profile__right-label">
                                        <h3 className="profile__right-subtitle">Birthday:</h3>
                                        <input
                                            onChange={(e) => setUpdatedProfile({ ...updatedProfile, birthday: e.target.value })}
                                            className='profile__right-input' placeholder={user.birthday} type="date"/>
                                    </label>

                                    <br/>
                                    <button onClick={handleUpdateProfile} className='profile__right-btn'>Submit</button>
                                </form>
                            </div> : tab === 'Update password' ?
                                <div className='profile__right'>
                                    <div className='profile__right'>
                                        <form className='profile__right-form'>
                                            <label htmlFor="" className="profile__right-label">
                                                <h3 className="profile__right-subtitle">Password:</h3>
                                                <input
                                                    onChange={(e) => setUpdatePassword({ ...updatePassword, old_password: e.target.value })}
                                                    className='profile__right-input' placeholder='Нынешний пароль' type="password"/>
                                            </label>
                                            <label htmlFor="" className="profile__right-label">
                                                <h3 className="profile__right-subtitle">New password:</h3>
                                                <input
                                                    onChange={(e) => setUpdatePassword({ ...updatePassword, new_password1: e.target.value })}
                                                    className='profile__right-input' placeholder='Новый пароль' type="password"/>
                                            </label>
                                            <label htmlFor="" className="profile__right-label">
                                                <h3 className="profile__right-subtitle">New password (again):</h3>
                                                <input
                                                    onChange={(e) => setUpdatePassword({ ...updatePassword, new_password2: e.target.value })}
                                                    className='profile__right-input' placeholder='Снова новый пароль' type="password"/>
                                            </label>
                                            <br/>
                                            <button onClick={handleUpdatePassword} className='profile__right-btn'>Submit</button>
                                        </form>
                                    </div>
                                </div> : ''
                    }
                </div>
            </div>
        </section>
    );
};

export default Profile;