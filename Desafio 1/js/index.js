const inputArr = [5, 3, 4, 3, 5, 5, 3];

function encontrarNumeroNaoRepetido(arr) {
    
   
    return arr.filter((num) => arr.indexOf(num) === arr.lastIndexOf(num))[0];
    }
  
    const outputNum = encontrarNumeroNaoRepetido(inputArr);
    
    console.log("Output:", outputNum);