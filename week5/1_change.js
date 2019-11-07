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

const coins = [1, 3, 4];

const solution = money => {
    const minNumCoins = [0];

    for (let m = 1; m <= money; m++) {
        minNumCoins[m] = Infinity;
        for (let i = 0; i < coins.length; i++) {
            const coin = coins[i];
            if (m >= coin) {
                const numCoins = minNumCoins[m - coin] + 1;
                if (numCoins < minNumCoins[m]) {
                    minNumCoins[m] = numCoins;
                }
            }
        }
    }

    return minNumCoins[money];
};

const naive = money => {

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

