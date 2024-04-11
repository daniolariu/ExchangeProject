$.getJSON('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum&vs_currencies=usd', function(data) {
    console.log(data);
    var btcPrice = data.bitcoin.usd;
    var ethPrice = data.ethereum.usd;
    document.getElementById("btcprice").innerHTML = btcPrice;
    document.getElementById("ethprice").innerHTML = ethPrice;
});