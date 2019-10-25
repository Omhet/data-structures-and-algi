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

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const partition2 = (arr, l, r) => {
    const x = arr[l];
    let j = l;
    for (let i = l + 1; i <= r; i++) {
        if (arr[i] <= x) {
            j++;
            [arr[i], arr[j]] = [arr[j], arr[i]];

        }
    }
    [arr[l], arr[j]] = [arr[j], arr[l]];

    return j;
};

const qs = (arr, l, r) => {
    if (l >= r) {
        return;
    }

    const k = randomInteger(l, r - 1);

    [arr[l], arr[k]] = [arr[k], arr[l]];
    const m = partition2(arr, l, r)
    qs(arr, l, m - 1);
    qs(arr, m + 1, r);
};


const solution = arr => {
    qs(arr, 0, arr.length - 1);
    return arr.join(' ');
};

const naive = items => {
    return items.sort((a, b) => a - b).join(' ');
};


const random = (n) => {
    return Math.floor(Math.random() * n);
};

const randomArr = (n, r) => {
    return Array(n).fill(0).map(() => random(r))
};

const testData = Array(10000).fill(0).map(() => [randomArr(10000, 100000000)]);

exports.default = {
    solution,
    naive,
    testData
}

