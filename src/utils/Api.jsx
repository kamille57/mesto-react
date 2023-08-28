export default class Api {
    constructor() {
        this._baseUrl = 'https://mesto.nomoreparties.co/v1/cohort-71';
        this._headers = {
            authorization: '84f0b731-4685-4b31-9185-d609841667ca',
            'Content-Type': 'application/json'
        };
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    _request(url, options) {
        return fetch(url, options).then(this._checkResponse);
    }

    getUserInfo() {
        return this._request(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: this._headers
        });
    }

    setUserInfo(data) {
        return this._request(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        });
    }

    updateAvatar(avatar) {
        return this._request(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: avatar
            })
        });
    }

    getInitialCards() {
        return this._request(`${this._baseUrl}/cards`, {
            headers: this._headers
        });
    }

    addCard(data) {
        return this._request(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(data)
        });
    }

    deleteCard(cardId) {
        return this._request(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        });
    }

    likeCard(cardId) {
        return this._request(`${this._baseUrl}/cards/likes/${cardId}`, {
            method: 'PUT',
            headers: this._headers
        });
    }

    dislikeCard(cardId) {
        return this._request(`${this._baseUrl}/cards/likes/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        });
    }

    changeLikeCardStatus(cardId, like) {
        return this._request(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: like ? "PUT" : "DELETE",
            headers: this._headers,
        });
    }
}