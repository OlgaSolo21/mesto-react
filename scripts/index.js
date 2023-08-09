const profileEditButton = document.querySelector('.profile__edit-button')
const popupEditButton = document.querySelector('.popup_profile')
const buttonCloseEditButton = popupEditButton.querySelector('.popup__close')
const formElement = document.querySelector('.popup__form')
const nameInput = formElement.querySelector('.popup__input_type_name')
const jobInput = formElement.querySelector('.popup__input_type_job')
const profileTitle = document.querySelector('.profile__title')
const profileSubtitle = document.querySelector('.profile__subtitle')

// константы кнопки addbutton 5пр
const addButtonProfile = document.querySelector('.profile__add-button')
const addPopupButton = document.querySelector('.popup_add')
const closePopupButton = addPopupButton.querySelector('.popup_button')
//const addFormElement = document.querySelector('.popup_profile')

// константы для открытия фото
// const openImg = document.querySelector('.cards__image')
// const openPopupImg = document.querySelector('.open')
// const closeImg = document.querySelector('.popup_close-img')
// const openPopupText = openPopupImg.querySelector('.open_text')
// const openFoto = openPopupImg.querySelector('.open__img')
// const cardTitle = document.querySelector('.cards__title')
// const cardImg = document.querySelector('.cards__image')

//переменные для добавления фото НЕ СДЕЛАНО
// const addCardNew = document.querySelector('.cards__item')
// const placeInput = addFormElement.querySelector('.popup__input_type_place')
// const linkInput = addFormElement.querySelector('.popup__input_type_link')

// пишем функции кнопки добавления данных профиля 4пр
function addPopup() {
    popupEditButton.classList.add('popup_opened')
    nameInput.value = profileTitle.textContent
    jobInput.value = profileSubtitle.textContent
}
function closeEditPopup () {
    popupEditButton.classList.remove('popup_opened')
}
function handleFormSubmit (evt) {
    evt.preventDefault()
    profileTitle.textContent = nameInput.value
    profileSubtitle.textContent = jobInput.value
    closeEditPopup()
    }

// пишем функции кнопки добавления фото 5пр
// функция открытия попап кнопки добавления
function openPopupAdd() {
    addPopupButton.classList.add('popup_opened')
}
// функция закрытия попап кнопки добавления
function closePopupAdd() {
    addPopupButton.classList.remove('popup_opened')
}
// функция сохранения нового фото НЕ СДЕЛАНО
// function handleAddPopup(evt) {
//     evt.preventDefault()
//     placeInput.value = addCardNew
//     linkInput.value = addCardNew
//     initialCards.append(placeInput, linkInput)
//     closePopupAdd()
// }

// пишем функции на попап открытия фото
// function openImageCard() {
//     openPopupImg.classList.add('popup_opened')
// }
// function addImage() {
//     openPopupText.alt = cardTitle.textContent
//     openFoto.src = cardImg.src
// }

// вешаем слушатели на попап профиля
profileEditButton.addEventListener('click', addPopup)
buttonCloseEditButton.addEventListener('click', closeEditPopup)
formElement.addEventListener('submit', handleFormSubmit)

// вешаем слушатель на попап добавления фото
addButtonProfile.addEventListener('click', openPopupAdd)
closePopupButton.addEventListener('click', closePopupAdd)
//addFormElement.addEventListener('submit', handleAddPopup)

// вешаем слушатели на попап открытия фото
// openImg.addEventListener('click', function () {
//     openImageCard();
//     addImage();
// })