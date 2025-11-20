//Get transaction data from etherscan
const { Web3 } = require('web3');
const axios = require('axios');
//const { ethers } = require("ethers");
//const abiDecoder = require("abi-decoder");

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


const txhash = '0xc821de259fc57784c5c07230b1c593c7263bd346b20ef4a956c20185067a42e9';
const apiKey = 'YourApiKeyToken';



getTypeofTransaction(txhash, apiKey)
