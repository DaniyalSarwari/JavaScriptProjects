const movie = document.getElementById('movie');
const movieContainer = document.querySelector('.container');
const availableSeats = document.querySelectorAll('.row .seat:not(.occupied)');
const seatCounter = document.getElementById('count');
const totalPrice = document.getElementById('total');
let ticketPrice = +movie.value;





function updateSelectedCount() {
    const selectedSeats = movieContainer.querySelectorAll('.seat.selected');
    const countSelectedSeats = selectedSeats.length;
    seatCounter.innerText = countSelectedSeats;
    totalPrice.innerText = countSelectedSeats * ticketPrice;
}

//Event listener to ckeck click on seats
movieContainer.addEventListener('click',e => {
    if (e.target.classList.contains('seat') && !(e.target.classList.contains('occupied')) ) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    } 
});

movie.addEventListener("change",e => {
    ticketPrice = +e.target.value;
    updateSelectedCount();

});
