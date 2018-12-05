import React from 'react'
import {Line} from 'react-chartjs-2';

//import './chart.css'

const Chart = (props) => {

    const data = {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', 
        '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', 
        '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
        datasets: [
          {
            label: 'Your expenses',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: []
          }
        ]
      };

    return (
        <Line data={data} />
    )
}

export default Chart