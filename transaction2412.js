const {Web3} = require('web3');
const infuraApiKey = 'c970a49904b446aa976f92ce17ea8f4f';
async function checkBlock(address) {
    const web3 = new Web3(new Web3.providers.HttpProvider(`https://mainnet.infura.io/v3/${infuraApiKey}`));
    block =  await web3.eth.getBlock("latest");

    //let number = block.number;
    //let transactions = block.transactions;
    //console.log('Search Block: ' + transactions);


    if (block != null && block.transactions != null) {
        for (let txHash of block.transactions) {
            let tx = web3.eth.getTransactionReceipt(txHash);
            tx.then((result) => {
                console.log(result);
            });
            //const addresses = checkBlock('0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad')
           // if(addresses == tx.to){
               // console.log("from: " + tx.from + " to: " + tx.to + " value: " + tx.value);  
           // }
        }
    }
  }
checkBlock();