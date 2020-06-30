//Wind chill calculation
let p = parseFloat(document.getElementById("temp").innerText);
let r = parseFloat(document.getElementById("windspeed").innerText);
let chill = 35.74 + (0.6215 * p) - (35.75 * (r**0.16)) + (0.4275 * p * (r**0.16));

if (isNaN(chill)) {
    document.getElementById("windchill").innerHTML = "N/A";
}

else {
    document.getElementById("windchill").innerHTML = parseInt(chill);
}
