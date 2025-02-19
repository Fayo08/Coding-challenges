function compareTriplets(a, b) {
    if (a.length !== b.length){
        return false;
    } 
    let alice = 0;
    let bob = 0;
    
    for(var i = 0; i<a.length; i++){
        if (a[i]<b[i] ){
             bob++;
        } else if ( a[i]>b[i] ){
             alice++;
        }
       
    } return [alice,bob]
    
    
    } const result = compareTriplets([5, 6, 7], [3, 6, 10]);
    console.log  (result)