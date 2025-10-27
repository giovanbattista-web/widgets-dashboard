// Dati dinamici //

// Imposto la funzione che contiene il codice per aggiornare l'orologio //
const theClock = () => {

    // Creo un oggetto Date per la data e l'ora corrente //
    const timeNow = new Date();

    // Visualizza metodi e proprietà di Date //
    console.log(timeNow);

    // Ottengo l'ora corrente //
    let gotHours = timeNow.getHours();

    // Ottengo i minuti correnti //
    let gotMinutes = timeNow.getMinutes();

    // Ottengo i secondi correnti //
    let gotSeconds = timeNow.getSeconds();

    // Formattazione dei dati //

    // Imposta pm o am //
    const gotAmOrPM = gotHours >= 12 ? "pm" : "am";

    // Ottieni il formato a 12 ore //
    gotHours = gotHours % 12 || 12;

    // Prelevo gli elementi dal DOM //
    const hours = document.querySelector(".hours");
    const minutes = document.querySelector(".minutes");
    const seconds = document.querySelector(".seconds");
    const amOrPM = document.querySelector(".amOrPM");

    // Imposto gli elementi del DOM //
    hours.innerText = gotHours;
    minutes.innerText = gotMinutes;
    seconds.innerText = gotSeconds;
    amOrPM.innerText = gotAmOrPM;
}

setInterval(theClock, 1000);
