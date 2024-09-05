import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Chart.js бүртгүүлэх
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MonthChart = () => {
  // 1 сарын мэдээллийг тохируулах
  const data = {
    labels: [
      "1 сар",
      "2 сар",
      "3 сар",
      "4 сар",
      "5 сар",
      "6 сар",
      "7 сар",
      "8 сар",
      "9 сар",
      "10 сар",
      "11 сар",
      "12 сар",
    ],
    datasets: [
      {
        label: "Орлого (₮)",
        data: [
          1200, 1500, 1000, 2000, 2300, 1800, 2500, 2700, 2400, 3000, 3200,
          2800,
        ],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Сар бүрийн орлогын график",
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default MonthChart;
