import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Slide = ({ele}) => {
    const[btn1,setBtn] =useState(" ")

    useEffect(()=>{

        if(ele.button === false){
            // return(
                setBtn("none")
                // )
            }
            else{
                setBtn("")
            }
        },[])
  return (
    <div className='m-5 p-5 slide'>
    <p className='smp'>{ele.text}</p>
    <p style={{fontSize:"20px"}} className='my-5 samt1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
    <Link to={`/${ele.link}`}>
    <button style={{display:btn1,fontSize:"20px"}} className='btn btn-primary px-5 py-2 carbut rounded-pill mb-5'>{ele.btn_name}</button>
    </Link>
    
</div>
  )
}

export default Slide