import react from 'react'

export default function Coderbase(props){
    const {companyInfo}=props
    const {name,profile }=companyInfo
    return(
        <div>
        <h1> welcome to {name} {profile}</h1>
        </div>
    )
}