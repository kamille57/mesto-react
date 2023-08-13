import React, { useState, useEffect } from "react";
import Api from "../utils/Api";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
    const [userName, setUserName] = useState("");
    const [userDescription, setUserDescription] = useState("");
    const [userAvatar, setUserAvatar] = useState("");
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const api = new Api();

        api.getUserInfo()
            .then((data) => {
                setUserName(data.name);
                setUserDescription(data.about);
                setUserAvatar(data.avatar);
            })
            .catch(console.error)

        api.getInitialCards()
            .then((data) => {
                setCards(data);
            })
            .catch(console.error)
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile-info">
                    <img className="profile-info__avatar" src={userAvatar} alt="Ваш аватар." />
                    <h1 className="profile-info__name">{userName}</h1>
                    <button type="button" aria-label="кнопка открытия попапа с информацией о профиле" className="profile-info__edit-button" onClick={onEditProfile} ></button>
                    <button type="button" aria-label="кнопка открытия аватара" className="profile-info__edit-avatar-button" onClick={onEditAvatar} ></button>
                    <p className="profile-info__profession">{userDescription}</p>
                    <button type="button" aria-label="кнопка открытия попапа для добавления карточек" className="profile-info__add-button" onClick={onAddPlace} ></button>
                </div>
            </section>
            <section className="elements-container">
                {cards.map((card) => (
                    <Card key={card._id} card={card} onCardClick={onCardClick} />
                ))}
            </section>
        </main>
    );
}

export default Main;