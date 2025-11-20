//Get data of specific token from oklinke
const options = {
    method: 'GET',
    headers: {
      "Content-type": "application/json" , 
      "Ok-Access-Key":"144d3e0b-0cf2-495c-8861-60784ad9157a"
    }

  };
  
  fetch('https://www.oklink.com/api/v5/explorer/tokenprice/market-data?chainId=0&tokenContractAddress=b61b0172d95e266c18aea0c624db987e971a5d6d4ebc2aaed85da4642d635735i0', options)
    .then(response=> response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));