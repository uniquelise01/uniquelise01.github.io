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


//JSON extraction
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.log(jsonObject)
        
        const towns = jsonObject['towns'];

        for(let i = 0; i < towns.length; i++) {

            if (towns[i].name == 'Preston'){
                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let h4 = document.createElement('h4');
                let para = document.createElement('p');
                let para2 = document.createElement('p');
                let para3 = document.createElement('p');
                let image = document.createElement('img');

                h2.textContent = towns['Preston'].name;

                h4.textContent = towns['Preston'].motto;

                para.textContent = "Year Founded: " + towns['Preston'].yearFounded;

                para2.textContent = "Current Population:  " + towns['Preston'].currentPopulation;

                para3.textContent = "Average Rainfall: " + towns['Preston'].averageRainfall;
                
                image.setAttribute('src', towns['Preston'].photo);
                image.setAttribute('alt', "Preston ID");

                card.appendChild(h2);
                card.appendChild(h4);
                card.appendChild(para);
                card.appendChild(para2);
                card.appendChild(para3);
                card.appendChild(image);

                document.querySelector('div.preston-homebox').appendChild(card); 
            }

            else if (towns[i].name == "Fish Haven"){

            }
        }    
    })

    .catch(function(error){
        alert("Sorry, the data is not available right now.");
    })