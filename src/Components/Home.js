import React, { useState } from 'react'
import section from './Json/Section.json'
import Carousel1 from './Carousel1'
import Sections from './Sections'
import { Card, Col, Row } from 'react-bootstrap'
import cards from './Json/Card.json'
import Cards from './Cards'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import Tooltip from './Tooltip'
const Home = () => {
   
    const[icon,setIcon]=useState(faMoon)

    const Mode=()=>{
      if(icon==faMoon){
      setIcon(faSun)
      }
      else{
        setIcon(faMoon)
      }
    }
   
  return (
    <div className='container-fluid clr ' style={{width:"100%"}}>
        <Carousel1/> 
       <Row style={{backgroundColor:"transparent"}}>
        {
          section.map((elm,ind)=>{
            return(
              <Col md={12}>
                <Sections elm={elm}></Sections>
              </Col>
            )
          })
        }
       </Row>
      <p className='icon' style={{color:"black !important"}}><FontAwesomeIcon icon={icon} onClick={Mode} style={{color:"black !important"}}></FontAwesomeIcon></p>
      <Tooltip/>
    </div>
  )
}

export default Home