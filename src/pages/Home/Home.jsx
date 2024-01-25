import React, {useEffect, useState,useRef,useLayoutEffect,useCallback} from 'react';
import Diagramma from "../../components/Diagramma/Diagramma.jsx";
import AllCryptocurrency from "../../components/AllCryptocurrency/AllCryptocurrency";

const Home = () => {

    const h2ref = useRef(null);

    const scrollToRef = useCallback(() => {
        if (h2ref.current) {
            h2ref.current.scrollIntoView();
        }
    }, [h2ref]);

    const [data, setData] = useState([]);
    useEffect(() => {
        const ws = new window.WebSocket('ws://127.0.0.1:8000/ws/bitcoin/');

        ws.addEventListener('message', (event) => {
            try {
                const newData = JSON.parse(event.data);
                setData(Array.isArray(newData) ? newData : []);
                scrollToRef()
            } catch (error) {
                console.error('Error parsing WebSocket data:', error);
            }
        });

        return () => {
            ws.close();
        };
    }, []);

    useEffect(() => {
        scrollToRef();
    }, [data, scrollToRef]);

    return (
        <div>
            {JSON.parse(localStorage.getItem("@@remember-rootState"))?.user ? <>
                <Diagramma data={data}/>
                <AllCryptocurrency data={data}/>
            </>  : <div className='container'>
                <h1 ref={h2ref} className='form__title'>Do you want to look at the price of cryptocurrencies? Register</h1>
            </div>}

        </div>
    );
};

export default Home;