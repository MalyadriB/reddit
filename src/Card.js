import React, { useRef } from 'react';
import './Card.css';
import CardCarousel from './CardCarousel';
import FeedContainer from './FeedContainer/FeedContainer';


const Card = () => {


    return (
        <div>
            <div style={{width:'100%',height:'10vh'}}> <CardCarousel /></div>
            <div style={{marginTop:'8vh', width:'50vh', }}><FeedContainer/></div>
        </div>


    );
};

export default Card;
