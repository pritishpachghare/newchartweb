import React from 'react'
import Donut from './Donut';
import PieChart2 from './PieChart2';
import SemiPieChart from './SemiPieChart';

export default function AllPieChart() {
  return (
    <div>
      <div className="d-flex flex-md-row flex-column p-3" style={{background:"#343E59",height:"100%"}}>
     <Donut/>
     <PieChart2/>
     <SemiPieChart/>
     </div>   
      <div className="d-flex flex-md-row flex-column p-3" style={{background:"#343E59",height:"100%"}}>
     <Donut/>
     <PieChart2/>
     <SemiPieChart/>
     </div>   
      <div className="d-flex flex-md-row flex-column p-3" style={{background:"#343E59",height:"100%"}}>
     <Donut/>
     <PieChart2/>
     <SemiPieChart/>
     </div>   
    </div>
  )
}
