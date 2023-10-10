import React from "react";

class Compcode extends React.Component{
    constructor(){
        super();
        this.state = {color:"red",model:"ford"}
    }


    render(){
        
        return(
            <div>
                <h1>My car color is {this.state.color} and model is {this.state.model}</h1>
                <button onClick={()=>{this.setState((prevstate)=>{return{...prevstate,color:"violet"}})}}> Change color from class</button>
            </div>
        )

        }
}

export default Compcode;
