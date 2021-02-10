module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      host: "localhost",
      port: 7545,
      from: "0xeC0eE5976491380eD13bA4160EAfac314F8BE103",
      network_id: "*"
    }
  },
  compilers: {
    solc: {
      //version: '0.4.25',
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
