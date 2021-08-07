fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,hex')
    .then(data => data.json())
    .then(results => {
        let currentPrice = results[0].current_price;
        console.log('Bitcoin price is', currentPrice);
});
