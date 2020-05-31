//Wind chill calculation
let t = parseFloat(document.getElementById("temp").innerText);
let s = parseFloat(document.getElementById("windspeed").innerText);
let wchill = 35.74 + (0.6215 * t) - (35.75 * (s**0.16)) + (0.4275 * t * (s**0.16));

if (isNaN(wchill)) {
    document.getElementById("windchill").innerHTML = "N/A";
}

else {
    document.getElementById("windchill").innerHTML = parseInt(wchill);
}
