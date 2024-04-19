// url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Csolana&vs_currencies=usd";
// fetch(url)
//   .then(res => res.json())
//   .then(data =>  {
//     console.log(data);
//     var btcPrice = data.bitcoin.usd;
//     var ethPrice = data.ethereum.usd;
//     var solPrice = data.solana.usd;
//     document.getElementById("btcprice").innerHTML = "$"+btcPrice;
//     document.getElementById("ethprice").innerHTML = "$"+ethPrice;
//     document.getElementById("solprice").innerHTML = "$"+solPrice;
//   });
const options = {
  method: 'GET',
  headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-NVZBz4YMYjsqhdwNpLzMbqja'}
};

fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', options)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    data.forEach(coin => {
      let coinRow = document.createElement('tr');
      let coinName = document.createElement('td');
      let coinPrice = document.createElement('td');
      let coinMarketCap = document.createElement('td');
      let coinVolume = document.createElement('td');
      let coinChange = document.createElement('td');
      let coinImage = document.createElement('td');
      let coinImageTag = document.createElement('img');
      coinName.innerHTML = coin.name;
      coinPrice.innerHTML = "$" + coin.current_price;
      coinMarketCap.innerHTML = "$" + coin.market_cap;
      coinVolume.innerHTML = "$" + coin.total_volume;
      coinChange.innerHTML = coin.price_change_percentage_24h + "%";
      coinImageTag.src = coin.image;
      coinImageTag.width = 40;
      coinImageTag.height = 40;
      coinImage.appendChild(coinImageTag);
      coinRow.appendChild(coinImage);
      coinRow.appendChild(coinName);
      coinRow.appendChild(coinPrice);
      coinRow.appendChild(coinMarketCap);
      coinRow.appendChild(coinVolume);
      coinRow.appendChild(coinChange);
      document.getElementById('coinTable').appendChild(coinRow);
    });
  });