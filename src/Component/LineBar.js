
import { useState,useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';


export default function LineBar() {

  const [data, setData] = useState([]);


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
          name: "Desktops",
          data: data?.products?.map((ele)=>(
            ele?.price
          ))
      }],
      options: {
        chart: {
          height: 500,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Product Price',
          align: 'bottom'
        },
        yaxis: {
          title: {
            text: 'Price'
          }
      },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: data?.products?.map((ele)=>(
            ele?.title.slice(0,10)
          )),
          title: {
            text: 'Product Name', 
          }
        }
      },
    
    
    }

    return (

<div className='card p-md-5 p-3'>
<ReactApexChart options={tempSeries?.options} series={tempSeries?.series} type="line" height={300}/>
</div>



    )
    
 }