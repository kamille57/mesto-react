import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import '../pages/index.css';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({ name: '', link: '' }); 
    
    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard({ name: '', link: '' });
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    return (
        <div className="page">
            <Header />
            <Main
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
            />
            <Footer />

            <PopupWithForm
                title="Редактировать профиль"
                name="editProfile"
                button="Сохранить"
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
            >
                <input type="text" className="popup__input" name="name" placeholder="Введите свое имя" id="name" minLength="2"
                    maxLength="40" required />
                <span id="name-error" className="error error_invalid"></span>
                <input type="text" className="popup__input" name="about" placeholder="О себе" id="hobby" minLength="2"
                    maxLength="200" required />
                <span id="hobby-error" className="error error_invalid"></span>
            </PopupWithForm>

            <PopupWithForm
                title="Новое место"
                name="addPlace"
                button="Создать"
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
            >
                <input type="text" className="popup__input" name="name" placeholder="Название" id="placeName" minLength="2"
                    maxLength="30" required />
                <span id="placeName-error" className="error error_invalid"></span>
                <input type="url" className="popup__input" name="link" placeholder="Ссылка на картинку" id="placeLink" required />
                <span id="placeLink-error" className="error error_invalid"></span>
            </PopupWithForm>

            <PopupWithForm
                title="Редактировать аватар"
                name="editAvatar"
                button="Сохранить"
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
            >
                <input type="url" className="popup__input" name="avatar" placeholder="Ссылка на новый аватар" id="avatarLink"
                    minLength="2" required />
                <span id="avatarLink-error" className="error error_invalid"></span>
            </PopupWithForm>

            <ImagePopup
                card={selectedCard}
                onClose={closeAllPopups}>
            </ImagePopup>
        </div>
    );
}

export default App;