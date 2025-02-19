function hourglassSum(arr) {
    // Write your code here
let R = 6
let C = 6

 if (R < 3 || C < 3){
            console.log("Not possible");
            return;
        } 
        
        let max_sum = Number.MIN_VALUE
        for (let i=0; i<R-2; i++){
            for(let j=0; j<C-2; j++){
                
                const sum = (arr[i][j]+ arr[i][j+1] +arr[i][j+2]+arr[i+1][j+1]+arr[i+2] [j] +arr[i+2][j+1] + arr[i+2] [j+2])
                
                max_sum = Math.max(max_sum, sum);
            }  
        } return max_sum
}