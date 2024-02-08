let maxProfit =  function(prices){
    let overAllProfit = 0;
    for(let i=0; i<prices.length-1; i++){
      for(let j=i+1; j<prices.length; j++){
          let currentProfit = prices[j]-prices[i]
        if(currentProfit > overAllProfit) overAllProfit = currentProfit
      }
    }
    console.log("maxProfit = ", overAllProfit);
    return overAllProfit
  }

  maxProfit([7,1,5,3,6,4])
  maxProfit([7,6,4,3,1])