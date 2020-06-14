//Tickmark notation
function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

//Footer date
const mydate = document.querySelector('.current-date');
let d = new Date();

let w_names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let m_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let weekname = w_names[d.getDay()];
let monthname = m_names[d.getMonth()];

mydate.textContent = weekname + ", " + d.getDate() + " " + monthname + " " + d.getFullYear();

//Hamburger menu
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('.ham');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

//Pancake block
const pancalert = document.querySelector('.pancake-block');
if (weekname === 'Friday'){
    pancalert.style.display = "block";
}