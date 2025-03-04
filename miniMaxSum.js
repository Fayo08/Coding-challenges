function miniMaxSum(arr) {
    // Write your code here
    
    arr.sort((a,b)=>a-b);
    
let minSum = 0
let maxSum = 0


 

for (let i = 0, j = arr.length - 1;
             i < arr.length - 1; i++, j--)
        { minSum += arr [i];
        maxSum += arr[j]
        } console.log (minSum + " " + maxSum)



}