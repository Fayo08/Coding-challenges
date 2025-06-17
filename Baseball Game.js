
    function baseballGame(ops) {
        if (ops.length === 0){
            return;
        }

    const newOps = []



for (let i =0; i< ops.length; i++){


} if (!isNaN(Number(ops[i]))) {
            newOps.push(Number(ops[i]))
        } 
            
            else if ( ops[i] == "D"){
     newOps.push(newOps[newOps.length - 1] * 2)
} else if ( ops[i]=== "C"){
  newOps.pop();

} else if ( ops[i]=== "+"){
   newOps.push( newOps[newOps.length-1] + newOps[newOps.length-2])
} else {
    newOps.push(ops[i])
}return newOps.reduce((a, b) => a + b, 0);

        
    } 