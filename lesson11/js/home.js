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
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.log(jsonObject)
        
        const source = jsonObject["towns"];
        let towns = [];

        j = 0;
        for (let i = 0; i < source.length; i++ ) {
        if (source[i].name == "Preston" || source[i].name == "Fish Haven" || source[i].name == "Soda Springs"){
        towns[j] = source[i]
        j++;

        }}

        for (let i = 0; i < towns.length; i++) {
                let card = document.createElement('section');
                let div = document.createElement('div');
                let h2 = document.createElement('h2');
                let h4 = document.createElement('h4');
                let para = document.createElement('p');
                let para2 = document.createElement('p');
                let para3 = document.createElement('p');
                let image = document.createElement('img');

                div.classList.add('card-text');
                h2.textContent = towns[i].name;

                h4.classList.add('home-motto')
                h4.textContent = towns[i].motto;
                
                para.textContent = "Year Founded: " + towns[i].yearFounded;
                para2.textContent = "Population: " + towns[i].currentPopulation;
                para3.textContent = "Avg. Annual Rainfall: " + towns[i].averageRainfall + " in.";
                
                image.setAttribute('src', 'images/' + towns[i].photo);
                image.setAttribute('alt', towns[i].name);

                div.appendChild(h2);
                div.appendChild(h4);
                div.appendChild(para);
                div.appendChild(para2);
                div.appendChild(para3);
                card.appendChild(div);
                card.appendChild(image);

                card.classList.add('card');

                document.querySelector('div.cards').appendChild(card); 
            }
        }    
    )

    .catch(function(error){
        alert("Sorry, the data for the town cards is not available right now.");
    })