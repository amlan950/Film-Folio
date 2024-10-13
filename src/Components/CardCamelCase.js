import React from 'react';
import '../component_css/CardCamelCase.css';

export default function CardCamelCase({ title, description, imgUrl }) {
  return (
    <div className="cardContainer">
      <img src={imgUrl} alt={imgUrl} className="cardImage" />
      <div className="cardBody">
        <h5 className="cardTitle">{title}</h5>
        <p className="cardDescription">{description}</p>
      </div>
    </div>
  );
}
