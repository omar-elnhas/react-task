import React from 'react'
import { Bar } from "react-chartjs-2";

export default function BarChart() {
  
    
        const labels = ['1Pm', '2Pm', '3Pm', '4Pm', '5Pm', '6Pm','7Pm'];
        const data = {
          labels: labels,
          datasets: [
            {
              label: "My First dataset",
              backgroundColor: "#2F82FC",
              borderColor: "rgb(255, 99, 132)",
              data: [15, 19, 10, 12, 8, 3,10],
            },
          ],
        }
    
  
    return (
    <div>

<Bar data={data} />
    </div>
  )
}
