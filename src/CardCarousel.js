import React, { useRef } from 'react';
import './CardCarousel.css';
import pic1 from './assets/1.jpeg';
import pic2 from './assets/2.jpeg';
import pic3 from './assets/3.jpeg';
import pic4 from './assets/4.jpeg';
import pic5 from './assets/5.jpeg';
import pic6 from './assets/6.jpeg';

const CardCarousel = () => {
    const images = [pic1, pic2, pic3, pic4, pic5, pic6];
    const containerRef = useRef(null);

    const scroll = (direction) => {
        if (containerRef.current) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="carousel-wrapper">
            <button className="arrow arrow-left" onClick={() => scroll('left')}>&lt;</button>
            <div className="carousel-container" ref={containerRef}>
                {images.map((image, index) => (
                    <div key={index} className="carousel-slide">
                        <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
                    </div>
                ))}
            </div>
            <button className="arrow arrow-right" onClick={() => scroll('right')}>&gt;</button>
        </div>
    );
};

export default CardCarousel;
