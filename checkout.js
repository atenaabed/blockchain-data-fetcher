const axios = require('axios');
let data = JSON.stringify({
  "name": "cryptopayment",
  "description": "this is crypto payment",
  "pricing_type": "20",
  "local_price": {
    "currency": "USDT"
  }
});

let config = {
  method: 'post',
  url: 'https://api.commerce.coinbase.com/checkouts',
  headers: { 
    'Content-Type': 'application/json', 
    'Accept': 'application/json', 
    'X-CC-Api-Key': '30c3b701-f01d-4c16-90bd-41d13f8cea15'
  },
  data : data
};

axios(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
