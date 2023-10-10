import React, { useEffect, useState } from "react"




function Timer(){
    const[count,setCount]=useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            setCount((previousState)=>{ return previousState+1})
        },1000)

    })
    
    function checkcount(){
        if(count>10){
            setCount(1)
        }
    }
    function counttimer(){
        setCount((previousState)=>previousState+1)
    }
    return(
        <>

            <h1> i have clicked {count} times </h1>
            <button onClick={counttimer}> Add count</button>
        
        
        </>
    )
}
export default Timer;