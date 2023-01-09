import React,{useState,useEffect}  from 'react'
import ReactApexChart from 'react-apexcharts';

export default function SemiPieChart() {

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
        series: data?.products?.map((ele)=>(
            ele?.price
          )),
        options: {
          chart: {
            type: 'donut',
          },
          plotOptions: {
            pie: {
              startAngle: -90,
              endAngle: 90,
              offsetY: 10
            }
          },
          grid: {
            padding: {
              bottom: -80
            }
          },
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
    <div className='card  p-md-5 p-3 ml-md-5 mt-md-0 mt-3'>
    <ReactApexChart options={tempSeries.options} series={tempSeries.series} type="donut" className="mt-20"/>
  </div>
  )
}
