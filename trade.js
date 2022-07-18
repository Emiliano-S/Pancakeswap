var today = new Date();

let hour = today.getHours();
let minutes = today.getMinutes();
let meridian = hour >= 12 ? "PM" : "AM";
hour = hour >= 12 ? hour - 12 : hour;
minutes = (minutes < 10 ? "0" : "") + minutes;
hour = (hour < 10 ? "0" : "") + hour;

let dataValues = hour + ":" + minutes + " " + meridian;

function myPrint() {
  const localTime = document.getElementById("local-time");
  localTime.innerHTML = dataValues;
}

window.addEventListener("load", (event) => {
  myPrint();
});



const arrowButtonDiv = document.createElement("div")
const cakeDivSwap = document.createElement("div");
const bnbDivSwap = document.createElement("div");
const reverseContainer = document.getElementById("trade-reverse-container");

cakeDivSwap.innerHTML = `<div class="trade-main-swap-label-container" id="trade-container-cake">
<div class="trade-main-swap-label-title" id="trade-title-cake">
    <div class="trade-main-swap-label-title-item">
        <img src="./img/blue-logo-pancake.png">
     </div>
    <div class="trade-main-swap-label-title-item">
        <p>CAKE</p>
    </div>
    <div class="trade-main-swap-label-title-item">
        <svg viewBox="0 0 24 24" color="text" width="20px" height="24px"  xmlns="http://www.w3.org/2000/svg" class="sc-eaf7e66-0 mvupn"><path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path></svg>
    </div>
    <div class="trade-main-swap-label-title-item">
        <svg viewBox="0 0 24 24" color="textSubtle" width="16px" height="auto" xmlns="http://www.w3.org/2000/svg" class="sc-eaf7e66-0 bXujD" style="cursor: pointer;"><path d="M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z"></path></svg>
    </div>
</div>
<div class="trade-main-swap-label-type">
    <div class="trade-type-row">
        <input class="trade-input-attributes" inputmode="decimal" title="Token Amount" autocomplete="off" autocorrect="off"
        type="text" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" minlength="1" maxlength="25"
        spellcheck="false" value>
    </div>
    <div class="trade-empty-row"></div>
</div>
</div>`
bnbDivSwap.innerHTML = `<div class="trade-main-swap-label-container" id="trade-container-bnb">
<div class="trade-main-swap-label-title" id="trade-title-bnb">
    <div class="trade-main-swap-label-title-item">
        <svg viewBox="0 0 96 96" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-eaf7e66-0 mvupn" style="margin-right: 4px;"><circle cx="48" cy="48" r="48" fill="#F0B90B"></circle><path d="M30.9008 25.9057L47.8088 16.0637L64.7169 25.9057L58.5007 29.5416L47.8088 23.3355L37.117 29.5416L30.9008 25.9057ZM64.7169 38.3179L58.5007 34.682L47.8088 40.8881L37.117 34.682L30.9008 38.3179V45.5897L41.5926 51.7958V64.2079L47.8088 67.8438L54.0251 64.2079V51.7958L64.7169 45.5897V38.3179ZM64.7169 58.0018V50.7301L58.5007 54.366V61.6377L64.7169 58.0018ZM69.1305 60.572L58.4386 66.7781V74.0499L75.3467 64.2079V44.524L69.1305 48.1599V60.572ZM62.9143 32.1118L69.1305 35.7477V43.0195L75.3467 39.3836V32.1118L69.1305 28.4759L62.9143 32.1118ZM41.5926 69.411V76.6828L47.8088 80.3187L54.0251 76.6828V69.411L47.8088 73.0469L41.5926 69.411ZM30.9008 58.0018L37.117 61.6377V54.366L30.9008 50.7301V58.0018ZM41.5926 32.1118L47.8088 35.7477L54.0251 32.1118L47.8088 28.4759L41.5926 32.1118ZM26.4872 35.7477L32.7034 32.1118L26.4872 28.4759L20.271 32.1118V39.3836L26.4872 43.0195V35.7477ZM26.4872 48.1599L20.271 44.524V64.2079L37.1791 74.0499V66.7781L26.4872 60.572V48.1599Z" fill="white"></path></svg>
    </div>
    <div class="trade-main-swap-label-title-item">
        <p>BNB</p>
    </div>
    <div class="trade-main-swap-label-title-item">
        <svg viewBox="0 0 24 24" color="text" width="20px" height="24px" xmlns="http://www.w3.org/2000/svg" class="sc-eaf7e66-0 mvupn"><path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path></svg>
    </div>
</div>
<div class="trade-main-swap-label-type">
    <div class="trade-type-row">
        <input class="trade-input-attributes" inputmode="decimal" title="Token Amount" autocomplete="off" autocorrect="off"
        type="text" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" minlength="1" maxlength="25"
        spellcheck="false" value>
    </div>
    <div class="trade-empty-row"></div>
</div>
</div>`
arrowButtonDiv.innerHTML = ` <div class="trade-main-swap-arrow" id="trade-swap-arrow">
<div class="trade-circle-button" id="arrow-button">
<svg viewBox="0 0 24 24" class="sc-eaf7e66-0 etGTJB icon-down" fill="skyblue" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z"></path></svg>
<svg viewBox="0 0 24 24" class="sc-eaf7e66-0 etGTJB icon-up-down" fill="white" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M16 17.01V11c0-.55-.45-1-1-1s-1 .45-1 1v6.01h-1.79c-.45 0-.67.54-.35.85l2.79 2.78c.2.19.51.19.71 0l2.79-2.78c.32-.31.09-.85-.35-.85H16zM8.65 3.35L5.86 6.14c-.32.31-.1.85.35.85H8V13c0 .55.45 1 1 1s1-.45 1-1V6.99h1.79c.45 0 .67-.54.35-.85L9.35 3.35a.501.501 0 00-.7 0z"></path></svg>
</div>
</div>`

let swapArray = [bnbDivSwap, arrowButtonDiv, cakeDivSwap];


window.addEventListener('load', (event) => {
  reverseContainer.append(...swapArray);
});

const reverseFunction = () => {
  swapArray.reverse();
  reverseContainer.append(...swapArray);
};

/* $('body').delegate(window, 'load', (event) => {
  arrowButtonDiv.addEventListener('click', reverseFunction);
}
	); */


 arrowButtonDiv.addEventListener('click', reverseFunction); 