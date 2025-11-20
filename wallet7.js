const { Web3 } = require('web3');
const axios = require('axios');

async function getTypeofTransaction(txhash, apiKey) {
  const url = `https://api.etherscan.io/api?module=proxy&action=eth_getTransactionByHash&txhash=${txhash}&apikey=${apiKey}`;


  try {
    const response = await axios.get(url);
    const result = response.data.result;
    console.log(result);


  } catch (error) {
    throw new Error(`Failed to fetch contract source code: ${error.message}`);
  }
}


// Usage example
const txhash = '0x0c925f97a77eb556d55147311ab12882cc60cf6c816b773a443002fd4f813b0f';
const apiKey = 'YourApiKeyToken';

