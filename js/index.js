import {arrayCoins} from './modules/arrayCoinsNFTs.js';
import {createCoinPresentation} from './modules/coinsCardCreatorNFTs.js';

arrayCoins.forEach(presentation => {
    createCoinPresentation(presentation, "nftsNewCollections");
    createCoinPresentation(presentation, "nftsHotCollections");
});