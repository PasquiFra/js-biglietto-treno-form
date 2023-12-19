console.log("JS OK")

//! step 2: dichiaro le variabili ricavate dagli elementi in pagina

const name = document.getElementById("form-name").value;
const kms = document.getElementById("form-km").value;
const age = document.getElementById("select-age").value;
const button = document.getElementById("submit-info");

console.log("nome cliente ", name, "| percorrenza Km ", kms, "| età passeggero ", age);


//! step 3: attivo il bottone per la ricezione dell'input

button.addEventListener("click", function() {

    // recupero l'input
    const percorrenzaKm = parseInt (kms.trim());
    const etaPasseggero = parseInt (age.trim());

    console.log("percorrenza Km", percorrenzaKm, "età passeggero", etaPasseggero);
    
    //controllo input
    if ( percorrenzaKm < 5 || percorrenzaKm > 5000 ) {
        alert ("Inserisci un valore di kilometraggio ammesso (min.5, max.5000 km).");
        return;
    }

    else {
        const tariffaKm = 0.21;
        const prezzoBase = percorrenzaKm * tariffaKm;
        
        console.log("Tariffa base ", prezzoBase);

        const scontoUnder = 0.8;
        const scontoOver = 0.6;
        const noSconto = 1;

        if (etaPasseggero < 18) {

            const prezzoFinale = parseFloat (prezzoBase * scontoUnder).toFixed(2);
            console.log ("prezzo finale", prezzoFinale);
    
            priceResult.innerHTML = `<strong>€ ${prezzoFinale} <\strong>`;

        } else if (etaPasseggero >= 65) {

            const prezzoFinale = parseFloat (prezzoBase * scontoOver).toFixed(2);
            console.log ("prezzo finale", prezzoFinale);

            priceResult.innerHTML = `<strong>€ ${prezzoFinale} <\strong>`;

        } else { 
            
            const prezzoFinale = parseFloat (prezzoBase * noSconto ).toFixed(2);
            console.log ("prezzo finale", prezzoFinale);

            priceResult.innerHTML = `<strong>€ ${prezzoFinale} <\strong>`;
        }

    }
})


//! Output

// output prezzo
const priceResult = document.getElementById("price-result");

// output età
const ageResult = document.getElementById("age-result");

if (age.value = "adult" ) {
    ageResult.innerHTML += "<strong> Adulto (18+ anni) <\strong>";
} else if (age.value = "young" ) {
    ageResult.innerHTML += "<strong> Giovane (< 18 anni) <\strong>";
} else {
    ageResult.innerHTML += "<strong>  Anziano (65+ anni) <\strong>";
}

// output nome e cognome

const nameResult = document.getElementById("name-result");

nameResult.innerHTML += `<strong> ${name} <\strong>`;

// output carrozza: genero un numero casuale da 4 cifre

const carriageResult = document.getElementById("carriage-result");

let carriageNum = Math.floor(Math.random() * (9999 - 999)) + 999;

carriageResult.innerHTML += carriageNum;

// output ID biglietto:

const idTicket = document.getElementById("id-ticket");

let id = Math.floor(Math.random() * (9999999999 - 999999999)) + 999999999;

idTicket.innerHTML += id;

// output num treno 

const trainResult = document.getElementById("train-result");

let trainId = Math.floor(Math.random() * (9999 - 999)) + 999;

trainResult.innerHTML += `IT ${trainId}`;