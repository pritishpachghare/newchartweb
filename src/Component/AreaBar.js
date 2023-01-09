import React from 'react'
import ReactApexChart from 'react-apexcharts';



export default function AreaBar() {


    let tempSeries={
          
        series: [{
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100]
        }, {
          name: 'series2',
          data: [11, 32, 45, 32, 34, 52, 41]
        },
      
      ],
        options: {
          chart: {
            height: 350,
            type: 'area'
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            title:{
              text: 'Product Price',
            },
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
          },
          yaxis: {
            title:{
              text: 'Product Price',
            }
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          },
        },
      
      
      };



  return (
    
      <div id="chart">
           <div className='card p-md-5 p-3 ml-md-5 mt-md-0 mt-3 bg-blue-500'>
<ReactApexChart options={tempSeries?.options} series={tempSeries?.series} type="area" height={300} />
</div>
  
</div>
  )
}
