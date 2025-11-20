
//Get Contract Address Data
async function Resultvol() {
    try {
      const response = await fetch("https://www.oklink.com/api/v5/explorer/tokenprice/market-data?chainId=1&tokenContractAddress=0xf418588522d5dd018b425E472991E52EBBeEEEEE", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Ok-Access-Key":"144d3e0b-0cf2-495c-8861-60784ad9157a"
        },

      });
  
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }

Resultvol();  