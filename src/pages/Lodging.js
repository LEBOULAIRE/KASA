import React from 'react';
import Carrousel from '../components/Carrousel';
import Collapse from '../components/Collapse';
import arrow from '../assets/images/arrow.png';
import { useParams } from 'react-router-dom';
import JSON from '../datas/logements.json';


const Lodging = () => {
    
    const { id } = useParams();
    const infoLodging = JSON.find((lodging)=> lodging.id === id)
    const {title, location, tags, host, rating, description, equipments} = infoLodging;
   
    // Faire la liste des equipements
  
    return (
        <div className='lodging__home'>
            <Carrousel arrow={arrow}/>

            <div className='bloc__colapse__lodging'>
            <Collapse title="Description" arrow={arrow} content={description}/>
            <Collapse title="Equipements" arrow={arrow} content={
						<ul className="lodging-info__list">
							{equipments.map((equipment) => {
								return <li key={`${equipment}`}> {equipment}</li>;
							})}
						</ul>
					}/>
            </div>
        </div>
    );
};

export default Lodging;