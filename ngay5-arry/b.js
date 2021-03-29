const arrNums = [1, 2, 3, 5];

function sqrNums(inputArrNum) {
    const output = [];
    for(let i = 0; i < inputArrNum.length; i++) {
        output.push(inputArrNum[i] * inputArrNum[i]);
    }
    return output;
}

// console.log(sqrNums(arrNums)); // [1, 4, 9, 25]
// console.log(arrNums); // [1, 2, 3, 5]

// console.log(arrNums.map(e => e * e)); // 

function myMap(arr, fn) {
    const arrOutput = [];
    for(let i = 0; i < arr.length; i++) {
        arrOutput.push(fn(arr[i]));
    }
    return arrOutput;
}
console.log(myMap(arrNums, e => e * e));

function myFilter(arr, fnCheck) {
    // tra ve cac phan tu thoa man dieu kien fnCheck
    let arrOutput = [];
    for(let i = 0; i < arr.length; i++) {
        if (fnCheck(arr[i])) arrOutput.push(arr[i]);
    }
    return arrOutput;
}

console.log(myFilter(arrNums, e => e % 2 === 1));

const oddNumbers = arrNums.filter(e => e % 2 === 1);
// console.log(oddNumbers);