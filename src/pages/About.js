import React from 'react';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import data from '../datas/about.json';
import arrow from '../assets/images/arrow.png'
import imgBannerABout from '../assets/images/banner-about-desktop.png';

const About = () => {
      return (
            <div className="bloc__about">
                  <Banner className='bannerHomeOrAbout__Img--home' img={imgBannerABout} alt="Image de montagne"/>
                  <section className='section__about'>  
                  {data.map((about) => (
                        <Collapse key={about.title} title={about.title} content={about.content} arrow={arrow} />
                  ))}
                  </section>
            </div>
      );
};

export default About;
