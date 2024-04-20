var coin1 = document.getElementById('coin1');
function autoRefresh() {
    setTimeout(function () {
        location.reload();
    }, 60000); // 30 seconds in milliseconds
}
var btcPrice;
var ethPrice;
var solPrice;
var quantBtc = 1.53, quantEth = 5.3, quantSol = 124;
  const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-NVZBz4YMYjsqhdwNpLzMbqja'}
  };
  
  fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Csolana&vs_currencies=usd', options)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        btcPrice = data.bitcoin.usd;
        ethPrice = data.ethereum.usd;
        solPrice = data.solana.usd;
        document.getElementById('btcprice').innerHTML += "$"+btcPrice;
        document.getElementById('ethprice').innerHTML += "$"+ethPrice;
        document.getElementById('solprice').innerHTML += "$"+solPrice;

        document.getElementById('btcprice2').innerHTML += "$"+btcPrice;
        document.getElementById('ethprice2').innerHTML += "$"+ethPrice;
        document.getElementById('solprice2').innerHTML += "$"+solPrice;
      }
    )
    .catch(err => console.error(err));