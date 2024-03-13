//dane podst
const userName = document.querySelector("#userName");
const serviceDate = document.querySelector("#serviceDate");
const vehicleType = document.querySelector("#vehicleType");
const extraDiscount = document.querySelector("#extraDiscount");

//opony
const tireReplacement = document.querySelector("#tireReplacement");
const tireRepl = document.querySelector(".tireRepl");
const tires = document.querySelector("#tires");
const wheelRim = document.querySelector(".wheelRim");
const wheel = document.querySelector("#wheel");
const pricing = document.querySelector(".pricing");
const steel = document.querySelector("#steel");
const alu = document.querySelector("#alu");

//dodatkowe uslugi
const additionalServices = document.querySelector("#additionalServices");
const addServ = document.querySelector(".addServ");
const wipers = document.querySelector("#wipers");
const lights = document.querySelector("#lights");

// wyswietlanie
const display = document.querySelector(".display");
const form = document.querySelector("form");

// opcje z wymiana opon
tireReplacement.addEventListener('change', function(){
    tireRepl.classList.toggle("hideElement");
});

tires.addEventListener('click', function(){
    wheelRim.classList.remove('hideElement');
});

wheel.addEventListener('click', function(){
    wheelRim.classList.add('hideElement');
});


// opcje z dodatk. uslugami
additionalServices.addEventListener('change', function(){
    addServ.classList.toggle("hideElement");
})

// Znajdowanie wartości
form.addEventListener("submit", function(evt) {
    evt.preventDefault();

    let totalPrice = 0;
    display.innerHTML = `<p>imię klienta: ${userName.value}</p>`;
    display.innerHTML += `<p>data wizyty: ${serviceDate.value}</p>`;

    if (vehicleType.value == 0) {
        display.innerHTML += `<p>Wybierz typ nadwozia!</p>`;
    } 
    else {

        // ceny opon/kół    
        if (tireReplacement.checked) {
            if(wheel.checked){
                totalPrice+=parseInt(wheel.value);
            }
        }

        if(tires.checked) {
            if(steel.checked){
                totalPrice+=parseInt(steel.value);
            } 
            else {
                totalPrice+=parseInt(alu.value);
            }
        }


        // ceny dodatkowych uslug
        if (wipers.checked) {
            totalPrice+=parseInt(wipers.value);
        }

        if (lights.checked) {
            totalPrice+=parseInt(lights.value);
        }


        // ostateczny mnoznik 

        totalPrice *= vehicleType.value;

        pricing.innerHTML = totalPrice*extraDiscount.value;
    }
});

