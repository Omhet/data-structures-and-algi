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

    if (lines.length === Number(lines[0][0]) + 1) {
        const capacity = Number(lines[0][1]);
        const items = [];
        for (let i = 1; i < lines.length; i++) {
            const value = Number(lines[i][0]);
            const weight =  Number(lines[i][1]);
            items.push({ value, weight });
        }
        console.log(solution([capacity, items]));
        process.exit();
    }
}

/**************************************************************** */

const solution = ([capacity, items]) => {
    items.sort((a, b) => b.value / b.weight - a.value / a.weight);

    let res = 0;
    for (const { value, weight } of items) {
        const fraction = capacity / weight;
        if (fraction >= 1) {
            res += value;
            capacity -= weight;
        } else {
            res += value * fraction;
            return res;
        }
    }

    return res;
};

const naive = n => {

};

const testData = [[35, [{ value: 60, weight: 20 }, { value: 100, weight: 50 }, { value: 120, weight: 30 }]]];

exports.default = {
    solution,
    naive,
    testData
}