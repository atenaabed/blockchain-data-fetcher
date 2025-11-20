const axios = require('axios');
async function getContractSourceCode(walletaddresses,chain, apiKey) {
  const url = `https://api.tatum.io/v3/data/balances?&addresses=${walletaddresses}&chain=${chain}&apikey=${apiKey}`;

  try {
    const response = await axios.get(url);
    const result = response.data.result;
    console.log(result) 
    result.forEach((item) => {
        const profile = Object.values(item) ;
        const resultProfile = profile.at(3);
        const resultProfile2 = profile.at(2);
        const listResultProfile = [];
        listResultProfile.push(resultProfile);
        listResultProfile.push(resultProfile2);
        const listResultProfile2 = listResultProfile;
        
        if (listResultProfile2.includes('0xa74476443119a942de498590fe1f2454d7d4ac0d')) {
            const answerYes = 'Yes';
            const answerBalance = listResultProfile2.at(1) ;
            console.log('yes'); 
            console.log(listResultProfile2.at(1));
            
        } else {
            const answerNo = 'No';
            const answerBalance2 = 'balance : 0';
            console.log('no');
            console.log('balance : 0');
            
        }

    });
  } catch (error) {
    throw new Error(`Failed to fetch contract source code: ${error.message}`);
  }
}

// Usage example
const walletaddresses = '0x3a70e8c00f3bcf3eb845b6b6928aba92b465c183';
const chain = 'ethereum';
const apiKey = 'aee6af09-44b7-427e-bd8c-85d41b8edc35';

getContractSourceCode(walletaddresses,chain , apiKey) 
  .catch((error) => {
    console.error(error);
  });
