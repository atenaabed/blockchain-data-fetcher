const axios = require('axios');
//const abiDecoder = require('abi-decoder');

async function getTypeofTransaction(tokenContractAddress, apiKey) {
  const url = `https://api.etherscan.io/api?module=account&action=tokentx&address=${tokenContractAddress}&startblock=0&endblock=99999999&sort=asc&apikey=${apiKey}`;

  try {
    const response = await axios.get(url);
    const result = response.data.result;
    console.log(result);
    result.forEach((item) => {
      const profile = Object.values(item);
      const resultTime = profile.at(1);
      console.log(resultTime);
    });

  } catch (error) {
    throw new Error(`Failed to fetch contract source code: ${error.message}`);
  }
}

//const erc20abistr =  '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]'
//const erc20Abi = JSON.parse(erc20abistr);
//let decodedData = abiDecoder.decodeMethod(erc20Abi);
//console.log(decodedData);





// Usage example
const tokenContractAddress = '0xea498670e8de236c17d75c0bd09dd4b1b6f39eb2';
const apiKey = 'YourApiKeyToken';

getTypeofTransaction(tokenContractAddress, apiKey)
