import React, {useEffect, useState} from 'react';
import Logo from '../../assets/87496d50-2408-43e1-ad4c-78b47b448a6a.png'
import WebSocket from 'ws'

const AllCryptocurrency = ({data}) => {


    return (
        <section className='all'>
            <div className="container">

                <table className="all__row all__table">
                    <tr className='all__table-tr'>
                        <th className='all__table-th'>Title</th>
                        <th className='all__table-th'>price</th>
                    </tr>

                    {
                        data?.map((item, idx) => (
                            <>

                                <tr className='all__table-tr'>
                                    <td className="all__card-title all__table-td">{item.symbol || 'Loading...'}</td>
                                    <td className="all__card-price all__table-td">${item.price || 'Loading...'}</td>
                                </tr>
                            </>
                        ))
                    }

                </table>
            </div>
        </section>
    );
};

export default AllCryptocurrency;