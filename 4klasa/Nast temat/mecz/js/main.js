document.querySelector('#home').addEventListener('change', function(evt)  {

    evt.preventDefault();
    console.log(this.value);
    const selectedValue = this.value;
    const visiting = document.querySelector('#visiting');
    const options = visiting.getElementsByTagName('option');

    for (let i = 0; i < options.length; i++) {
        if (options[i].value === selectedValue) {
            options[i].disabled = true;
        } else {
            options[i].disabled = false;
        }
    }

});

document.querySelector('#sub').addEventListener('click', (evt) => {
    
    evt.preventDefault();

    const display = document.querySelector('.display');
    const home = document.querySelector('#home');
    const visiting = document.querySelector('#visiting');
    const homesc = document.querySelector('#home-score');
    const visitingsc = document.querySelector('#visiting-score');
    const overtimeT = document.querySelector('#overtime-true');
    const overtimeF = document.querySelector('#overtime-false');
    const yellow = document.querySelector('#y-cards');
    const red = document.querySelector('#r-cards');
    const penalties = document.querySelector('#penalties');

    if (home.value != 'default' && visiting.value != 'default') {
    display.innerHTML = 
    "<p>Mecz: " + home.value + " " + homesc.value + ":" + visitingsc.value + " " + visiting.value + "</p>"
    } else {
        display.innerHTML = "<p>Wybierz drużyny!</p>"
    }
    if (overtimeT.checked == true)
        display.innerHTML += `<p>Będzie dogrywka</p>`;
    if(overtimeF.checked == true) 
        display.innerHTML += `<p>Nie będzie dogrywki</p>`
    if(yellow.checked == true)
        display.innerHTML += `<p>Będą żółte kartki (pow 0.5)</p>`
    if(red.checked == true)
        display.innerHTML += `<p>Będą czerwone kartki (pow 0.5)</p>`
    if(penalties.checked == true)
        display.innerHTML += `<p>Będą rzuty karne</p>`
    
});