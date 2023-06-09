import React, {useRef, useState} from "react";
import emailjs from '@emailjs/browser'
import { BiMessageAdd } from 'react-icons/bi'

const ContactUs = () => {
  const form = useRef();
    
    const [name, setName]= useState('');
    const [email, setEmail]= useState('');
    const [message, setMessage]= useState('');


    const sendEmail = (e) => {
      e.preventDefault();
       
      emailjs.sendForm("service_6iczdrm","template_km5bld2", form.current, '7AxUQOw9AB5tGREc1')
        .then((result) => {
            alert ('Message sent, thank you for contacting me');
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setName('');
        setEmail('');
        setMessage(''); 
    };
    const tab = <>&nbsp;&nbsp;</>;

  return (
    
    <div className="contact__content">
    <h3 className="contact__title">Send me a message</h3>

    <form className="contact__form" ref={form} onSubmit={sendEmail}>

        <div className="contact__form-div">
            <lable className="contact__form-tag">Name*</lable>
            <input type="text" name="user_name" className= 'contact__form-input' onChange={e=>setName(e.target.value)} value={name} required />
        </div>
      
        <div className="contact__form-div">
            <lable className="contact__form-tag">Email*</lable>
            <input type="email" name="user_email" className= 'contact__form-input' onChange={e=>setEmail(e.target.value)} value={email} required/>
        </div>

        <div className="contact__form-div">
            <lable className="contact__form-tag">Message*</lable>
            <textarea name="message" className='contact__form-input contact__message' onChange={e=>setMessage(e.target.value)} value={message} required/>
        </div>
        <button className="button button--flex btn-contact">
        <span>Send Message {tab} </span> 
        <BiMessageAdd/>    
        </button>
    </form>
</div>
  )
}

export default ContactUs