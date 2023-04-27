import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "white",
      borderColor: "",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};
const PieChart = () => {
  return (
    <div className="pieChart">
      <Pie data={data} />
    </div>
  );
};
export default PieChart;