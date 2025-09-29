import React, { useEffect, useState } from 'react'

const UseEffect = () => {

   const [number, setNumber] = useState (0);

   useEffect(()=>{

    checkNumber();

   },[number]);

   const updateNumber =() =>{
    setNumber((number)=> number +1)
   }
const checkNumber =()=>{
    //if else 
// for, while loop, do while loop

if(number > 5){
    setNumber(0);
}

}

  return (
    <div><h1> I am  going to count the ball {number}</h1>
      <button onClick={updateNumber}> Change Colours </button>

    
    </div>
 
)
}

export default UseEffect


const [state, setState] = useState(0);

useEffect(()=>{
code

},[emptyArray])

const functionName =()=>{




  return(
    <div>
      
      </div>
  )
}