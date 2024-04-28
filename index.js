var birthdayCard = document.querySelector(".birthday_card");
var frontCard = document.querySelector(".front_card");
var decorate = document.querySelector(".decorate");
var title = document.querySelector(".title");

birthdayCard.addEventListener("click", function () {
    birthdayCard.classList.toggle("tilt");
    frontCard.classList.toggle("open_card");
    decorate.classList.toggle("clean");
    title.classList.toggle("clean");
});