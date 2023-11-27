import React, {useEffect, useState} from 'react';
import Logo from '../../assets/87496d50-2408-43e1-ad4c-78b47b448a6a.png'
import WebSocket from 'ws'

const AllCryptocurrency = ({data}) => {




    return (
        <section className='all'>
            <div className="container">
                <ul className="all__list">
                    <li className="all__item">Title</li>
                    <li className="all__item">Price</li>
                    <li className="all__item">Dif</li>
                </ul>
                <div className="all__row">
                    {
                        data?.map((item, idx) => (
                            <div key={item.id || idx} className="all__card">
                                <div className="all__card-left">
                                    <img src={Logo} alt="" className="all__card-img"/>
                                    <h3 className="all__card-title">{item.symbol || 'Loading...'}</h3>
                                </div>
                                <p className="all__card-price">{item.price || 'Loading...'}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    );
};

export default AllCryptocurrency;