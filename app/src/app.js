web3 = null
window.onload = function(){
  connectMetaMask()
  EventListener()
}

function connectMetaMask(){
  if (typeof web3 !== "undefined") {
    web3 = new Web3(Web3.givenProvider);
  } else {
    web3 = new Web3(App.url);
  }
  ethereum.request({ method: "eth_requestAccounts" });
}

function EventListener(){
  const button = document.getElementById('connect');
  button.addEventListener('click', function(e) {
    connectMetaMask()
  });
}