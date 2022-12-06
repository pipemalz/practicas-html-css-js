const boxesContainer = document.querySelector("#boxes");
const button = document.querySelector("#button");

button.addEventListener('click', () => {
    boxesContainer.classList.toggle('big');
    console.log(boxesContainer)
});