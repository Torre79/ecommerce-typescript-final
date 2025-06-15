import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { SalesData } from "../../types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface SalesChartProps {
  salesData: SalesData[];
}

const SalesChart: React.FC<SalesChartProps> = ({ salesData }) => {
  const data = {
    labels: salesData.map((data) => data.day),
    datasets: [
      {
        label: "Ventas",
        data: salesData.map((data) => data.sales),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "Ventas por Día" },
    },
  };

  return <Line data={data} options={options} />;
};

export default SalesChart;
