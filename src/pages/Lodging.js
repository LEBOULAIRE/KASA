import React from 'react';
import Carrousel from '../components/Carrousel';
import arrow from '../assets/images/arrow.png'


const Lodging = () => {
 

    return (
        <div className='lodging__home'>
            <Carrousel arrow={arrow}/>
        </div>
    );
};

export default Lodging;