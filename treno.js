
console.log("ciao")

/*il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km(0.21 € al km)
va applicato uno sconto del 20 % per i minorenni
va applicato uno sconto del 40 % per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


Questo richiederà un minimo di ricerca.
TIP: per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

100km, 10 anni => prezzo corretto: €16.80
100km, 70 anni => prezzo corretto: €12.60 */

// 1 - Chiedere all'utente quanti km vuole percorrere
const km = Number(prompt("Quanti kilometri devi percorrere?"));



// 2 - Chiedere l'età del passeggero

const age = Number(prompt("Quanti anni hai?"));

console.log(km, age)
// 3 - Salvo i dati in variabili
let prezzo = km * 0.21
let underAge = 18
let overAge = 65
let sconto = 20
let sconto1 = 40

// 4 - Calcolare il prezzo con 2 decimali
let prezzoArrotondato = (prezzo.toFixed(2));
console.log(prezzoArrotondato)


// 5 - Verificare l'età per applicare eventuali sconti
if (age < underAge) {
    // 6 - Applicare sconto 20% per minorenni
    // prezzo = prezzo - (prezzo * 100 / sconto)
    prezzo -= prezzo * 0.2 // -= sottrai al valore attuale e assegna 
    console.log("minorenne", prezzo.toFixed(2));



} else if (age > overAge) {
    // 7 - Applicare sconto 40% per over 65
    prezzo -= prezzo * 0.4

    console.log("over65", prezzo.toFixed(2));
} else {

    // 8 - Output prezzo con massimo due decimali
    console.log("prezzo regolare", prezzo);

}



