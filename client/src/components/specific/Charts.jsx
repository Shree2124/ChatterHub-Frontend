import React from "react";
import { Line, Doughnut } from "react-chartjs-2";
import {
  CategoryScale,
  Tooltip,
  Filler,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Chart as ChartJS,
  plugins,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  Tooltip,
  Filler,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement
);

const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },

  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      bigInAtZero: true,
      grid: {
        display: false,
      },
    },
  },
};

const LineChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "March",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [1, 2, 34],
        label: "Revenue",
        fill: false,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(75,192,192,0.3)",
      },
      {
        data: [2, 1, 3, 35],
        label: "Revenue 2",
        fill: false,
        backgroundColor: "rgba(15,15,142,1)",
        borderColor: "rgba(15,15,142,0.3)",
      },
    ],
  };
  return <Line data={data} options={lineChartOptions}></Line>;
};
const DoughnutChart = () => {
  return <div></div>;
};

export { LineChart, DoughnutChart };
