// let pets = {
//     "name" : "Toby",
//     "breed" : "Persian",
//     "age" : 18,
//     "color" : "white",
//     "favorite_food" : ["cream", "tuna", "chicken"]
// };

// let n = pets.name;
// let x = pets.favorite_food[0];

const url = "https://cit111byui.github.io/pets.json";

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.log(jsonObject)
        const pets = jsonObject['pets'];

        for(let i = 0; i < pets.length; i++){
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let para = document.createElement('p');

            h2.textContent = pets[i].name + ' is a ' + pets[i].species;

            para.textContent = pets[i].name + "'s favorite food is " + pets[i].

            card.appendChild(h2);
            document.querySelector('.info').appendChild(card);
        }
    })
    .catch(function(error){
        alert("Sorry, the data is not available now.");
    })