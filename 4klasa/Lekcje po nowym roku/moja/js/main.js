const name = document.querySelector("#name");
const display = document.querySelector(".display");

const sub = document.querySelector("#sub");

sub.addEventListener("submit", function(evt) {
    evt.preventDefault();
    display.innerHTML = `<p>imię klienta: ${name.value}</p>`;
});

