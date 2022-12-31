import React from 'react';
import starOrange from "../assets/images/star_orange.svg";
import starWhite from "../assets/images/star_white.svg";

const Rating = ({rating}) => {
    const range = [1, 2, 3, 4, 5];

    return (
        <div className="host__rate">
    
        {range.map((rangeElem, index) =>
            rating >= rangeElem ? 
            <img src={starOrange} alt='Etoile orange' key={index} className="star"/> : <img src={starWhite} alt='Etoile grise' key= {index} className="star"/> 
        )}
    </div>
    );
};

export default Rating;