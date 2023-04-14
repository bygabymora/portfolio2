import React, {useState} from 'react';
import {FaAngleDoubleUp} from 'react-icons/fa';
import { Button } from './StylesScrollToTop';
  
const ScrollTop = () => {
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 20){
      setVisible(true)
    } 
    else if (scrolled <= 20){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <div>
    <Button> 
     <FaAngleDoubleUp onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none',
     position: 'fixed', 
     bottom: '3.5rem', 
     right: '30px', 
     zIndex:'1001', 
     outline: 'none', 
     cursor: 'pointer', 
     padding: '15px', 
     color:'#051b54',}}/>
  </Button>
  </div>
  );
}
  
export default ScrollTop;