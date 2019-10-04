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

const gcd = ([a, b]) => {
    if (b === 0) {
        return a;
    }

    const aRem = a % b;
    return gcd([b, aRem]);
};

const solution = ([a, b]) => {
    return a * (b / gcd([a, b]));
};

const naive = ([a, b]) => {
    for (let i = 1; i <= a * b; i++) {
        if (i % a === 0 && i % b === 0) {
            return i;
        }
    }

    return a * b;
};

const random = (n) => {
    return Math.floor(Math.random() * n);
};

const testData = Array(100).fill(0).map(() => [random(Math.pow(10, 4)), random(Math.pow(10, 4))]);


exports.default = {
    solution,
    naive,
    testData
}