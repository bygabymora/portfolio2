import React from 'react';
import ContactUs from './ContactUs';
import { BiMailSend, BiArrowFromLeft }  from 'react-icons/bi';
import { BsWhatsapp,BsTelephoneForward, BsLinkedin }  from 'react-icons/bs'
import './contact.css'

const Contact = () => {
  return (
    <section  className='contact section' id='contact'>
    <div className='contact__container'>
    <h1 className="section__title">Contact me!</h1>
    <span className="section__subtitle">If you have any project where you think I could be useful, 
        feel free to contact me!
    </span>
      <div className= 'contact__container container grid'>
       <div className="contact__content">
          <div className='contact__card'>
              <BsTelephoneForward/> <BsWhatsapp/> 
                  <h3 className="contact__card-title">Phone & WhatsApp</h3>
                  <span className="contact__card-data">+57 302 201 2043 </span>
                  <a href= "https://wa.me/573022012043?text=Hi!%20I'm%20interested%20in%20your%20services%20as%20a%20web%20developer." className="contact__button" target="_blank">
                  Call me! <BiArrowFromLeft/>
                  </a>
          </div>
          <div className='contact__card'>
            <BiMailSend/>
            <h3 className="contact__card-title">Email</h3>
            <span className="contact__card-data">gaby@bygabymora.com </span>
            <a href="mailto:gaby@bygabymora.com" className="contact__button" target="_blank">
            Write to me! <BiArrowFromLeft/>
            </a>
          </div>
          <div  className='contact__card'>
            <BsLinkedin/>
            <h3 className="contact__card-title">LinkedIn</h3>
            <span className="contact__card-data">bygabymora</span>
            <a href= 'https://www.linkedin.com/in/bygabymora/' className="contact__button" target="_blank">
            Connect with me! <BiArrowFromLeft/>
            </a>
          </div>
        </div>
        
      <ContactUs/>  
    </div>
    </div>
    </section>
  )
}

export default Contact