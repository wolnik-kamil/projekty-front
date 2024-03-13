const a = document.querySelector("#a");
const b = document.querySelector("#b");
const c = document.querySelector("#c");
const submit = document.querySelector("#submit");
const display = document.querySelector(".display");
const form = document.querySelector('form')

submit.addEventListener("click", function (evt) {
    
    evt.preventDefault();
    const aVal = parseFloat(a.value);
    const bVal = parseFloat(b.value);
    const cVal = parseFloat(c.value);

    if (isNaN(aVal)||isNaN(bVal)||isNaN(cVal)) {
        display.innerHTML = ("<p>Cos poszlo nie tak... Popatrz na formularz!</p> ")
    } else {
        if (aVal+bVal>cVal && bVal+cVal>aVal && aVal+cVal>bVal){
            const p = (aVal+bVal+cVal)/2;
            const pole = Math.sqrt(p*(p-aVal)*(p-bVal)*(p-cVal));
            display.innerHTML = (`<p>Pole trójkąta wynosi: ${pole.toFixed(2)}</p>`);
            form.className = "obrot";
        }
        else display.innerHTML = ("<p>Z boków a, b i c nie da się stworzyć trójkąta!</p>");
    }

    

})