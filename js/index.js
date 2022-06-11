import {arrayCoins} from './modules/arrayCoinsNFTs.js';
import {createCoinCard} from './modules/coinsCardCreatorNFTs.js';

arrayCoins.forEach(coin => {
    createCoinCard(coin, "nftsNewCollections");
    createCoinCard(coin, "nftsHotCollections");
});