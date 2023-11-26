import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartJS = ({ data }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');

        new Chart(ctx, {
            type: 'bar', // Change this to the desired chart type (e.g., 'line', 'pie', etc.)
            data: data,
        });
    }, [data]);

    return <canvas id={'chart'} ref={chartRef} />;
};

export default ChartJS;