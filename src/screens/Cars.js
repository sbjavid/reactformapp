import React from "react"; 
import { useState } from "react";

function Car(){
        const[list,setList]=useState(['test1','test2'])
        const[count,setCount]=useState(1)
    function addcars(){
        const itemName="Item"+count;
        setList((previousState)=>{return[...previousState,itemName]})
        setCount((previousState) =>{return previousState+1})
    }



    return(
        <>
            <h1>Car brand names</h1>
            <button onClick={addcars}>Add Car brand</button>
            <ul>
                {list.map((el,index)=><li key={index}>{el}</li>)}



            </ul>






        </>
    )
}

export default  Car;