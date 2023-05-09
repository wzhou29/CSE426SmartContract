const HDWalletProvider = require('@truffle/hdwallet-provider');
INFURA_API_KEY = "https://sepolia.infura.io/v3/4cb5c682ebdd425587d95c970ab2a173"
MNEMONIC = "nature stone tent harvest body loan absurd type hawk seminar absorb option"


module.exports = {
  networks: {
    sepolia:{
      provider: () => new HDWalletProvider(MNEMONIC, INFURA_API_KEY),
      network_id: '11155111',
      gas: 4465030
    },
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    }
  },
  compilers: {
    solc: {
       version: "^0.8.19"
    }
  }
};
