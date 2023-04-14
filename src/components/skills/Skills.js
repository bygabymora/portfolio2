import React from 'react';
import './skills.css';
import { FaHtml5, FaCss3, FaJsSquare, FaBootstrap, FaGitAlt, FaReact, FaAws, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiMui, SiMongodb, SiTailwindcss } from 'react-icons/si';
import { TbSeo } from 'react-icons/tb'

const Skills = () => {
  return (
    <div className="skills__content">
    <section className="skiils section" id="skills">
        <h2 className="section__title">Skills</h2>
        <br/>
        <div className="skills__container container grid skills__box">
            <div className="skills__group">
                <div className="skills__data">
                  <FaHtml5/>
                  <h3 className="skills__name">HTML5</h3>
                </div>
                <div className="skills__data">
                  <FaCss3/>
                  <h3 className="skills__name">CSS3</h3>
                </div>
                <div className="skills__data">
                  <FaJsSquare/>
                  <h3 className="skills__name">JavaScript ES6</h3>
                </div>
                <div className="skills__data">
                  <FaReact/>
                  <h3 className="skills__name">React.js</h3>
                </div>
                <div className="skills__data">
                    <FaGitAlt/>
                    <h3 className="skills__name">Git Version Control</h3>
                </div>
                <div className="skills__data">
                    <FaAws/>
                    <h3 className="skills__name">AWS</h3>
                </div>
              </div>
              <div className="skills__group">
                
                <div className="skills__data">
                    <FaNodeJs/>
                    <h3 className="skills__name">Node.js</h3>
                </div>
                <div className="skills__data">
                    <SiTypescript/>
                    <h3 className="skills__name">TypeScript</h3>
                </div>       
                <div className="skills__data">
                    <FaBootstrap/>
                    <h3 className="skills__name">BootStrap</h3>
                </div>
                <div className="skills__data">
                    <SiMui/>
                    <h3 className="skills__name">MUI</h3>
                </div>
                <div className="skills__data">
                    <SiTailwindcss/>
                    <h3 className="skills__name">Tailwind</h3>
                </div>
                <div className="skills__data">
                    <SiMongodb/>
                    <h3 className="skills__name">MongoDB</h3>
                </div>
                <div className="skills__data">
                    <TbSeo/>
                    <h3 className="skills__name">SEO optimization</h3>
                </div>
         </div>
      </div>
    </section>
    </div>
  )
}

export default Skills