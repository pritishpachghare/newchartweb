import React from 'react'
import ColumnBar from './ColumnBar';
import ColumnBar2 from './ColumnBar2';
import ColumnBar3 from './ColumnBar3';

export default function AllBarGraph() {
  return (
    <div>
        <div className="d-flex flex-md-row flex-column p-3" style={{background:"#343E59",height:"100%"}}>
    <ColumnBar2/>
    <ColumnBar3/>
    <ColumnBar/>
    </div>
        <div className="d-flex flex-md-row flex-column p-3" style={{background:"#343E59",height:"100%"}}>
    <ColumnBar2/>
    <ColumnBar3/>
    <ColumnBar/>
    </div>
    </div>
  )
}
