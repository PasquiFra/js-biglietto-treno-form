console.log("JS OK")

//! step 2: dichiaro le variabili ricavate dagli elementi in pagina

const fname = document.getElementById("form-name".trim()).value;
const kms = document.getElementById("form-km").value;
const age = document.getElementById("select-age").value;
const button = document.getElementById("submit-info");

console.log("nome cliente ", fname, "| percorrenza Km ", kms, "| età passeggero ", age);

const percorrenzaKm = parseInt (kms.trim());

console.log("percorrenza Km", percorrenzaKm);

//output

const priceResult = document.getElementById("price-result");
const ageResult = document.getElementById("age-result");
const nameResult = document.getElementById("name-result");
const carriageResult = document.getElementById("carriage-result");
const idTicket = document.getElementById("id-ticket");
const trainResult = document.getElementById("train-result");
const yourTicket = document.getElementById("your-ticket");

// alert
const alertDanger = document.querySelector(".alert-danger");


//! step 3: attivo il bottone per la ricezione dell'input

button.addEventListener("click", function() {
    
    //! controllo input
    if ( percorrenzaKm < 5 || percorrenzaKm > 5000 || isNaN(kms)) {
        alertDanger.classList.remove("d-none");
        return
    } else {
        alertDanger.classList.add("d-none");
    }

    if (!fname) {
        alert ("Ci sono errori nel form");
        return
    }

    else {

        yourTicket.classList.remove("d-none");

        const tariffaKm = 0.21;
        const prezzoBase = percorrenzaKm * tariffaKm;
        
        console.log("Tariffa base ", prezzoBase);

        const scontoUnder = 0.8;
        const scontoOver = 0.6;
        const noSconto = 1;

        if (age.value = "young") {

            const prezzoFinale = parseFloat (prezzoBase * scontoUnder).toFixed(2);
            console.log ("prezzo finale", prezzoFinale);
    
            priceResult.innerHTML = `<strong>€ ${prezzoFinale} <\strong>`;

        } else if (age.value = "over") {

            const prezzoFinale = parseFloat (prezzoBase * scontoOver).toFixed(2);
            console.log ("prezzo finale", prezzoFinale);

            priceResult.innerHTML = `<strong>€ ${prezzoFinale} <\strong>`;

        } else { 
            
            const prezzoFinale = parseFloat (prezzoBase * noSconto ).toFixed(2);
            console.log ("prezzo finale", prezzoFinale);

            priceResult.innerHTML = `<strong>€ ${prezzoFinale} <\strong>`;
        }

    }    
    
    // output età
    
    if (age.value = "adult" ) {
        ageResult.innerHTML = "<strong> Adulto (18+ anni) <\strong>";
    } else if (age.value = "young" ) {
        ageResult.innerHTML = "<strong> Giovane (< 18 anni) <\strong>";
    } else {
        ageResult.innerHTML = "<strong>  Anziano (65+ anni) <\strong>";
    }
    
    // output nome e cognome
    
    nameResult.innerHTML = `<strong> ${fname} <\strong>`;
    
    // output carrozza: genero un numero casuale da 4 cifre
    
    let carriageNum = Math.floor(Math.random() * 15) + 1;
    
    console.log(carriageNum)
    
    carriageResult.innerHTML = carriageNum;
    
    // output ID biglietto:
    
    let idB = Math.floor(Math.random() * (9999999999 - 999999999)) + 999999999;
    
    console.log(idB)
    
    idTicket.innerHTML = idB;
    
    // output num treno 
    
    let trainId = Math.floor(Math.random() * (9999 - 999)) + 999;
    
    console.log(trainId)
    
    trainResult.innerHTML = `IT ${trainId}`;

})    

