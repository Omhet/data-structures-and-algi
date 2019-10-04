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

    if (lines.length === 1) {
        console.log(solution([Number(lines[0][0]), Number(lines[0][1])]));
        process.exit();
    }
}

/**************************************************************** */

const solution = ([a, b]) => {
    if (b === 0) {
        return a;
    }

    const aRem = a % b;
    return solution([b, aRem]);
};

const naive = ([a, b]) => {
    let gcd = 1;

    for (let i = 2; i <= Math.min(a, b); i++) {
        if (a % i === 0 && b % i === 0) {
            gcd = i;
        }
    }

    return gcd;
};

const random = (n) => {
    return Math.floor(Math.random() * n);
};

const testData = Array(100).fill(0).map(() => [random(Math.pow(10, 7)), random(Math.pow(10, 7))]);


exports.default = {
    solution,
    naive,
    testData
}