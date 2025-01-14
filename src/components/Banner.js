import React from 'react';
import './Banner.css';
import cards from '../resources/cards';


const Banner = () => {
    return (
        <div className="banner">
            <div className="slider" style={{ '--quantity': cards.length }}>
                {cards.map((card, i) => 
                    <div className="item" style={{ '--position': i+1 }}>
                        <a href={card.link} target='_blank'><img src={card.img} alt="" /></a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Banner;
