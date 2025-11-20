const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const runApp = async () => {
  await Moralis.start({
    apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjM1NjczMzc5LTQ3MDMtNDc0OS05MTU1LTAyYzRmMWQ5MjgzYyIsIm9yZ0lkIjoiMzUxODMwIiwidXNlcklkIjoiMzYxNjIxIiwidHlwZUlkIjoiMDAyNzFmMTYtMmM3Zi00YjI5LTg2MGQtZWVjZTFmZmU5M2ZmIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2OTEzMzQ1MjksImV4cCI6NDg0NzA5NDUyOX0.O86_Xnyz4idkFld2-VJrSK02EWeX7MaKURz-QFNEuKU",
    // ...and any other configuration
  });

  const address = "0x7CAdE6049e5a52531d7D7D749c4ef0C692AE4619";

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.transaction.getWalletTransactions({
    address,
    chain,
  });

//console.log(response.toJSON());
const result = response.result;
//console.log(result);
result.forEach(element => {
  const resultValue = [];
  const profile = Object.values(element)
  resultValue.push(profile)

  resultValue.forEach((item) =>{
    const pro = Object.values(item)
    const timeStamp = pro.at(16)
    //console.log(timeStamp);

  })
  const timeList = [];
  //timeList.push(timeStamp);
  //console.log(timeList);

});
 
};

runApp();