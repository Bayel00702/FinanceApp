import React, {useEffect, useState} from 'react';
import Diagramma from "../../components/Diagramma/Diagramma";
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
    return (
        <div>
            <Diagramma data={data}/>
            <AllCryptocurrency data={data}/>
        </div>
    );
};

export default Home;