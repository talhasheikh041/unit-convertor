/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.querySelector("#convert-btn");
const inputEl = document.querySelector("#input-el");
const lengthEl = document.querySelector("#length");
const volumeEl = document.querySelector("#volume");
const massEl = document.querySelector("#mass");

convertBtn.addEventListener("click", function() {
    let valueToConvert = inputEl.value;
    convertLength(valueToConvert);
    convertVolume(valueToConvert);
    convertMass(valueToConvert);
    inputEl.value = "";
})

function convertLength(value) {
    const inFeets = value * 3.281;
    const inMeters = value / 3.281;
    lengthEl.textContent = `${value} meters = ${inFeets.toFixed(3)} feet | ${value} feet = ${inMeters.toFixed(3)} meters`;
}

function convertVolume(value) {
    const inGallons = value * 0.264;
    const inLitres = value / 0.264;
    volumeEl.textContent = `${value} liters = ${inGallons.toFixed(3)} gallons | ${value} gallons = ${inLitres.toFixed(3)} liters`;
}

function convertMass(value) {
    const inPounds = value * 2.204;
    const inKilos = value / 2.204;
    massEl.textContent = `${value} kilos = ${inPounds.toFixed(3)} pounds | ${value} pounds = ${inKilos.toFixed(3)} kilos`;
}