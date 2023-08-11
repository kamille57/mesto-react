import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../pages/index.css'
import '../App.css'


function App() {

  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />

      <div className="popup popup_type_add-pic" id="popupAdd">
        <div className="popup__container">
          <button type="button" aria-label="кнопка закрытия попапа добавления картинки" className="popup__closed"
            id="addClose"></button>
          <form className="popup-form" method="post" action="#" id="popupAddForm" name="ProfileAdd" noValidate>
            <fieldset className="popup-form__set">
              <h2 className="popup-form__heading">Новое место</h2>
              <input type="text" className="popup__input" name="name" placeholder="Название" id="placeName" minLength="2"
                maxLength="30" required />
              <span id="placeName-error" className="error error_invalid"></span>
              <input type="url" className="popup__input" name="link" placeholder="Ссылка на картинку" id="placeLink" required />
              <span id="placeLink-error" className="error error_invalid"></span>
              <button type="submit" aria-label="кнопка сохранения пользовательской карточки в галерею"
                className="popup-form__save-button popup-form__save-button_valid" id="addSaveButton">Создать</button>
            </fieldset>
          </form>
        </div>
      </div>

      <div className="popup popup_type_update-avatar" id="popupAvatar">
        <div className="popup__container">
          <button type="button" aria-label="кнопка закрытия попапа обновления аватара" className="popup__closed"
            id="avatarClose"></button>
          <form className="popup-form" method="post" action="#" id="popupAvatarUpdate" name="AvatarUpdate" noValidate>
            <fieldset className="popup-form__set">
              <h2 className="popup-form__heading">Обновить аватар</h2>
              <input type="url" className="popup__input" name="avatar" placeholder="Ссылка на новый аватар" id="avatarLink"
                minLength="2" required />
              <span id="avatarLink-error" className="error error_invalid"></span>
              <button type="submit" aria-label="кнопка сохранения пользовательского аватара"
                className="popup-form__save-button popup-form__save-button_valid" id="updateAvatarButton">Сохранить</button>
            </fieldset>
          </form>
        </div>
      </div>

      <div className="popup popup_type_profile-edit" id="popupEdit">
        <div className="popup__container">
          <button type="button" aria-label="кнопка закрытия попапа редактирования профиля" className="popup__closed"
            id="editClose"></button>
          <form className="popup-form" method="post" action="#" id="popupEditForm" name="ProfileEdit" noValidate>
            <fieldset className="popup-form__set">
              <h2 className="popup-form__heading">Редактировать профиль</h2>
              <input type="text" className="popup__input" name="name" placeholder="Введите свое имя" id="name" minLength="2"
                maxLength="40" required />
              <span id="name-error" className="error error_invalid"></span>
              <input type="text" className="popup__input" name="about" placeholder="О себе" id="hobby" minLength="2"
                maxLength="200" required />
              <span id="hobby-error" className="error error_invalid"></span>
              <button type="submit" aria-label="кнопка сохранения информации профиля"
                className="popup-form__save-button popup-form__save-button_valid">Сохранить</button>
            </fieldset>
          </form>
        </div>
      </div>

      <div className="popup popup_type_show-pic" id="popupCard">
        <div className="popup__container">
          <button type="button" aria-label="кнопка закрытия попапа с развернутым изображением" className="popup__closed"
            id="cardClose"></button>
          <figure className="popup__figure">
            <img className="popup__pic" />
            <figcaption className="popup__text"></figcaption>
          </figure>
        </div>
      </div>

      <div className="popup popup_type_delete-confirm" id="popupDeleteConfirm">
        <div className="popup__container">
          <button type="button" aria-label="кнопка закрытия попапа подтверждения удаления" className="popup__closed"
            id="deleteClose"></button>
          <form className="popup-form" method="post" action="#" id="formDeleteConfirm" name="DeleteConfirm" noValidate>
            <fieldset className="popup-form__set">
              <h2 className="popup-form__heading">Вы уверены?</h2>
              <button type="submit" aria-label="кнопка подтверждения удаления карточки"
                className="popup-form__save-button popup-form__save-button_valid">Да</button>
            </fieldset>
          </form>
        </div>
      </div>

    </div>
  )
}

export default App