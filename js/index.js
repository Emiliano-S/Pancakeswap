import {arrayCoinsPresentation, arrayCoinsCard} from './modules/arrayCoinsNFTs.js';
import {createCoinPresentation, createCoinCard} from './modules/coinsCardCreatorNFTs.js';


//Creazione delle presentation NFT
arrayCoinsPresentation.forEach(presentation => {
    createCoinPresentation(presentation, "nftsNewCollections");
    createCoinPresentation(presentation, "nftsHotCollections");
});

//Creazione delle card contentente NFT
arrayCoinsCard.forEach(coin =>{
    createCoinCard(coin, "nftsNewestArrivals");
});

//Codice per nascondere e mostrare le domande nella sezione FAQs
document.getElementById("faqsContent").addEventListener("click",(event)=>{
    if(event.target.classList == "question-click-zone"){
        event.target.parentNode.nextElementSibling.classList.toggle("visible");

        if(event.target.nextElementSibling.textContent.includes('Details')){
            event.target.nextElementSibling.innerHTML = `
            Hide
            <svg viewBox="0 0 24 24" style="transform: rotate(180deg)" fill="#1fc7d4" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path></svg>
            `
        }else{
            event.target.nextElementSibling.innerHTML = `
            Details
            <svg viewBox="0 0 24 24" fill="#1fc7d4" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path></svg>
            `
        }
    }
});
