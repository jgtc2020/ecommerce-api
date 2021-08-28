import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import { MdFavoriteBorder } from 'react-icons/md';


const Card = ({ item }) => {
    return (
      <React.Fragment>
        <div
            data-aos='fade-up'
            className='col-12 col-md-6 col-lg-4 col-xl-3'
          >
            <div className='card-ecommerce'>
            <i className="icon-favorites-card far fa-heart" />
            <img className="img" src={item.image} alt="" />
            <h1 className="price">{item.price}</h1>
             <h1 className="name">{item.name}</h1>
             <button className="btn" type="button" name="button">Comprar</button>
            </div>
        </div>
        </React.Fragment>
    );
};

export default Card;
