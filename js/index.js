
// Funzione per aumentare i numeri nella card section-prizes
let lotteryValueAmount = 130043;

/* Funzione che si occupa di convertire la variabile lotteryValueAmount in string, aggiunge la
   virgola e poi effettua il display nel sito
*/
function displayCardValues(value){
    const lotteryValue = document.getElementById("lotteryValue");
    value = String(value);
    value = value.split(" ",3);

    lotteryValue.textContent = value;
}

// Funzione che si occuppa di aggiungere un range random da aumentare a lotteryValueAmount

async function changeCardValues(){
    let amountToChange = Math.round((Math.random() + 1) * 10);

    for(let i = 0; i < amountToChange; i++){
        let numberChanger = await promiseChangeCardValue();
        displayCardValues(numberChanger);
    }
}

function promiseChangeCardValue(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            lotteryValueAmount += 1;
            resolve(lotteryValueAmount);
        },100);
    })
}

setInterval(changeCardValues,1000);
window.addEventListener("DOMContentLoaded", displayCardValues(lotteryValueAmount));

