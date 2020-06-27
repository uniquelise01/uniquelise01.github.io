const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=8cc80f462d0916f39d475a31d315920a"

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

            document.getElementById('current-temp').textContent = ((jsObject.list[1].main.temp)*(9/5) - 459.67).toFixed(2);
            
            const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[1].weather[0].icon + '.png';
            const desc = jsObject.list[1].weather[0].description;
            document.getElementById('imagesrc').textContent = imagesrc;
            document.getElementById('icon').setAttribute('src', imagesrc);
            document.getElementById('icon').setAttribute('alt', desc);
            console.log(imagesrc);
    })