const elementName = document.querySelector("#elname");
const elementContent = document.querySelector("#elcontent");
const main = document.querySelector("main");

const createBtn = document.querySelector("input[type='submit']");

let i = 1;

createBtn.addEventListener("click", function (evt){

    evt.preventDefault();

    const elem = document.createElement(elementName.value);
    elem.innerText = `${elementContent.value} nr ${i}`;
    elem.style.color = "#000";
    elem.style.backgroundColor = "#444444";

    elem.addEventListener("click", function () {
        this.remove();
    });
    i++;
    main.append(elem);
})