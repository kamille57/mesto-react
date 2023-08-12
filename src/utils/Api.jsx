export default function Api() {
    const baseUrl = 'https://mesto.nomoreparties.co/v1/cohort-71';
    const headers = {
        authorization: '84f0b731-4685-4b31-9185-d609841667ca',
        'Content-Type': 'application/json'
    };

    function checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    function request(url, options) {
        return fetch(url, options).then(checkResponse);
    }

    function getUserInfo() {
        return request(`${baseUrl}/users/me`, {
            method: 'GET',
            headers: headers
        });
    }

    function updateUserInfo(data) {
        return request(`${baseUrl}/users/me`, {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        });
    }

    function updateUserAvatar(data) {
        return request(`${baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify({
                avatar: data.avatar
            })
        });
    }

    function getInitialCards() {
        return request(`${baseUrl}/cards`, {
            headers: headers
        });
    }

    function addCard(data) {
        return request(`${baseUrl}/cards`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        });
    }

    function deleteCard(cardId) {
        return request(`${baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: headers
        });
    }

    function likeCard(cardId) {
        return request(`${baseUrl}/cards/likes/${cardId}`, {
            method: 'PUT',
            headers: headers
        });
    }

    function dislikeCard(cardId) {
        return request(`${baseUrl}/cards/likes/${cardId}`, {
            method: 'DELETE',
            headers: headers
        });
    }

    return {
        getUserInfo,
        updateUserInfo,
        updateUserAvatar,
        getInitialCards,
        addCard,
        deleteCard,
        likeCard,
        dislikeCard
    };
}