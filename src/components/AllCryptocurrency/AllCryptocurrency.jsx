import React from 'react';

const AllCryptocurrency = ({ data }) => {

    return (
        <section className='all'>
            <div className="container">
                <table className="all__row all__table">
                    <tbody>
                    <tr className='all__table-tr'>
                        <th className='all__table-th'>Crypto name</th>
                        <th className='all__table-th'>Price($)</th>
                        <th className='all__table-th'>Data</th>
                    </tr>

                    {
                        data?.map((item, idx) => (
                            <tr key={idx} className='all__table-tr'>
                                <td className="all__card-title all__table-td">{item.symbol || 'Loading...'}</td>
                                <td className="all__card-price all__table-td">{item.price || 'Loading...'}</td>
                                <td className="all__card-price all__table-td">{item.timestamp.slice(0, 10) || 'Loading...'} {item.timestamp.slice(11, 16) || 'Loading...'}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AllCryptocurrency;
