import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartJS = ({ data }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');

        // Check if there's an existing chart instance
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        // Create a new chart instance
        chartInstance.current = new Chart(ctx, {
            type: 'bar', // Change this to the desired chart type (e.g., 'line', 'pie', etc.)
            data: data,
        });

        // Cleanup on component unmount
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [data]);

    return <canvas id={'chart'} ref={chartRef} />;
};

export default ChartJS;