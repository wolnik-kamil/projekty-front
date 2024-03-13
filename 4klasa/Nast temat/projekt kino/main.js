const seat = document.querySelector('#seat');
const row = document.querySelector('#row');
const sub = document.querySelector('#submit');
const right = document.querySelector('.right');


sub.addEventListener("click", function (evt) {
    evt.preventDefault();
    const seatV = parseInt(seat.value);
    const rowV = parseInt(row.value);
    
    cinemaG(seatV, rowV, 8);
})


function cinemaG(seatV, rowV, ticketPrice) {
    let cinema = document.querySelector(".cinema");
    cinema.innerHTML = '';

    let price =  document.querySelector(".price");
    price.textContent = '';

    let selectedSeats = [];

    for ( let i = 1; i<= rowV; i++) {
        let rowElement = document.createElement('div');
        rowElement.classList.add('row');

        for (let z = 1; z<=seatV; z++) {
            let seatElement = document.createElement('button');
            seatElement.classList.add('couch');
            seatElement.innerHTML = '<i class="fas fa-couch"></i> ' + z;
            seatElement.setAttribute('row-count', i);
            seatElement.setAttribute('seat-count', z);
            seatElement.addEventListener('click', function() {
                toggleClass(this, 8, selectedSeats);
            });
            rowElement.appendChild(seatElement);
        }
        cinema.appendChild(rowElement);
    }

    
}

function toggleClass(seatElement, ticketPrice, selectedSeats) {
    seatElement.classList.toggle('red');

    let rowAt = parseInt(seatElement.getAttribute('row-count'));
    let seatAt = parseInt(seatElement.getAttribute('seat-count'));

    let seatArray = selectedSeats.findIndex(function(p) {
        return p.rowAt === rowAt && p.seatAt === seatAt;
    });

    if (seatArray === -1) 
        selectedSeats.push({rowAt: rowAt, seatAt: seatAt});
    else 
        selectedSeats.splice(seatArray, 1);
    let finalPrice = ticketPrice * selectedSeats.length;
    let price = document.querySelector(".price");
    price.textContent = 'Total: €' + finalPrice;

}