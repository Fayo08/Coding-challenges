function birthdayCakeCandles(candles) {
    // Write your code here
    const max = Math.max(...candles)
    const count = candles.filter(candle=>candle===max).length;
    console.log(count)
    

}