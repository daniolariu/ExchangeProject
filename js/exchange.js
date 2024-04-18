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
url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Csolana&vs_currencies=usd";
fetch(url)
  .then(res => res.json())
  .then(data =>  {
    console.log(data);
    btcPrice = data.bitcoin.usd;
    ethPrice = data.ethereum.usd;
    solPrice = data.solana.usd;
    autoRefresh();
  });
// document.addEventListener('click', function(event) {
//     if(coin1.value == 'bitcoin'){
//        document.getElementById('quantBtc').innerHTML += quantBtc;
//       }
//       else if(coin1.value == 'ethereum'){
//         document.getElementById('quantEth').innerHTML += quantEth;
//       }
//       else if(coin1.value == 'solana'){
//         document.getElementById('quantSol').innerHTML += quantSol;
//       }
//       else{
//         console.log('No coin selected');
//       }
// });
document.getElementById('btcprice').innerHTML += quantBtc;
document.getElementById('ethprice').innerHTML += quantEth;
document.getElementById('solprice').innerHTML += quantSol;

document.getElementById('btcprice2').innerHTML += quantBtc;
document.getElementById('ethprice2').innerHTML += quantEth;
document.getElementById('solprice2').innerHTML += quantSol;

