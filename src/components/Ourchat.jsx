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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Student Performance Chart",
    },
  },
};

const labels = ["Math", "Science", "English", "History", "Geography", "Art"];

export const data = {
  labels,
  datasets: [
    {
      label: "Average Grade",
      data: [85, 90, 78, 82, 88, 95], 
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Top Performer",
      data: [90, 92, 85, 88, 92, 98], 
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const OurChart = () => {
  return <Bar options={options} data={data} />;
};

export default OurChart;
