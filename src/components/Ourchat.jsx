import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Average",
      data: [3000, 1000, 4000, 7000, 2000],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Report data",
      data: [3000, 2000, 5000, 3000, 2000],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const Ourchat = () => {
  return <Bar options={options} data={data} />;
};

export default Ourchat;
