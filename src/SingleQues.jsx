import React from 'react'
import { useState } from 'react';


const SingleQues = (props) => {
    const[showInfo, setShowInfo]= useState(false);
  return (
    <div className="container">
      <div style={{display:'flex', justifyContent:'space-between'}}>
      <h5>{props.title}</h5>
      <button className="btn" onClick={()=>setShowInfo(!showInfo)}>{showInfo ? '-' : '+' }</button>
      </div>
      {showInfo && <p>{props.info}</p>}
      </div>
  )
}

export default SingleQues;