console.log("JS OK")

//! step 2: dichiaro le variabili ricavate dagli elementi in pagina

const kms = document.getElementById("form-km");
const age = document.getElementById("select-age");
const button = document.getElementById("submit-info");

console.log("percorrenza Km ", kms, "età passeggero ", age);

//! step 3: attivo il bottone per la ricezione dell'input

button.addEventListener("click", function() {

    // recupero l'input
    const percorrenzaKm = parseInt (kms.value.trim());
    const etaPasseggero = parseInt (age.value.trim());

    console.log("percorrenza Km", percorrenzaKm, "età passeggero", etaPasseggero);
    
    //controllo input
    if ( percorrenzaKm < 5 || percorrenzaKm > 5000 || percorrenzaKm, NaN) {
        alert ("Inserisci un valore di kilometraggio ammesso (min.5, max.5000 km).");
        return;
    }
    
    if (etaPasseggero < 1 || etaPasseggero > 99 || etaPasseggero, NaN) {
        alert (" Inserisci un valore età valido 1-99");
        return;
    }

    else {
        const tariffaKm = 0.21;
        const prezzoBase = percorrenzaKm * tariffaKm;
        
        console.log("Tariffa base ", prezzoBase);

        const scontoUnder = 0.8
        const scontoOver = 0.6
        const noSconto = 1

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
})


