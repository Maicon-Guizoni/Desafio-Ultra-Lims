function ordenarParesImpares(arr) {

    const compare = (a, b) => a % 2 - b % 2 || a - b;
   
    return arr.sort(compare);
    }
    const inputArr = [3, 1, 2, 4, 6, 5];
    const outputArr = ordenarParesImpares(inputArr);
    
    
    console.log("Output:", outputArr);