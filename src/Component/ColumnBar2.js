import React,{useState,useEffect}  from 'react'
import ReactApexChart from 'react-apexcharts';

export default function ColumnBar2() {

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
            data: data?.products?.map((ele)=>(
                ele?.stock
              ))
          }],
          options: {
            chart: {
              height: 350,
              type: 'bar',
              events: {
                click: function(chart, w, e) {
                  // console.log(chart, w, e)
                }
              }
            },
            // colors: colors,
            plotOptions: {
              bar: {
                columnWidth: '45%',
                distributed: true,
              }
            },
            dataLabels: {
              enabled: false
            },
            legend: {
              show: false
            },
            xaxis: {
              categories: data?.products?.map((ele)=>(
                ele?.title.slice(0,10)
              )),
              labels: {
                style: {
                  
                  fontSize: '12px'
                }
              }
            }
          },
        
        
    }

  return (
    <div className='card  p-md-5 p-3 mt-md-0 mt-3'>
    <ReactApexChart options={tempSeries.options} series={tempSeries.series} type="bar" height={300} />

</div>
  )
}
