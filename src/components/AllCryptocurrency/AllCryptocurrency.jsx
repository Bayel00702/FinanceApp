import React from 'react';
import Logo from '../../assets/87496d50-2408-43e1-ad4c-78b47b448a6a.png'

const AllCryptocurrency = () => {



    return (
        <section className='all'>
            <div className="container">
                <ul className="all__list">
                    <li className="all__item">Title</li>
                    <li className="all__item">Price</li>
                    <li className="all__item">Dif</li>
                </ul>
                <div className="all__row">
                    <div className="all__card">
                        <div className="all__card-left">
                            <img src={Logo} alt="" className="all__card-img"/>
                            <h3 className="all__card-title">BTC</h3>
                        </div>
                        <p className="all__card-price">₽3,367,986.30</p>
                        <p className="all__card-dif">+0,5%</p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllCryptocurrency;