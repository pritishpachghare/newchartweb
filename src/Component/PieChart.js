import React from 'react'
import ReactApexChart from 'react-apexcharts';

export default function PieChart() {

    let tempSeries={  
        
        series: [25, 15, 44, 55, 41, 17],
        options: {
          chart: {
            width: '300',
            type: 'pie',
          },
          labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          theme: {
            monochrome: {
              enabled: true
            }
          },
          plotOptions: {
            pie: {
              dataLabels: {
                offset: -5
              }
            }
          },
          title: {
            text: "Monochrome Pie"
          },
          dataLabels: {
            formatter(val, opts) {
              const name = opts.w.globals.labels[opts.seriesIndex]
              return [name, val.toFixed(1) + '%']
            }
          },
          legend: {
            show: false
          }
        },
      };


  return (
      <div className='card  p-md-5 p-3 ml-md-5 mt-md-0 mt-3'>
  <ReactApexChart options={tempSeries.options} series={tempSeries.series} type="pie" />
</div>
  )
}
