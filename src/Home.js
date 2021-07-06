import React, { useState } from 'react'
import './style.css'
function Home() {
    const mcq=[
        { question:"Which method is not part of ReactDOM? ",
          options:[
              {option:"ReactDOM.destroy()",isCorrect:false},
              {option:"ReactDOM.hydrate()",isCorrect:true},
              {option:"ReactDOM.createPortal()",isCorrect:false},
              {option:"ReactDOM.findDOMNode()",isCorrect:false}
          ]  
        },
        {
          question:"React is mainly used for building___.",
          options:[
              {option:" Database",isCorrect:false},
              {option:" Connectivity",isCorrect:false},
              {option:" User interface",isCorrect:false},
              {option:" Design Platform",isCorrect:true}
          ]
        },
        {
            question:"The lifecycle methods are mainly used for ___.",
            options:[
                {option:" keeping track of event history",isCorrect:true},
                {option:" enhancing components",isCorrect:false},
                {option:" freeing up resources",isCorrect:false},
                {option:" none of the above",isCorrect:false}
            ]
          }
    ]
    const [data,setData]=useState([]);
    const handleClick=(question,ans)=>{
        if(ans){
            setData("green");
        }
    }

  return mcq.map((question)=>{
    return (
        <div>
            <h2>{question.question}</h2>
            {question.options.map((option)=>{
                return <ol type="A" 
                onClick={()=>handleClick(question.question,option.isCorrect)}
                style={{color:data}} >{option.option}</ol>
            })}
        </div>
    )
  })
}

export default Home;

