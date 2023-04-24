window.addEventListener('load', async () => {
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else {
      console.log('MetaMask is not installed!');
    }
    
    const contractAddress = '0x1234567890123456789012345678901234567890';
    const contractABI = [{"constant":true,"inputs":[],"name":"myFunction","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}];
    const myContract = new web3.eth.Contract(contractABI, contractAddress);
    
    const result = await myContract.methods.myFunction().call();
    console.log(result);
});