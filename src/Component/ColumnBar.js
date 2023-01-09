import { useState,useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';



export default function ColumnBar() {

  const [data, setData] = useState([]);

  console.log("data",data)

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products")
    const data = await response.json()
    setData(data)
}

useEffect(() => {
    fetchData()
}, [])

    let tempSeries={
        series: [{
            name: 'Stock',
            data: data?.products?.map((ele)=>(
            ele?.stock
          ))
          }, {
            name: 'Rating',
            data: data?.products?.map((ele)=>(
              ele?.rating
            ))
          }, {
            name: 'discountPercentage',
            data: data?.products?.map((ele)=>(
              ele?.discountPercentage
            ))
          }],
          options: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: data?.products?.map((ele)=>(
                ele?.title.slice(0,10)
              )),
            },
            yaxis: {
              title: {
                text: 'Rating'
              }
            },
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return "*" + val + ""
                }
              }
            }
          },
        
        
        };

  return (

   
    <div className='card  p-md-5 p-3 ml-md-5 mt-md-0 mt-3'>
    <ReactApexChart options={tempSeries.options} series={tempSeries.series} type="bar" height={300} />

</div>
 
  )
}
