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
        console.log(solution(Number(lines[0][0])));
        process.exit();
    }
}

/**************************************************************** */

const solution = n => {
    let a = 0;
    let b = 1;

    for (let i = 2; i <= n; i++) {
        [a, b] = [b, (b + a) % 10];
    }

    return n < 2 ? n : b;
};

const naive = n => {
    let a = 0;
    let b = 1;

    for (let i = 2; i <= n; i++) {
        [a, b] = [b, b + a];
    }

    const res = n < 2 ? n : b;

    return res % 10;
};

const testData = [...Array(Math.pow(10, 4)).keys()];

exports.default = {
    solution,
    naive,
    testData
}