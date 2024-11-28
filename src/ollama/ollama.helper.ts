export const getTradeSymbolInstruction = (prompt: string) => {
  return `
  Convert the following prompt into a structured JSON array format according to the instructions and examples provided. If the prompt is not a valid trading signal, respond with "Invalid signal":
  PROMPT:
  ${prompt}

  Input Examples:
  1. Long/Buy ArbUsdt
     Entry-limit: 0.8930
     TP 1: 0.8940
     TP 2: 0.8955
     TP 3: 0.8963
     TP 4: 0.8980
     TP 5: 0.9022
     TP 6: 0.9070
     TP 7: 0.9151
     TP 8: 0.9224
     TP 9: 0.9350
     SL: 0.8788
  
  2. Short/Sell BtcUsdt
     Entry-limit: 51200
     TP 1: 51150
     TP 2: 51100
     TP 3: 51050
     TP 4: 50980
     TP 5: 50900
     SL: 51350
  
  3. Long/Buy EthUsdt
     Entry-limit: 3100
     TP 1: 3120
     TP 2: 3150
     TP 3: 3200
     SL: 3050
  
  Required Output Format:
  [
    {
      symbol: "ARB/USDT",
      side: "BUY",
      type: "LIMIT",
      timeInForce: "GTC",
      quantity: 0.1,
      price: 0.8930
    },
    {
      symbol: "BTC/USDT",
      side: "SELL",
      type: "LIMIT",
      timeInForce: "GTC",
      quantity: 0.01,
      price: 51200
    },
    {
      symbol: "ETH/USDT",
      side: "BUY",
      type: "LIMIT",
      timeInForce: "GTC",
      quantity: 0.05,
      price: 3100
    }
  ]
  
  Instructions:
  1. Convert symbol to uppercase with "/" between coin and USDT
  2. Determine side based on "Long/Buy" or "Short/Sell"
  3. Set type to "LIMIT"
  4. Set timeInForce to "GTC"
  5. Assign quantity based on symbol:
     - For lower-priced coins (< 10): 0.1
     - For mid-range coins (10-1000): 0.05
     - For high-priced coins (> 1000): 0.01
  6. Use the entry-limit price as the order price
  7. Respond ONLY with the JSON array, no additional text or explanation
  8. If the prompt is not a valid trading signal, respond with "Invalid signal"
  
  Generate the JSON response now:
  `;
};
