//npm install react-star-rating-component --save --force
//will install the star react component
//npm install 

import React, { useState } from "react";
import { FaStar } from 'react-icons/fa';
import './StarRating.css';

export default function StarRating() {

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    const handleStarClick = (ratingValue) => {
        setRating(ratingValue);
        console.log('Selected Rating:', ratingValue);
    };

    return (
        <div className="star-rating-container">
        {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (<label key={ratingValue}>
                <input 
                type="radio" 
                name="rating" 
                value={ratingValue}
                onClick={()=> handleStarClick(ratingValue)}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
                />
                <FaStar 
                className="star" 
                color={ratingValue <= hover || rating ? "#A65221" : "#F2F2F2" } 
                size={30}
                />
                </label>
            );
        })}
        </div>
        );
    };