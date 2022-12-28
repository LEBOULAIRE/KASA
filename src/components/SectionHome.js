import React from 'react';
import JSON from '../datas/logements.json'
import Cart from './Cart';

const SectionHome = () => {
    return (
        <section className='sectionHome'>
            
            {JSON.map((lodging) => (
           
            <Cart key={lodging.id} title={lodging.title} cover={lodging.cover} id={lodging.id} />
            )
             )}
        </section>
    );
};

export default SectionHome;