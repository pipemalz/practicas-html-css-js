const boxesContainer = document.querySelector("#boxes");
const button = document.querySelector("#button");

button.addEventListener('click', () => {
    boxesContainer.classList.toggle('big');
    console.log(boxesContainer)
});

for(let i = 0; i < 4; i++){
    for(let j =0; j < 4; j++){
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.backgroundPosition = `${-j*125}px ${-i*125}px`
        boxesContainer.appendChild(box);
    }
}