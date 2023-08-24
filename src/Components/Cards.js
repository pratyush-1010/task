import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Cards = ({card}) => {

    const [cur,setCur]=useState("")
    const[disp,setDisp]=useState(" ")
    const [tog,setTog]=useState(<p className='samt'>{card.data_value}</p>)
  useEffect(()=>{
    if(card.cursor == false){
        setCur("not-allowed")
    }
    if(card.button == false || card.button == null){
        setDisp("none")
    }
    if(card.data_type=="image"){
      setTog(<img src={card.data_value} className='imgs'></img>)
    }
  })
  return (
    <div className='bg-white p-5 cardiv ' style={{cursor:cur,height:"500px"}}>
        <p className='cardp text-black'>{card.card_title}</p>
        {/* <img src={card.data_value} alt={card.data_value}></img> */}
        <>{tog}</>
        {/* <br></br> */}
        <p className='text-muted note' style={{fontSize:"20px"}}>{card.note}</p>
        <Link to={`${card.redirect}`} style={{textDecoration:"none",fontSize:"25px"}} className='text-danger link'>
          {card.link_name} 
        </Link>
        <Link to={`${card.redirect}`}>
        <Button style={{display:disp}}>{card.button_name}</Button>
        </Link>
    </div>
  )
}

export default Cards