function plusMinus(arr) {
    // Write your code here
let totalPos =0
let totalNeg = 0
let totalZeros = 0

const long = arr.length

for (let i = 0; i< arr.length; i++){
    if (arr [i]>0 ){
        totalPos++ 
    }else if (arr [i]<0){
        totalNeg++
    } else totalZeros++
   
} 

const calculateRatio = (total,n)=> console.log ((total/n).toFixed(6))
calculateRatio(totalPos, long)
calculateRatio(totalNeg, long)
calculateRatio(totalZeros, long)



}