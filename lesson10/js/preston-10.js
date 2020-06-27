//Footer date
const mydate = document.querySelector('.current-date');
let d = new Date();

let w_names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let m_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let weekname = w_names[d.getDay()];
let monthname = m_names[d.getMonth()];

mydate.textContent = weekname + ", " + d.getDate() + " " + monthname + " " + d.getFullYear();

//5 Day Forecast looping days
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


//Weather Summary content
const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=8cc80f462d0916f39d475a31d315920a"

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject.list[0]);

        document.getElementById('current').textContent = jsObject.list[0].weather[0].main;

        document.getElementById('temp').textContent = ((jsObject.list[0].main.temp_max)*(9/5) - 459.67).toFixed(1);

        document.getElementById('humidity').textContent = jsObject.list[0].main.humidity;

        document.getElementById('windspeed').textContent = (jsObject.list[0].wind.speed).toFixed(0);    
        }    
    )

    .catch(function(error){
        alert("Sorry, the data for the weather summary is not available right now.");
    })

//5 Day Forecast Content
const apiFive = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=8cc80f462d0916f39d475a31d315920a"

fetch(apiURL)
    .then((response) => response.json())
    .then((jsonObject) => {
        console.log(jsonObject);

        for (let i = 1; i < 6; i++){
            fore = document.textContent = jsonObject.list[i].main.temp;
            convTemp = (fore * (9/5) - 459.67).toFixed(0);
            document.getElementById('tempd' + i).textContent = convTemp;

            imagesrc = jsonObject.list[i].weather[0].icon;
            desc = jsonObject.list[i].weather[0].description;
            console.log(jsonObject.list[i].weather[0].icon);

            document.getElementById('icon' + i).setAttribute('src', './images/' + imagesrc + '.svg');
            document.getElementById('icon' + i).setAttribute('alt', desc);
        }
    }    
    )

//Hamburger menu
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('.ham');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

//Pancake block
const pancalert = document.querySelector('.pancake-block');
if (weekname === 'Friday'){
    pancalert.style.display = "block";
}