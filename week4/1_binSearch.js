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
        const arr = lines[0].slice(1);
        const toFind = lines[1].slice(1);
        const res = solution(arr, toFind);
        console.log(res.join(' '));
        process.exit();
    }
}

/**************************************************************** */

const binSearch = (arr, l, r, item) => {
    if (l > r) {
        return -1;
    }
    
    const m = Math.floor((l + r) / 2);
    const comp = arr[m];

    // console.log({ comp, item, l, r, m })

    if (item === comp) {
        return m;
    } 

    if (item < comp) {
        return binSearch(arr, l, m - 1, item);
    } else {
        return binSearch(arr, m + 1, r, item);
    }

    // let start=0, end=arr.length-1; 
          
    // // Iterate while start not meets end 
    // while (start<=end){ 
  
    //     // Find the mid index 
    //     let mid=Math.floor((start + end)/2); 
   
    //     // If element is present at mid, return True 
    //     if (arr[mid]===x) return mid; 
  
    //     // Else look in left or right half accordingly 
    //     else if (arr[mid] < x)  
    //          start = mid + 1; 
    //     else
    //          end = mid - 1; 
    // } 
   
    // return -1; 
};

const solution = (arr, toFind) => {
    arr.sort((a, b) => a - b);
    const res = [];
    for (const item of toFind) {
        res.push(binSearch(arr, 0, arr.length, item))
    }
    return res;
};

const naive = (arr, toFind) => {

    const res = toFind.map(item => arr.indexOf(item));

    return res;
};

const random = (n) => {
    return Math.floor(Math.random() * n);
};

const randomArr = (n, r) => {
    return Array(n).fill(0).map(() => random(r))
};

const testData = Array(100).fill(0).map(() => [randomArr(10, 10).sort((a, b) => a - b), randomArr(10, 10)]);

exports.default = {
    solution,
    naive,
    testData
}