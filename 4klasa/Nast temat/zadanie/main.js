const a = document.querySelector('#a');
const b = document.querySelector('#b');

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');

const wynik = document.querySelector('.wynik');

function sum(n1, n2){
    return n1 + n2;
}

function odej(n1, n2){
    return n1 - n2;
}

function mnoz(n1, n2){
    return n1 * n2;
}

function dziel(n1, n2){
    if (n2== 0)
        return "Nie dzielimy przez 0";
    if (n1==0)
        return "Nieskończoność";
    else
        return n1/n2;
}

btn1.addEventListener("click", function (evt) {

    evt.preventDefault();

    const aVal = parseInt(a.value);
    const bVal = parseInt(b.value);
    wynik.innerHTML = `wynik to: ${sum(aVal, bVal)}`;

})

btn2.addEventListener("click", function (evt) {

    evt.preventDefault();

    const aVal = parseInt(a.value);
    const bVal = parseInt(b.value);
    wynik.innerHTML = `wynik to: ${odej(aVal, bVal)}`;

})

btn3.addEventListener("click", function (evt) {

    evt.preventDefault();

    const aVal = parseInt(a.value);
    const bVal = parseInt(b.value);
    wynik.innerHTML = `wynik to: ${mnoz(aVal, bVal)}`;

})

btn4.addEventListener("click", function (evt) {

    evt.preventDefault();

    const aVal = parseInt(a.value);
    const bVal = parseInt(b.value);
    wynik.innerHTML = `wynik to: ${dziel(aVal, bVal)}`;

})