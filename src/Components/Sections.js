import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import cards from './Json/Card.json'
import { Row,Col, Button } from 'react-bootstrap'
const Sections = ({elm}) => {
      const [limit,setLimit] = useState(3)
      const[disp,setDisp] = useState("")
    const SeeMore=()=>{
        setLimit(16)
        setDisp("none")
    }
    useEffect(()=>{
      if(elm.sec_no==1){
        setDisp("none")
      }
    })
  return (
    <div  className='clr sec mt-5 p-5'>
        <p className='smp my-5'>{elm.title}</p>
        <p className='samt my-5'>{elm.cN}</p>
         <Row style={{backgroundColor:"transparent"}} className='mt-5 g-5 text-center'>
        {
          cards
            .filter(card => card.parent_sec_no === elm.sec_no)
            .slice(0,limit)
            .map(card => (
              <Col md={6} lg={4} sm={12} className=''>
                <Cards card={card} elm={elm}/>
              </Col>
            ))
        }
        <br></br>
       </Row>
        <p onClick={SeeMore} style={{display:disp,fontSize:"20px"}} className='seemore mx-auto mt-5 '>See More</p>
    </div>
  )
}

export default Sections