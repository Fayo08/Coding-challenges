function dynamicArray(n, queries) {
    // Write your code here
    let lastAnswer = 0;
    const newArr = [];
    const answers = [];

    for(const query of queries){
        const idx = (query[1]^ lastAnswer) % n;
        if (query[0] === 1){
newArr[idx].push(query[2]);
continue;
        }
        lastAnswer= newArr[idx][query[2]%newArr[idx].length];
answers.push(lastAnswer);
    }
    return answers;
    

}


