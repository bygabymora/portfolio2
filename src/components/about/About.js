import React from 'react'
import "./about.css";

const About = () => {

 

  return (
       <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <div className="about__container container grid">
        <img src={require('../../assets/images/Journey.png')} alt="about img" className="about__img" />
        <div className="about__data">
           <p className="about__description">
           Hi there, <br/>
           I'm thrilled to share with you my journey in programming and how it led me to become a Software Developer/Front End Developer 
           <strong> specializing </strong> in modern apps.
           <br/>
          It all began ten years ago when I was introduced to <strong>OOP </strong> while studying at Uni. 
          I started with <strong>Java</strong> and started using <strong>JavaScript </strong> and <strong>HTML/CSS </strong> 
           for UI development. <br/>
          Later on, while selling keto food via Instagram, I started working with <strong> Odoo </strong> and 
          its online store. I wasn't satisfied with how it behaved, so I modified the <strong>Front-End </strong> 
          from scratch. Soon, this became my side hustle as I started doing it for others.
          <br/>
          Eventually, I sold the recipes and decided to change my career path. 
          Since then, I've been honing my skills as a Software Developer with a specialization in modern apps.
          I'm always excited to take on new challenges and expand my skill-set. If you're interested in collaborating or have any opportunities, feel free to <a className='about_contact' href='#contact'><strong>reach out </strong></a>.

                 </p>
            </div>
        </div>
    </section>
  )
}

export default About