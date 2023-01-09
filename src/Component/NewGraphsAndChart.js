import React from 'react'
import LineBar from './LineBar';
import AreaBar from './AreaBar';
import LineBar3 from './LineBar3';
import Donut from './Donut';
import PieChart2 from './PieChart2';
import SemiPieChart from './SemiPieChart';
import ColumnBar2 from './ColumnBar2';
import ColumnBar3 from './ColumnBar3';
import ColumnBar from './ColumnBar';

export default function NewGraphsAndChart() {
  return (
    <div>
        
      <div className="d-flex flex-md-row flex-column p-3" style={{background:"#343E59",height:"100%"}}>
     <LineBar/>
     <AreaBar/>
     <LineBar3/>
    
     </div>
     <div className="d-flex flex-md-row flex-column p-3" style={{background:"#343E59",height:"100%"}}>
     <Donut/>
     <PieChart2/>
     <SemiPieChart/>
     </div>
     <div className="d-flex flex-md-row flex-column p-3" style={{background:"#343E59",height:"100%"}}>
     <ColumnBar2/>
     <ColumnBar3/>
     <ColumnBar/>
     </div>
    </div>
  )
}
