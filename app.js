
//Get BTC transaction
const options = {
    method: 'GET',
    headers: {
      "Content-type": "application/json" , 
      "Ok-Access-Key":"144d3e0b-0cf2-495c-8861-60784ad9157a"
    }

  };
  
  fetch('https://www.oklink.com/api/v5/explorer/blockchain/transaction?chainShortName=btc', options)
    .then(response=> response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));