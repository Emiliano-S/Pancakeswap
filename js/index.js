
// Funzione per aumentare i numeri nella card section-prizes

function changeNumberPromise(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            numberToChangeValue = Number(numberToChangeValue.replace(",",""));
            numberToChangeValue += 1;
            numberToChangeValue = String(numberToChangeValue);
            numberToChangeValue = numberToChangeValue.slice(0,3) + "," + numberToChangeValue.slice(3);
            resolve(numberToChangeValue);
        },100);
    })
}

async function changeNumber(){
    const numberToChange = document.querySelector(".numberChanger");
    numberToChangeValue = numberToChange.textContent;
    let amountToChange = Math.round((Math.random() + 1) * 10);
    for(let i = 0; i < amountToChange; i++){
        let numberChanger = await changeNumberPromise();
        numberToChange.textContent = numberChanger;
    }
}

setInterval(changeNumber,30000);