import Web3 from 'web3';


const web3 = new Web3(
  Web3.givenProvider || 'http://127.0.0.1:7545'
);

let account;

const accountEl = document.getElementById('account');

const main = async () => {
  const accounts = await web3.eth.requestAccounts();
  account = accounts[0];
  accountEl.innerText = account;
};

main();

window.onload = async () => {
  // Init Web3 connected to ETH network
  // if (window.ethereum) {
  //   window.web3 = new Web3(window.ethereum);
  //   window.ethereum.enable();
  // } else {
  //   alert("No ETH brower extension detected.");
  // }
  // detect Metamask account change
  window.ethereum.on('accountsChanged', function (accounts) {
    account = accounts[0];
    accountEl.innerText = account;
    console.log('accountsChanges',accounts);
  });
  // detect Network account change
  window.ethereum.on('networkChanged', function(networkId){
    console.log('networkChanged',networkId);
  });
};
