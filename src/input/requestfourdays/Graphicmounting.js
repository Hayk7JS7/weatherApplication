import React from 'react'
import {Line} from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement, 
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
} from 'chart.js'

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
)

const Graphicmounting = ({filtDate, filtTemp, sign}) => {
    if(sign == "humidity"){
        sign += "%"
    } else {
        sign += "°C"
    }

    const data = {
        labels: filtDate,
        datasets: [{
          label: sign,
          data: filtTemp,
          backgroundColor: "red",
          borderColor: "yellow",
          pointBorderColor: "black"
        }]
      }
      const options = {
        plugins: {
          legend: true
        }
      }
      return (
        <div className='more_detailed_data'>
          <Line data={data} options={options}/>
    
        </div>
      )
}

export default Graphicmounting
