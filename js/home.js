url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Csolana&vs_currencies=usd";
function autoRefresh() {
    setTimeout(function () {
        location.reload();
    }, 60000); // 30 seconds in milliseconds
}
fetch(url)
  .then(res => res.json())
  .then(data =>  {
    console.log(data);
    var btcPrice = data.bitcoin.usd;
    var ethPrice = data.ethereum.usd;
    var solPrice = data.solana.usd;
    document.getElementById("btcprice").innerHTML = "$"+btcPrice;
    document.getElementById("ethprice").innerHTML = "$"+ethPrice;
    document.getElementById("solprice").innerHTML = "$"+solPrice;
    autoRefresh();
  });
  