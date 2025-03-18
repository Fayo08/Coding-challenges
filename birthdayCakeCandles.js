function birthdayCakeCandles(candles) {
    // Write your code here
    const tallestCandle = Math.max(...candles)
    let answer = 0
    for(let i = 0; i < candles.length; ++i){
        if(candles[i] === tallestCandle){
            answer++
        }
    };
    

}