//Wind chill calculation
let t = parseFloat(document.getElementById("temp").value);
let s = parseFloat(document.getElementById("windspeed").value);
let wchill = 35.74 + (0.6215 * t) - (35.75 * (s**0.16)) + (0.4275 * t * (s**0.16));

document.getElementById("windchill").innerHTML = parseInt(wchill);

if (wchill === NaN) {
    document.getElementById("windchill").innerHTML = "N/A";
}

console.log(t);