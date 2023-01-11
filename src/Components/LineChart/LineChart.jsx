import React from 'react'
import { Line } from "react-chartjs-2";

export default function LineChart() {
  
  
    const labels = ['7Pm', '9Pm', '11Pm', '1Pm', '3Pm', '65Pm','7Pm','9Pm'];

    const data = {
      labels: labels,
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "#D3C7C1",
          borderColor: "rgb(255, 99, 132)",
          data: [15, 19, 10, 12, 8, 3,10,8],
        },
      ],
    };
    return (
    <div>

        <Line data={data} />
    </div>
  )
}
