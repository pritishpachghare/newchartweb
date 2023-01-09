import React from 'react'
import ReactApexChart from 'react-apexcharts';

export default function PieChart2() {

    let tempSeries={  
        series: [44, 55, 13, 43, 22],
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 280
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      };

  return (
    <div className='card p-md-5 ml-md-5 p-3 mt-md-0 mt-3'>
    <ReactApexChart options={tempSeries.options} series={tempSeries.series} type="pie"/>
  </div>
  )
}
