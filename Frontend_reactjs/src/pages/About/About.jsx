import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BRS</h2>
            <p className='fs-17'>This is build as a part of the project so the students can access source of interest books from here for themselves in less than a minute.</p>
            <p className='fs-17'>This is build as a part of the project so the students can access source of interest book from here for themselves in less than a minute.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
