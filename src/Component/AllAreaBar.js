import React from 'react'
import LineBar from './LineBar';
import AreaBar from './AreaBar';
import LineBar3 from './LineBar3';

export default function AllAreaBar() {
  return (
  <div>
    <div className="d-flex flex-md-row flex-column p-3" style={{background:"#343E59",height:"100%"}}>
   <LineBar/>
   <AreaBar/>
   <LineBar3/>
   </div>
    <div className="d-flex flex-md-row flex-column p-3" style={{background:"#343E59",height:"100%"}}>
   <LineBar/>
   <AreaBar/>
   <LineBar3/>
   </div>
   </div>
  )
}
