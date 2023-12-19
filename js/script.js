console.log("JS OK")

//! step 2: dichiaro le variabili ricavate dagli elementi in pagina

const kms = document.getElementById("form-km");
const age = document.getElementById("select-age");
const button = document.getElementById("submit-info");

console.log("percorrenza Km ", kms, "età passeggero ", age);

//! step 3: attivo il bottone per la ricezione dell'input

button.addEventListener("click", function() {

    // recupero l'input
    const percorrenzaKm = parseInt (kms.value);
    const etaPasseggero = parseInt (age.value);

    console.log("percorrenza Km", percorrenzaKm, "età passeggero", etaPasseggero);
})





/*
// Step 2: creo formula per calcolare prezzo intero del biglietto

const tariffaKm = 0.21;
const prezzoBase = percorrenzaKm * tariffaKm;

console.log("Tariffa base ", prezzoBase);

    let errorMessage;

    //controllo input
    if ( percorrenzaKm < 5 || percorrenzaKm > 5000 || percorrenzaKm isNaN) {
        errorMessage = "Inserisci un valore di kilometraggio ammesso (min.5, max.5000 km)."
    }
    
    if (etaPasseggero < 1 || etaPasseggero > 99 || etaPasseggero isNaN) {
        errorMessage += " Inserisci un valore età valido 1-99"
    }

    //Formula calcolo sconto

    const scontoUnder = 0.8
    const scontoOver = 0.6
    const noSconto = 1

    if (errorMessage) {

        alert(errorMessage)

    } else {
        if (etaPasseggero < 18) {

            const prezzoFinale = parseFloat (prezzoBase * scontoUnder).toFixed(2);
            console.log ("prezzo finale", prezzoFinale);
    
        } else if (etaPasseggero >= 65) {

            const prezzoFinale = parseFloat (prezzoBase * scontoOver).toFixed(2);
            console.log ("prezzo finale", prezzoFinale);

        } else { 
            
            const prezzoFinale = parseFloat (prezzoBase * noSconto ).toFixed(2);
            console.log ("prezzo finale", prezzoFinale);

        }
    }

    */