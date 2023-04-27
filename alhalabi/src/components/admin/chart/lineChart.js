import React from "react";
import Chart from "chart.js/auto";
import { Line,Bar } from "react-chartjs-2";
import "./chart.css"

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "User",
      backgroundColor: "color",
      borderColor: "white",
      
      
     
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const LineChart = () => {
  return (
    <div className="lineChart">
      <Line className="line" data={data} />
    </div>
  );
};

export default LineChart;

