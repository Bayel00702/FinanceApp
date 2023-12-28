import React from 'react';
import ChartJS from '../Diagramma/Chart/Chart';

const Diagramma = ({data}) => {
    console.log(data)
    const name = data.map((item) => {
        return item.symbol
    })


    const price = data.map((item) => {
        return item.price
    })
    const time = data.map((item) => {
        return item.timestamp
    })
    const chartData = {
        labels: name,
        datasets: [
            {
                label: '',
                data: price,
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                borderWidth: 1,
            },
        ],
    };
    console.log(chartData)
    return (
        <section className="diagrama">
            <ul className="diagrama__list">


            </ul>
            <div className="diagrama__table">
                <ChartJS data={chartData}/>

            </div>

        </section>
    );
};

export default Diagramma;