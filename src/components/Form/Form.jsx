import React from 'react';
import InputMask from 'react-input-mask';
import {useForm} from 'react-hook-form'
import axios from "../../utils/axios";
import {useDispatch, useSelector} from "react-redux";
import {authUser} from "../../redux/reducers/auth";
import {useLocation, useNavigate} from "react-router-dom";


const Form = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()


    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
    } = useForm({
        mode: "onBlur"
    });

    const handleLogin = (data) => {
        axios.post('/auth/token/login/', {...data})
            .then(res => {
            dispatch(authUser(res.data));
            navigate('/');
            localStorage.setItem('@@remember-rootState', JSON.stringify(data))
        }).catch((err) =>  console.log(err));
    }

    const handleRegister = (data) => {
        axios.post('/api/register/', {...data}).then(res => {
                dispatch(authUser(res.data));
                navigate('/');
                localStorage.setItem('@@remember-rootState', JSON.stringify(res.data))
            })
            .catch((err) =>  console.log(err));
    };

    const onSubmit = (data) => {
        const {...user} = data

        if (location.pathname === '/login'){
            handleLogin(user)
        } else {
            handleRegister(user)
        }
    }




    return (
        <section className='form'>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)} action="" className="form__form">
                    {
                        location.pathname === '/register' ?
                            <h2 className="form__title">
                                Sign Up
                            </h2> :
                            <h2 className="form__title">
                                Sign In
                            </h2>
                    }
                    <label htmlFor="" className="form__label">
                        <h3 className="form__subtitle">Email:</h3>
                        <input className='form__input' placeholder='Enter email' type="email" {...register('email')}/>
                    </label>

                            <label htmlFor="" className="form_labelt">
                                <h3 className="form__subtitle">Name:</h3>
                                <input className='form__input' placeholder='Enter name' type="text" {...register('username')}/>
                            </label>




                    <label htmlFor="" className="form__label">
                        <h3 className="form__subtitle">Password</h3>
                        <input placeholder='Enter password' className='form__input' type="password" {...register('password')}/>
                    </label>

                    <button className='form__btn'>Submit</button>

                </form>
            </div>
        </section>
    );
};

export default Form;