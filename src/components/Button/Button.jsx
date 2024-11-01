import React from 'react'
import Bootstrap from'../bootstrap.css'
import Style from './Button.css'

const Button = (props) => {
  
  const  fcall = () =>{
    return(
      console.log("Function Called")
    )
  }
  return (
    <>
        <button className="m-1 btn btnblack" onClick={()=>{
          true && fcall();
          
        }} >
          {props.logo}
          {props.text}
        </button>
    </>
  )
}

export default Button