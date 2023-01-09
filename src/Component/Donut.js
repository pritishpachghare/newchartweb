import React from 'react'
import { useState,useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

export default function Donut() {
  const [data, setData] = useState([]);


  const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products")
      const data = await response.json()
      setData(data)
  }

  useEffect(() => {
      fetchData()
  }, [data])

    let tempSeries={     
        series: data?.products?.map((ele)=>(
          ele?.price
        )),
        options: {
          chart: {
            type: 'donut',
          },
          responsive: [{
            breakpoint: 400,
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
   
   <div className='card  p-md-5 p-3  mt-md-0 mt-3'>
   <ReactApexChart options={tempSeries.options} series={tempSeries.series} type="donut" height={300} />

</div>
//     <div id="chart">
//     <ReactApexChart options={tempSeries.options} series={tempSeries.series} type="donut" />
//   </div>
  )
}
