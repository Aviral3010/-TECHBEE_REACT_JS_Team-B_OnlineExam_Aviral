import React from 'react'
import Testcard from './Testcard'
function Test() {
  const dt=[
    {
      _id: "61e1bc3e42004f3bf851d181",
      ques: "__________ is known as the City of Lakes in India?",
      option: [
        "Indore",
        "Udaipur",
        "Jaipur",
        "Surat"
      ],
      correct: 1
    },
    {
     _id: "61e1be1bfcd11a3bf84db94d",
     ques: "Aizwal is the capital of _______",
     option: [
        "Arunachal Pradesh",
        "Manipur",
        "Meghalaya",
        "Mizoram"
      ],
      correct: 3
    },
   
  ]
  return (
    <>
    {(dt.map((data,index)=>{
     return( <Testcard no={index} ques={data.ques} o1={data.option[0]} o2={data.option[1]} o3={data.option[2]} o4={data.option[3]}/>)
    }))}
    
    </>
  )
}

export default Test
