import React, { useState } from 'react';
import "./header.css";
import { BiCertification, BiHomeHeart, BiUser, BiPhotoAlbum, BiShareAlt, BiGridVertical, BiXCircle } from 'react-icons/bi';
import { MdOutlineWavingHand } from 'react-icons/md';


const Header = () => {
     /*=============== Toggle Menu ===============*/

    const[Toggle, showMenu] = useState(false);
    
  return (
    <header className="header">
        <nav className="nav container">
        
            <a href="index.html" className="nav__logo"><img src={require('../../assets/images/ByGabyMora2.png')} className="r__logo" alt="" />  </a>
            <a href="index.html" className="nav__logo_2"><img src={require('../../assets/images/ByGabyMora2.png')} className="r__logo" alt="" /> <div className="name_logo"></div> </a>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" className="nav__link active-link">
                            <BiHomeHeart className="uil uil-estate nav__icon"/> Home
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <BiUser className="uil uil-user nav__icon"/> About
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" className="nav__link">
                            <BiCertification className="uil uil-file-alt nav__icon"/> Skills
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#projects" className="nav__link">
                            <BiPhotoAlbum className="uil uil-scenery nav__icon"/> Projects
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                            <MdOutlineWavingHand className="uil uil-message nav__icon"/>
                            Contact
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#home" className="nav__link">
                            <BiShareAlt className="uil uil-message nav__icon"/>
                            Social
                        </a>
                    </li>
                </ul>

                <BiXCircle className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}/>
            </div>

            <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
              <BiGridVertical className="uil uil-apps"/>
            </div>
        </nav>
    </header>
  )
}

export default Header