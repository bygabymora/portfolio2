import React from 'react';
import {Data} from "./Data";
import "./projects.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import {  Pagination } from "swiper";
import SwiperCore, { Autoplay } from 'swiper';
import { BiLinkAlt } from 'react-icons/bi'


const Projects = () => {

    SwiperCore.use([Autoplay])
  return (
    
    <section className="project container section">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">Most of my projects are developed in React.js and uploaded to a repository on Github.</span>

        <Swiper className="project__container"
        loop= {true}
        autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
        grabCursor = {true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
        
        >
            {Data.map(({id, image, title ,sub_title, description, repository, demo}) => {
                return (
                    <div>
                    <SwiperSlide className="project__card" key={id}>
                    <div className="project__top">
                        <a href={demo}>
                        <img src={image} alt="" className="project__img" />
                        </a>
                        <div>
                        <h3 className="project__name">{title}</h3>
                        <br/>
                        <h2 className="project__sub_title">{sub_title}</h2>
                        <br/>
                        </div>
                    </div>
                        <div className="project__description">{description}</div>
                        <br/>
                        <a href={repository} target="_blank" className="button button--flex project_button">
                            Repository <BiLinkAlt class="button__icon"/>
                        </a>
                        <a href={demo} target="_blank" className="button button--flex project_button">
                            Demo <BiLinkAlt class="button__icon"/>
                        </a>
                    </SwiperSlide>
                    </div>

                )
            })}
        </Swiper>
    </section>
  )
}

export default Projects;