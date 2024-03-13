const prezent = document.querySelector('#prezent');
const catAdd = document.querySelector('#catAdd');
const pushGift = document.querySelector('.pushGift');
const losuj = document.querySelector('.losuj');
const display = document.querySelector('.display');
const gry = ["FC 24", "Minecraft", "GTA V"];
const zabawki = ["LEGO", "Barbie", "Ken"];
const ubrania = ["Koszulka z MC", "Koszulka Realu Madryt", "Spodnie z Prady"];


pushGift.addEventListener("click", function(evt) {
    evt.preventDefault();

    if(catAdd.value == "Gry") {
        gry.push(prezent.value);
    } 
    
    if(catAdd.value == "Zabawki") {
        zabawki.push(prezent.value);

    }
    
    if(catAdd.value == "Ubrania") {
        ubrania.push(prezent.value);
    }


    
})

losuj.addEventListener("click", function(evt) {
    evt.preventDefault();
    const cat = document.querySelector(`input[type='radio']:checked`);
    const imie = document.querySelector('#imie');
    const cookie = document.querySelector('#cookie');

    if(document.querySelector(`input[type='checkbox']:selected`)){
        if(cat.value == "gry") {
            display.innerHTML = `<p>${imie.value} wylosowałeś grę ${gry[Math.floor(Math.random() * gry.length)]}!!!</p>`;
            
        } 
        
        if(cat.value == "zabawki") {
            
            display.innerHTML = `<p>${imie.value} wylosowałeś grę ${zabawki[Math.floor(Math.random() * zabawki.length)]}!!!</p>`;
            
        }
        
        if(cat.value == "ubrania") {
            
            display.innerHTML = `<p>${imie.value} wylosowałeś grę ${ubrania[Math.floor(Math.random() * ubrania.length)]}!!!</p>`;
    
        }
    } else {
        display.inneHTML = "<p>Nakarm reniferka</p>"
    }
    
})
