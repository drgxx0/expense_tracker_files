import React from 'react'
import {Line} from 'react-chartjs-2';

//import './chart.css'

const Chart = ({xp}) => {
  
  const funx = (xp) => {
    const map = xp.map(item => {
      if(Math.sign(item.sp) === -1) {
        return -item.sp
      } else {
        return null
      }
    })

    const redu = map.reduce((a, b) => a + b, 0);
    
    return redu
  }

    const number = funx(xp)
    const date = new Date().getDate()
    const array = new Array(date-1)
    const newArray = array.fill(0,0,date)

    const mix = [
      ...newArray,
      number
    ]
    
    const data = {
        labels: [...Array(30).keys()],
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
            data: mix
          }
        ]
      };

    return (
        <Line data={data} />
    )
}

export default Chart