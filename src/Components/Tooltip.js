import { useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'

function Tooltips() {
  const[theme,setTheme]=useState("light-theme")
  const[icon,setIcon]=useState(faMoon)
  const[mode,setMode]=useState("Dark")
  const Mode=()=>{
    if(icon==faMoon){
    setIcon(faSun)
    setMode("Light")
    setTheme("dark-theme")
    }
    else{
      setIcon(faMoon)
    setMode("Dark")
    setTheme("light-theme")


    }
  }
  useEffect(()=>{
    document.body.className=theme;
},[theme])
  return (
    <>
      {['bottom'].map((placement) => (
        <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
            <Tooltip id={`tooltip-${placement}`}>
            Switch to {mode} Mode
            </Tooltip>
          }
        >
          <p variant="secondary" className='icon' onClick={Mode}><FontAwesomeIcon icon={icon}></FontAwesomeIcon></p>
        </OverlayTrigger>
      ))}
    </>
  );
}

export default Tooltips;