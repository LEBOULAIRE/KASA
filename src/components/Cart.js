import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ id, title, cover }) => {
      return (
      <Link to={"/lodging/" + id} className="oneCart">
            <img src={cover} alt={title} className='oneCart--img'/>
            <p className="oneCart--title">{title}</p>
      </Link>
      )
};

export default Cart;
