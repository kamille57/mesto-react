import React from 'react';

function ImagePopup(props) {
  return (
    <div className={`popup ${props.card ? 'popup_opened' : ''}`} id="popupCard">
      <div className="popup__container">
        <button type="button" aria-label="кнопка закрытия попапа с развернутым изображением" className="popup__closed" 
          id="cardClose" onClick={props.onClose}></button>
        <figure className="popup__figure">
          <img className="popup__pic" src={props.card ? props.card.link : ''} alt="" />
          <figcaption className="popup__text">{props.card ? props.card.name : ''}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;