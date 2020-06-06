//Footer date
const mydate = document.querySelector('.current-date');
let d = new Date();

let w_names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let m_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let weekname = w_names[d.getDay()];
let monthname = m_names[d.getMonth()];

mydate.textContent = weekname + ", " + d.getDate() + " " + monthname + " " + d.getFullYear();

//5 Day Forecast
let abbrw_names = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thur'];
let dayone = abbrw_names[d.getDay()+1];
let daytwo = abbrw_names[d.getDay()+2];
let daythree = abbrw_names[d.getDay()+3];
let dayfour = abbrw_names[d.getDay()+4];
let dayfive = abbrw_names[d.getDay()+5];
console.log(dayfive);

document.getElementById("day1").innerHTML = dayone;
document.getElementById("day2").innerHTML = daytwo;
document.getElementById("day3").innerHTML = daythree;
document.getElementById("day4").innerHTML = dayfour;
document.getElementById("day5").innerHTML = dayfive;

//Hamburger menu
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('.ham');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

//Pancake block
const pancalert = document.querySelector('.pancake-block');
if (weekname === 'Friday'){
    pancalert.style.display = "block";
}