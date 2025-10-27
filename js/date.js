// Static Data //
const allTheMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const allTheDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

// Dinamic Data //

// Creo un oggetto Date che rappresenta la data e l'ora corrente //
const dateNow = new Date();

// Stampa dell'oggetto Date //
console.log(dateNow);



// Ottengo il mese corrente //
const gotMonth = dateNow.getMonth();

// Ottengo il giorno del mese corrente //
const gotDayOfMonth = dateNow.getDate();

// Ottengo l'anno corrente //
const gotYear = dateNow.getFullYear();

// Ottengo il giorno della settimana corrente //
const gotDayOfWeek = dateNow.getDay();


console.log(gotMonth, gotDayOfMonth, gotYear, gotDayOfWeek);

// Prelevo gli elementi dal DOM //
const month = document.querySelector(".month");
const dayOfMonth = document.querySelector(".dayOfMonth");
const year = document.querySelector(".year");
const dayOfWeek = document.querySelector(".dayOfWeek");

// Imposto gli elementi del DOM //
month.innerText = allTheMonths[gotMonth];
dayOfMonth.innerText = gotDayOfMonth;
year.innerText = gotYear;
dayOfWeek.innerText = allTheDays[gotDayOfWeek];



