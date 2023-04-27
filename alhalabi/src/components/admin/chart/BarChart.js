import React from "react";

import { Bar } from "react-chartjs-2";
import "./chart.css"
const BarChart = () => {
  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "white",
        borderColor: "white",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };
  return (
    <div className="barChart">
      <Bar className="bar" data={data} />
    </div>
  );
};

export default BarChart;