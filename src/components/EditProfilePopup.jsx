import React, { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        onUpdateUser({
            name,
            about: description,
        });
    };

    return (
        <PopupWithForm
            title="Редактировать профиль"
            name="editProfile"
            button="Сохранить"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                className="popup__input"
                name="name"
                placeholder="Введите свое имя"
                id="name"
                minLength="2"
                maxLength="40"
                required
                value={name}
                onChange={handleNameChange}
            />
            <span id="name-error" className="error error_invalid"></span>
            <input
                type="text"
                className="popup__input"
                name="about"
                placeholder="О себе"
                id="hobby"
                minLength="2"
                maxLength="200"
                required
                value={description}
                onChange={handleDescriptionChange}
            />
            <span id="hobby-error" className="error error_invalid"></span>
        </PopupWithForm>
    );
}

export default EditProfilePopup;