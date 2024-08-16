import React, { useState } from 'react';
import '../styles/home.css';

import img1 from '../images-and-icons/home-carousel-images/carousel-image-1.jpg';
import img2 from '../images-and-icons/home-carousel-images/carousel-image-2.jpg';
import img3 from '../images-and-icons/home-carousel-images/carousel-image-3.jpg';
import img4 from '../images-and-icons/home-carousel-images/carousel-image-4.jpg';
import img5 from '../images-and-icons/home-carousel-images/carousel-image-5.jpg';
import img6 from '../images-and-icons/home-carousel-images/carousel-image-6.jpg';
import img7 from '../images-and-icons/home-carousel-images/carousel-image-7.jpg';
import img8 from '../images-and-icons/home-carousel-images/carousel-image-8.jpg';

function ImageCarousel() {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8];
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerRow = 4;

    const nextImage = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex + 1) % images.length
        );
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex - 1 + images.length) % images.length
        );
    };

    // Adjust the visible images logic to handle wrapping around
    const visibleImages = [];
    for (let i = 0; i < itemsPerRow; i++) {
        visibleImages.push(images[(currentIndex + i) % images.length]);
    }

    return (
        <div className="carousel-container">
            <button onClick={prevImage} className="carousel-button prev-button">Previous</button>
            <div className="carousel-items">
                {visibleImages.map((image, index) => (
                    <div key={currentIndex + '-' + index} className="carousel-item">
                        <img src={image} alt={`Carousel ${currentIndex + index + 1}`} />
                    </div>
                ))}
            </div>
            <button onClick={nextImage} className="carousel-button next-button">Next</button>
        </div>
    );
}

export default ImageCarousel;
