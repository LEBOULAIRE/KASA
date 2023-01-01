import React from 'react';
import Carrousel from '../components/Carrousel';
import Collapse from '../components/Collapse';
import arrow from '../assets/images/arrow.png';
import Host from '../components/Host';
import Rating from '../components/Rating'
import { useParams } from 'react-router-dom';
import JSON from '../datas/logements.json';
import NotError from '../components/NotError';



const Lodging = () => {
    
    const { id } = useParams();
    const infoLodging = JSON.find((lodging)=> lodging.id === id)
   
    if (infoLodging == null) {
        return <NotError />;
      }
      const {title, location, tags, host, rating, description, equipments} = infoLodging;
    return (
        
        <div className='lodging__home'>

            <Carrousel arrow={arrow}/>

            <div className='block__title-lodging'>
                <div className='title__lodging'>
                <h1>{title}</h1>
                <h2>{location}</h2>
                <div className="tags">
						{tags.map((tag) => {
							return (
								<div key={`${tag}`} className="tag" >
									{tag}
								</div>
							);
						})}
					</div>
                </div>

                <div className='host'>
                <Host host={host}/>
                <Rating rating={rating} title={title}/>
                </div>
            </div>

            <div className='bloc__colapse__lodging'>
            <Collapse title="Description" arrow={arrow} content={description}/>
            <Collapse title="Equipements" arrow={arrow} content={
						<ul className="lodging-info__list">
							{equipments.map((equipment) => {
								return <li key={equipment}> {equipment}</li>;
							})}
						</ul>
					}/>
            </div>
        </div>
    );
};

export default Lodging;