import React from 'react';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import data from '../datas/about.json';

const About = () => {
      return (
            <div className="bloc__about">
                  <Banner />

                  {data.map((about) => (
                        <Collapse key={about.title} title={about.title} content={about.content} />
                  ))}
            </div>
      );
};

export default About;
