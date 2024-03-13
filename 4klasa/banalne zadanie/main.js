const a1 = document.querySelector('#hmanyB');
const b1 = document.querySelector('#hmanyP');
const a2 = document.querySelector('#hmanyB2');
const b2 = document.querySelector('#hmanyP2');
const val1 = document.querySelector('.val1');
const val2 = document.querySelector('.val2');
const submit = document.querySelector('.wynik')
const display = document.querySelector('.display')

function sum(n1, n2){
    return n1 + n2;
}

function mnoz(n1, n2){
    return n1 * n2;
}



submit.addEventListener("click", function (evt) {

    evt.preventDefault();

    const a1Val = parseInt(a1.value);
    const b1Val = parseInt(b1.value);
    const a2Val = parseInt(a2.value);
    const b2Val = parseInt(b2.value);
    val1.innerHTML = `Wartość bilonu:<br> ${mnoz(a1Val, b1Val)}`;
    val2.innerHTML = `Wartość banknotu:<br> ${mnoz(a2Val, b2Val)}`;
    display.innerHTML = `Wartość Twoich środków:<br> ${sum(
        mnoz(a1Val, b1Val), mnoz(a2Val, b2Val)
    )}`;

})

