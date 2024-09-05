import React, { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

const Charts = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const data = {
      labels: ["Food", "Bills", "Shopping", "Cars"],
      datasets: [
        {
          label: "info",
          data: [300, 500, 100, 150],
          backgroundColor: ["red", "blue", "yellow", "pink"],
        },
      ],
    };

    const config = {
      type: "doughnut",
      data: data,
    };

    const myChart = new Chart(ctx, config);

    return () => {
      myChart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} width="400px" height="400px" />;
};

export default Charts;
