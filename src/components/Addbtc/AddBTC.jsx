import React from 'react';
import {useForm} from "react-hook-form";
import axios from "../../utils/axios";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {cryptocurrency} from "../../redux/reducers/cryptocurrency";

const AddBtc = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
    } = useForm({
        mode: "onBlur"
    });

    const createBTC = (data) => {
        axios.post('/admin/coins/cryptoprice/', {...data}).then((res) => {
            dispatch(cryptocurrency(res.data));
            navigate('/');
        })
    }
    return (
        <section className='add'>
            <div className="container">
                <form onSubmit={handleSubmit(createBTC)} action="" className="add__form">
                    <h2 className="add__title">Create cryptocurrency</h2>
                    <label htmlFor="" className="add__label">
                        <input {...register('name')} type="text" className="add__input"/>
                    </label>

                    <label htmlFor="" className="add__label">
                        <input  {...register('price')} type="text" className="add__input"/>
                    </label>
                    <button className="add__btn">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddBtc;