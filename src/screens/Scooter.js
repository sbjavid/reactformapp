import { useState } from "react";

function Scooter(){
    const[color,setColor]=useState("red")
    const [make,setMake]=useState("India")
    const[country,setCountry]=useState("China")
    const[year,setYear]=useState("2015")
    const [brand,setBrand]=useState("iphone")
    // const [scooter,setScooter]=useState({color:"red",make:"india",country:"india",year:"2011",brand:"iphone"})
    //     function updateColor(){
    //         setScooter((previousState)=>{return{...previousState,color:"blue"}})
    //     }
    //     console.log('current State',scooter);
    function updatecolor(){ 
        setColor("blue")
    }


    return(
        <>
        <h1>color: {color}</h1>
        <h1>make: {make}</h1>
        <h1>Country: {country}</h1>
        <h1>year: {year}</h1>
        <h1>brand: {brand}</h1>
        <button onClick={updatecolor}>Changecolor</button>
        </>
    )
}

export default Scooter;