import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Protectedroute = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Point 1', 'Point 2', 'Point 3', 'Point 4'],
        datasets: [
          {
            label: 'User',
            data: [300, 200, 400, 350],
            backgroundColor: 'rgba(75, 192, 192, 0.5)', // Green color for user
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            barPercentage: 0.4, // Adjust width of the bars
          },
          {
            label: 'Guest',
            data: [200, 250, 150, 300],
            backgroundColor: 'rgba(255, 99, 132, 0.5)', // Pink color for guest
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            barPercentage: 0.4, // Adjust width of the bars
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: 500,
          },
        },
      },
    });
  }, []);

  return (
    <div className="Bargraph">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default Protectedroute;
