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
    labels: ["1 сар"],
    datasets: [
      {
        label: "Орлого (₮)",
        data: [
          1200, 1500, 1000, 2000, 2300, 1800, 2500, 2700, 2400, 3000, 3200,
          2800,
        ],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Зардал",
        data: 9000,
        backgroundColor: "#F87171",
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

  return (
    <div className="flex items-center justify-center p-4 bg-white card">
      {/* {barChartData && <Bar data={data1} options={options1} />} */}
      <Bar data={data} options={options} />
      {/* {!barChartData && (
    <div className="flex items-end justify-center w-full gap-4 ">
      <div className="w-4 skeleton h-14"></div>
      <div className="w-4 h-16 skeleton"></div>
      <div className="w-4 h-24 skeleton"></div>
      <div className="w-4 h-24 skeleton"></div>
      <div className="w-4 h-24 skeleton"></div>
      <div className="w-4 h-16 skeleton"></div>
      <div className="w-4 skeleton h-14"></div>
    </div>
  )} */}
    </div>
  );
};

export default MonthChart;
