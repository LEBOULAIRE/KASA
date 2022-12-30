import React from 'react';
import JSON from '../datas/logements.json';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Carrousel = ({arrow}) => {
      const { id } = useParams();

      const { pictures } = JSON.find((lodging) => lodging.id === id);

      const [current, setCurrent] = useState(0);

      const nextImg = () => {
            setCurrent(current === pictures.length - 1 ? 0 : current + 1);
      };
      const prevImg = () => {
            setCurrent(current === 0 ? pictures.length - 1 : current - 1);
      };
      const arrowLeft =
            pictures.length > 1 ? (
                  <div className="main__lodging--arrow-left" onClick={prevImg}>
                       <img src={arrow} alt="fleche de direction gauche" className=''/>
                  </div>
            ) : (
                  ''
            );
      const arrowRight =
            pictures.length > 1 ? (
                  <div className="main__lodging--arrow-right" onClick={nextImg}>
                        <img src={arrow} alt="fleche de direction droit" />
                  </div>
            ) : (
                  ''
            );

      return (
            <main className='main__lodging'>
                  {arrowLeft}
                  {arrowRight}
                  {pictures.map((picture, index) => {
				    return (
					<div key={index} className="main__lodging--img">
						{index === current && (
							<img
								src={picture}
								alt={pictures.description}
								className="lodging__picture"
							/>
						)}
						{index === current && (
							<span className="lodging__picture--number">
								{current + 1}/{pictures.length}
							</span>
						)}
                        
					</div>
				);
			})}
                  
            </main>
      );
};

export default Carrousel;
