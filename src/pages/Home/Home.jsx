import React, {useEffect, useState} from 'react';
import Diagramma from "../../components/Diagramma/Diagramma.jsx";
import AllCryptocurrency from "../../components/AllCryptocurrency/AllCryptocurrency";

const Home = () => {
    const [data, setData] = useState([]);
    console.log(data)
    useEffect(() => {
        const ws = new window.WebSocket('ws://127.0.0.1:8000/ws/bitcoin/');

        ws.addEventListener('message', (event) => {
            try {
                const newData = JSON.parse(event.data);
                setData(Array.isArray(newData) ? newData : []);
            } catch (error) {
                console.error('Error parsing WebSocket data:', error);
            }
        });

        return () => {
            ws.close();
        };
    }, []);

    console.log(JSON.parse(localStorage.getItem("@@remember-rootState")))
    return (
        <div>
            {JSON.parse(localStorage.getItem("@@remember-rootState"))?.user ? <>
                <Diagramma data={data}/>
                <AllCryptocurrency data={data}/>
            </>  : <div className='container'>
                <h1 className='form__title'>Do you want to look at the price of cryptocurrencies? Register</h1>
            </div>}

        </div>
    );
};

export default Home;