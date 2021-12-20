let input = document.querySelector("#color-field");
let setColor = document.querySelector("#set-color");
let brush = document.querySelector(".brush");
let body = document.querySelector("body");

setColor.addEventListener('click', () => {
    brush.style.backgroundColor = input.value
});

for (let i = 0; i < 8000; i++) {
    let div = document.createElement('div')
    div.classList.add('square')
    body.appendChild(div)

    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = brush.style.backgroundColor
    })
};

