function fibonacci(n) {

    if (n <= 0) return [];

    let fibSeq = [1, 1];

    for (let i = 2; i < n; i++) {
        let nextFib = fibSeq[i - 1] + fibSeq[i - 2];

        fibSeq.push(nextFib);
    }

    return fibSeq;
}


let inputNum = 10;
let outputArr = fibonacci(inputNum);


console.log("Output:", outputArr); 