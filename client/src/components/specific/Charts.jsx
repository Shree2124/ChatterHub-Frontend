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
import { getLast7Days } from "../../lib/features.js";

ChartJS.register(
  CategoryScale,
  Tooltip,
  Filler,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement
);

const labels = getLast7Days();

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

const LineChart = ({ value = [] }) => {
  const data = {
    labels,
    datasets: [
      {
        data: value,
        label: "Revenue",
        fill: false,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(75,192,192,0.3)",
      },
    ],
  };
  return <Line data={data} options={lineChartOptions}></Line>;
};


const doughnutChartOptions={
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
  },
  cutout: 120,
}

const DoughnutChart = ({ value = [], labels=[] }) => {
  const data = {
    labels,
    datasets: [
      {
        data: value,
        fill: false,
        backgroundColor: ["#3BCEAC", "#7E78D2"],

        borderColor: ["#0EAD69", "#6449cf"],
        offset: 20
      },
    ],
  };
  return <Doughnut style={{
    zIndex: 8
  }} data={data} options={doughnutChartOptions}></Doughnut>;
};

export { LineChart, DoughnutChart };
