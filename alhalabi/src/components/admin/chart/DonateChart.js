import React, { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

export default function DonateCharts({ data, labels, colors }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");
    let myDoughnutChart = new Chart(myChartRef, {
      type: "doughnut",
      data: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            data: [30, 50, 20],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio:false
      },
    });
    return () => {
      myDoughnutChart.destroy();
    };
  }, [data, colors, labels]);

  return (
    <div className="card_charts">
      <h2>Number of order per month</h2>
      <div className="chart">
      <canvas id="myChart" ref={chartRef} height="40px" />
      </div>
    </div>
  );
}
