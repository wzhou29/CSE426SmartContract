const HDWalletProvider = require('@truffle/hdwallet-provider');
INFURA_API_KEY = "https://goerli.infura.io/v3/4cb5c682ebdd425587d95c970ab2a173"
MNEMONIC = "nature stone tent harvest body loan absurd type hawk seminar absorb option"


module.exports = {
  networks: {
    goerli: {
      provider: () => new HDWalletProvider(MNEMONIC, INFURA_API_KEY),
      network_id: '5',
      gas: 5500000,
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
