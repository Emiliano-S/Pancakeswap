export function createCoinCard(coin){
    const containerCoins = document.getElementById("nftsNewCollections");
    const cardCoin = document.createElement('div');
    cardCoin.className = "container-coin-card-back";
    cardCoin.id = coin.id;
    cardCoin.innerHTML =`
        <div class="container-coin-card-front">
        <a href="${coin.link}">
            <div class="container-coin-card">
                <div class="coin-card-banner">
                    <img src="${coin.imgBackground}" title="${coin.name} - Banner" />
                </div>
                <div class="coin-card-content">
                    <div class="coin-card-avatar">
                        <img src="${coin.imgProfile}" title="${coin.name} - Avatar" />
                    </div>
                    <div class="coin-card-description">
                        <div class="coin-card-name">
                            <h4>${coin.name}</h4>
                        </div>
                        <div class="coin-card-volume">
                            <span class="coin-card-volume-text">Volume</span>
                            <span class="coin-card-volume-coin">
                                <svg viewBox="0 0 96 96" width="16px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-eaf7e66-0 eTxYlM"><circle cx="48" cy="48" r="48" fill="#F0B90B"></circle><path d="M30.9008 25.9057L47.8088 16.0637L64.7169 25.9057L58.5007 29.5416L47.8088 23.3355L37.117 29.5416L30.9008 25.9057ZM64.7169 38.3179L58.5007 34.682L47.8088 40.8881L37.117 34.682L30.9008 38.3179V45.5897L41.5926 51.7958V64.2079L47.8088 67.8438L54.0251 64.2079V51.7958L64.7169 45.5897V38.3179ZM64.7169 58.0018V50.7301L58.5007 54.366V61.6377L64.7169 58.0018ZM69.1305 60.572L58.4386 66.7781V74.0499L75.3467 64.2079V44.524L69.1305 48.1599V60.572ZM62.9143 32.1118L69.1305 35.7477V43.0195L75.3467 39.3836V32.1118L69.1305 28.4759L62.9143 32.1118ZM41.5926 69.411V76.6828L47.8088 80.3187L54.0251 76.6828V69.411L47.8088 73.0469L41.5926 69.411ZM30.9008 58.0018L37.117 61.6377V54.366L30.9008 50.7301V58.0018ZM41.5926 32.1118L47.8088 35.7477L54.0251 32.1118L47.8088 28.4759L41.5926 32.1118ZM26.4872 35.7477L32.7034 32.1118L26.4872 28.4759L20.271 32.1118V39.3836L26.4872 43.0195V35.7477ZM26.4872 48.1599L20.271 44.524V64.2079L37.1791 74.0499V66.7781L26.4872 60.572V48.1599Z" fill="white"></path></svg>
                            </span>
                            <span class="coin-card-value">${coin.value}</span>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
    `

    containerCoins.appendChild(cardCoin);
}