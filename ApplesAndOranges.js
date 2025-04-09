function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
 let  appleCount= 0
 let  orangeCount= 0
for(let i=0; i < apples.length; i++){
  const applesPosition = a + apples[i];
   if (applesPosition >= s && applesPosition <= t)
   {  appleCount++;}
  
}
for(let i=0; i < oranges.length; i++){
 const  orangesPosition = b + oranges[i] ;
    if (orangesPosition >= s && orangesPosition <= t)
   {orangeCount++;}
  
}

console.log (appleCount);
console.log (orangeCount);


}