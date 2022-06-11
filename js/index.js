import {arrayCoinsPresentation, arrayCoinsCard} from './modules/arrayCoinsNFTs.js';
import {createCoinPresentation, createCoinCard} from './modules/coinsCardCreatorNFTs.js';

arrayCoinsPresentation.forEach(presentation => {
    createCoinPresentation(presentation, "nftsNewCollections");
    createCoinPresentation(presentation, "nftsHotCollections");
});

arrayCoinsCard.forEach(coin =>{
    createCoinCard(coin, "nftsNewestArrivals");
});