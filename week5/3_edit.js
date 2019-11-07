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
        console.log(solution(lines[0][0], lines[1][0]));
        process.exit();
    }
}

/**************************************************************** */

const solution = (a, b) => {
    const c = Array(b.length + 1).fill(0).map((_, i) => i);
    const D = [c];

    for (let i = 1; i < a.length + 1; i++) {
        D.push([i]);
    }

    for (let j = 1; j <= b.length; j++) {
        for (let i = 1; i <= a.length; i++) {
            const ins = D[i][j - 1] + 1;
            const del = D[i - 1][j] + 1;
            const match = D[i - 1][j - 1];
            const mis = D[i - 1][j - 1] + 1;

            if (a[i - 1] === b[j - 1]) {
                D[i][j] = Math.min(ins, del, match);
            } else {
                D[i][j] = Math.min(ins, del, mis);
            }
        }
    }


    // console.log(D);


    return D[a.length][b.length];
};

const naive = (a, b) => {

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

