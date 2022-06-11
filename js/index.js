import {arrayCoinsPresentation, arrayCoinsCard} from './modules/arrayCoinsNFTs.js';
import {createCoinPresentation, createCoinCard} from './modules/coinsCardCreatorNFTs.js';

arrayCoinsPresentation.forEach(presentation => {
    createCoinPresentation(presentation, "nftsNewCollections");
    createCoinPresentation(presentation, "nftsHotCollections");
});

arrayCoinsCard.forEach(coin =>{
    createCoinCard(coin, "nftsNewestArrivals");
});

document.getElementById("faqsContent").addEventListener("click",(event)=>{
    if(event.target.classList == "container-faqs-question"){
        event.target.nextElementSibling.classList.toggle("visible");
    }
});