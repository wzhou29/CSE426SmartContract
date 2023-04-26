window.addEventListener("load", (event) => {
    const connectBtn = document.getElementById('connect');
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
    }
  });

connectBtn.addEventListener('click', async () => {
    try {
        // Request accounts from MetaMask
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

        // Get the current account
        const currentAccount = accounts[0];

        // Log the current account
        console.log(`Current account: ${currentAccount}`);
    } catch (error) {
        console.error(error);
    }
});