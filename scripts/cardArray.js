const initialCards = [
    {
        name: 'Калининград',
        link: 'https://images.unsplash.com/photo-1531000164940-cde686a49bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
        name: 'Алтайский край',
        link: 'https://images.unsplash.com/photo-1596003903067-bf5762ad5c19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80'
    },
    {
        name: 'Байкал',
        link: 'https://images.unsplash.com/photo-1490879112094-281fea0883dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80'
    },
    {
        name: 'Карачаево-Черкессия',
        link: 'https://images.unsplash.com/photo-1635530043255-eb163c579d4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
        name: 'Сочи',
        link: 'https://images.unsplash.com/photo-1567245597540-5232c358e457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
    },
    {
        name: 'Санкт-Петербург',
        link: 'https://images.unsplash.com/photo-1610045129185-a421e70e755f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=417&q=80'
    },
    {
        name: 'Сочи',
        link: 'https://images.unsplash.com/photo-1567245597540-5232c358e457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
    },
    {
        name: 'Санкт-Петербург',
        link: 'https://images.unsplash.com/photo-1610045129185-a421e70e755f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=417&q=80'
    }
];

// находим список ul
const cardsElement = document.querySelector('.cards__elements')
// находим template по id и получаем достум в контенту
const template = document.querySelector('.card_template').content

// функция рендеринга массива
function renderArray() {
    initialCards.forEach(renderCard)
}
//функция рендеринга карточек из массива (перебираем массив и добавляем карточки)
function renderCard(elements) {
    // находим и клонируем содержимое темплейта
    const templateElement = template.cloneNode(true)
    // наполняем содержимым темплейт
    templateElement.querySelector('.cards__image').src = elements.link
    templateElement.querySelector('.cards__title').textContent = elements.name

    setListenerTemplate(templateElement)
    // отображаем на странице массив
    cardsElement.append(templateElement)
}
renderArray();

// пишем функцию для кнопок удаление и лайк
function setListenerTemplate(card) {
    const trashButton = card.querySelector('.cards__trash')
    trashButton.addEventListener('click', trashCard)

    const likeButton = card.querySelector('.cards__like')
    likeButton.addEventListener('click', likeCard)

    const openImg = card.querySelector('.cards__image')
    openImg.addEventListener('click', openCard)
}

// функция лайка карточки (тема 3 урок 8 5 спринт)
function likeCard(evt) {
    const likeCardItem = evt.target.classList.toggle('cards__like_active');
    likeCardItem.setAttribute('disabled', true);
}

// функци удаления карточки
function trashCard(evt) {
    const trashCardItem = evt.target.closest('.cards__item');
    trashCardItem.remove();
}

//НА ЭТОМ МОМЕНТЕ НЕ СДЕЛАНО
const openCardItem = document.querySelector('.open_image')
const openPopupText = openCardItem.querySelector('.open_text')
const openFoto = openCardItem.querySelector('.open__img')
const cardTitle = document.querySelector('.cards__title')
const cardImg = document.querySelector('.cards__image')
// функция открытия фото в карточке
function openCard() {

    openCardItem.classList.add('popup_opened')


    openPopupText.value = cardTitle.textContent
    openFoto.src = cardImg.src
}



