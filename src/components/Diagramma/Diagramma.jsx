import React from 'react';
import ChartJS from '../Diagramma/Chart/Chart';

const Diagramma = () => {
    const chartData = {
        labels: ['Label 1', 'Label 2', 'Label 3', 'Label 3', 'Label 3', 'Label 3'],
        datasets: [
            {
                label: 'Data Set 1',
                data: [10, 20, 30, 20, 5, 90],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                borderWidth: 1,
            },
        ],
    };

    return (
        <section className="diagrama">
            <ul className="diagrama__list">
                <li className="diagrama__item">BNB</li>
                <li className="diagrama__item">BTC</li>
                <li className="diagrama__item">
                    Ethereum
                </li>
                <li className="diagrama__item">
                    Ripple
                </li>
            </ul>
            <div className="diagrama__table">
                <ChartJS data={chartData}  />
            </div>

        </section>
    );
};

export default Diagramma;