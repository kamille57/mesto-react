import React from 'react';

function Main() {
    return (
        <main className="content">
            <section className="profile">
                <div className="profile-info">
                    <img className="profile-info__avatar" alt="Ваш аватар." />
                    <h1 className="profile-info__name"></h1>
                    <button type="button" aria-label="кнопка открытия попапа с информацией о профиле" className="profile-info__edit-button"></button>
                    <button type="button" aria-label="кнопка открытия аватара" className="profile-info__edit-avatar-button"></button>
                    <p className="profile-info__profession"></p>
                    <button type="button" aria-label="кнопка открытия попапа для добавления карточек" className="profile-info__add-button"></button>
                </div>
            </section>
            <section className="elements-container">
            </section>
        </main>
    );
}

export default Main;