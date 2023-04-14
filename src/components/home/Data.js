import React from 'react'
import CV from'../../assets/docs/Gabriela_Mora_Junior_Frontend_Developer.PDF';
import { BiDownload } from 'react-icons/bi'
import { BsPhoneVibrate } from 'react-icons/bs'
const Data = () => {
  return (
    <div className="home__data">
        <h1 className="home__title"> Gabriela Mora </h1>
        <h3 className="home__subtitle">Front End Developer</h3>
        
        <a href="#contact" className="button button--flex home__button">
            Lets talk!
            <BsPhoneVibrate class="button__icon"/>          
        </a>
        <a href={CV} target="_blank" className="button button--flex home__button">
            Download CV
            <BiDownload class="button__icon"/>       
        </a>
        
    </div>
  )
}

export default Data