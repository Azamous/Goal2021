const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777",
    },
    kovan: {
      provider: () => new HDWalletProvider(process.env.DEV_MNEMONIC, "https://kovan.infura.io/v3/" + process.env.INFURA_ID),
      gas: 5000000,
	  networkId: 42,
      gasPrice: 25000000000,
      network_id: 42
    }
  }
}
