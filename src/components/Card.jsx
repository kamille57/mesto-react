import React from "react";

function Card({ card, onCardClick }) {
  return (
    <article className="element">
       <img className="element__pic" src={card.link} alt={card.name} onClick={() => onCardClick(card)} 
    /> 
      <h3 className="element__text">{card.name}</h3>
      <button type="button" className="element__trash" aria-label="Корзина"></button>
      <div className="element__like-counter">
        <button type="button" className="element__like" aria-label="Лайк"></button>
        <div className="element__counter">{card.likes.length}</div>
      </div>
    </article>
  );
}

export default Card;