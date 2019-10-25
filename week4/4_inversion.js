var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

rl.on('line', readLine);

const lines = [];
function readLine(line) {
    lines.push(line.toString().split(' '));

    if (lines.length === 2) {
        const numbers = lines[1].map(item => Number(item))
        console.log(solution(numbers));
        process.exit();
    }
}

/**************************************************************** */
// const get_number_of_inversions = (a, b, left, right) => {
//     let number_of_inversions = 0;
//     if (right <= left + 1) return number_of_inversions;
//     let ave = left + Math.floor((right - left) / 2);
//     number_of_inversions += get_number_of_inversions(a, b, left, ave);
//     number_of_inversions += get_number_of_inversions(a, b, ave, right);
//     console.log(a.slice(left, ave))
//     console.log(a.slice(ave, right))
//     //write your code here
//     return number_of_inversions;
// }

function sort(originalArray) {
    if (originalArray.length <= 1) {
        return originalArray;
    }

    const middleIndex = Math.floor(originalArray.length / 2);
    const leftArray = originalArray.slice(0, middleIndex);
    const rightArray = originalArray.slice(middleIndex, originalArray.length);

    const leftSortedArray = sort(leftArray);
    const rightSortedArray = sort(rightArray);


    for (let i = 0; i < leftSortedArray.length; i++) {
        for (let j = 0; j < rightSortedArray.length; j++) {
            if (leftSortedArray[i] > rightSortedArray[j]) {
                inversion++;
            }
        }
    }

    return mergeSortedArrays(leftSortedArray, rightSortedArray);
}

let inversion = 0;

function mergeSortedArrays(leftArray, rightArray) {
    let sortedArray = [];

    while (leftArray.length && rightArray.length) {
        let minimumElement = null;

        const a = leftArray[0];
        const b = rightArray[0];

        if (a <= b) {
            minimumElement = leftArray.shift();
        } else {

            minimumElement = rightArray.shift();
        }

        sortedArray.push(minimumElement);
    }

        // console.log(leftArray, rightArray, sortedArray)


    if (leftArray.length) {
        sortedArray = sortedArray.concat(leftArray);
    }

    if (rightArray.length) {
        sortedArray = sortedArray.concat(rightArray);
    }

    return sortedArray;
}


const solution = a => {
    // const b = Array(a.length);
    // return get_number_of_inversions(a, b, 0, a.length);
    sort(a)

    return inversion;
};

const naive = items => {
};


// const random = (n) => {
//     return Math.floor(Math.random() * n);
// };

// const randomArr = (n, r) => {
//     return Array(n).fill(0).map(() => random(r))
// };

// const testData = Array(100).fill(0).map(() => [randomArr(10000, 100000000)]);
const testData = [];

exports.default = {
    solution,
    naive,
    testData
}

