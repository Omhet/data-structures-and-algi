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
        console.log(solution(lines[1]));
        process.exit();
    }
}

/**************************************************************** */

const solution = items => {
    const map = {};
    const n = items.length;

    // console.log({items})


    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const count = map[item];
        map[item] = count === undefined ? 1 : count + 1;

        if (count > n / 2) {
            return 1;
        }
    }

    const keys = Object.keys(map);
    // console.log({ keys, map})
    for (let i = 0; i < keys.length; i++) {
        const count = map[keys[i]];
        if (count > n / 2) {
            return 1;
        }
    }

    return 0;
};

const naive = items => {

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

