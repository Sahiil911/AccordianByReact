import questions from "./data";
import React from "react";
import SingleQues from "./SingleQues";
import { useEffect } from "react";
 import { useState } from "react";



const App = () => {

 const[loading, setLoading]= useState(true);

  useEffect(()=>{
  setTimeout(()=>{
  setLoading(false);
    }, 5000)
  },[]);
  return(
    <div> 
      {loading ? <div style={{position:"absolute",top:"50%",left:"50%"}}><p>Loading......</p></div> :    
      <div className="question">
        <h2 style={{textAlign:'center', marginTop:'3rem'}}>Questions</h2>
 {questions.map((data)=>{
  return(
  <SingleQues key={data.id} {...data}></SingleQues>
        )
      } 
    )
}
 </div>
 }
   
    </div>
  )

}
export default App;
