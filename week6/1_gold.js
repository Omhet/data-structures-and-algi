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
        const w = Number(lines[0][0]);
        const bars = lines[1].map(el => Number(el));

        console.log(solution(w, bars));
        process.exit();
    }
}

/**************************************************************** */


const solution = (w, bars) => {
    let result = 0

    for (let bar of bars) {
        if (result + bar <= w) {
            result += bar
        }
    }

    return result;
};

const naive = (w, bars) => {

};

const random = (n) => {
    return Math.floor(Math.random() * n);
};

const randomArr = (n, r) => {
    return Array(n).fill(0).map(() => random(r))
};

const testData = [Array(100).fill(0)];

exports.default = {
    solution,
    naive,
    testData
}

