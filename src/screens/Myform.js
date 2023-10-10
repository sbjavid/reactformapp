import { useState } from "react";

function Myform(){
    const [inputs,setInputs]=useState({age:25,countrt:"india"})
    // const[email,setEmail]=useState()
    // const[name,setName]=useState()
    // const[age,SetAge]=useState()
    
    
    function handlesubmit(e){
        e.preventDefault()
        // console.log(e)
        // console.log(e.target[0].value);
        // console.log(name)
        // console.log(inputs)
        console.log(inputs)
        
    }
    
  function handleChange(e){
    const name=e.target.name
    const value=e.target.value
    setInputs((previousState)=>{return {...previousState,[name]:value}})
  }
  
    
    return(
        <>
        <form onSubmit={handlesubmit}>
           <label>username</label>
           <input type="text" name="name"
           onChange={handleChange}></input>
           <label>Age</label>
           <input type="number"  name="age" onChange={handleChange} value={inputs.age}></input>
           <label>E-Mail</label>
           <input type="E-mail"  name="email" onChange={handleChange}></input>
           <label>Country:<select name="country" onChange={handleChange} value={inputs.country}>
            
            <option value="india">india</option>
            <option value="Chennai">Chennai</option>
            </select></label>
            <label> Enter about you:<textarea></textarea></label>
           <button>Save</button>
           
        </form>
        
        
        
        
        </>
    )

}

export default Myform;