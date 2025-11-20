const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://api.gopluslabs.io/api/v1/abi/input_decode',
  headers: {accept: '*/*', 'content-type': 'application/json'},
  data: {
    chain_id: '1',
    data: '0xa9059cbb00000000000000000000000055d398326f99059ff775485246999027b319795500000000000000000000000000000000000000000000000acc749097d9d00000'
  }
};
console.log(options.data.data);

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });