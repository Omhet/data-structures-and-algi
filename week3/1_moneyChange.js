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

const denoms = [10, 5, 1];

const solution = n => {
    let res = 0;

    for (const denom of denoms) {
        let temp = 0;
        temp += Math.floor(n / denom);
        n -= temp * denom;
        res += temp;
    }

    return res;
};

const naive = n => {
    
};

const testData = [...Array(35).keys()];

exports.default = {
    solution,
    naive,
    testData
}