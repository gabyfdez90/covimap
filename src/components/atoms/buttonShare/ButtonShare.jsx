import React from 'react'
import "./buttonShare.css"
import share from "../../shareIcons/share-solid 1.png";

const ButtonShare = ({color, icon}) =>{
  return (
    <div>
      <button className='boton'> 
      <img src= {icon} alt="icono" height="20px" width="20px"/> </button>  
      <button>hola</button>
      <button><img src={share} alt="icono" height="20px" width="20px"/></button>
    </div>
  )
}

export default ButtonShare;

//style = {{backgroundColor: color}}