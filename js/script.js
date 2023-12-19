console.log("JS OK")

// step 1: dichiaro variabili e richiedo valore all'utente tramite prompt

const percorrenzaKm = parseInt(prompt("Quanti chilometri hai intenzione di percorrere?", 150.11));
const etaPasseggero = parseInt(prompt("Qual è la sua età?", 17));

console.log("percorrenza Km ", percorrenzaKm, "età passeggero ", etaPasseggero);

// Step 2: creo formula per calcolare prezzo intero del biglietto

const tariffaKm = 0.21;
const prezzoBase = percorrenzaKm * tariffaKm;

console.log("Tariffa base ", prezzoBase);

    let errorMessage;

    //controllo input
    if ( percorrenzaKm < 5 || percorrenzaKm > 5000 ) {
        errorMessage = "Inserisci un valore di kilometraggio ammesso (min.5, max.5000 km)"
    }
    
    if (etaPasseggero < 1 || etaPasseggero > 99) {
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