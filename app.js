let input = document.getElementById("color-field");
let setColor = document.getElementById("set-color");
let brush = document.getElementsByClassName("brush");
let body = document.getElementsByTagName("body");

setColor.addEventListener('click', () => {
    brush.style.backgroundColor = input.value
});

for (let i = 0; i < 8000; i++) {
    let div = document.createElement('div')
};
