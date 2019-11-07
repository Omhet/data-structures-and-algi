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
        const { num, resOps } = solution(Number(lines[0][0]));
        console.log(`${num}\n${resOps.join(' ')}`);
        process.exit();
    }
}

/**************************************************************** */


const solution = n => {
    const minNumOps = [0, 0];
    const resOps = [];

    for (let m = 2; m <= n; m++) {
        minNumOps[m] = Infinity;

        const ops = [m / 3, m / 2, m - 1];

        for (let i = 0; i < ops.length; i++) {
            const op = ops[i];
            const prevMinNum = minNumOps[op];
            if (prevMinNum !== undefined) {
                const numCoins = prevMinNum + 1;
                if (numCoins < minNumOps[m]) {
                    minNumOps[m] = numCoins;
                }
            }
        }
    }

    const initN = n;

    // Recreating a sequence of intermediate results
    while (n >= 2) {
        const minNum = minNumOps[n];
        const ops = [n / 3, n / 2, n - 1];
        for (let i = 0; i < ops.length; i++) {
            const op = ops[i];

            const prevMinNum = minNumOps[op];

            if (prevMinNum !== undefined) {
                if (minNum - 1 === prevMinNum) {
                    resOps.unshift(op);
                    n = op;
                    break;
                }
            }
        }
    }

    resOps.push(initN);

    return { num: minNumOps[initN], resOps };
};

const naive = n => {

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

