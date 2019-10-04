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

const findPisanoPeriodForSum = m => {
    const period = [];
    let a = 0;
    let b = 1;
    let sum = 1;

    period.push(a);
    period.push(b);

    do {
        [a, b] = [b, (b + a) % m];
        sum += b;
        sum = sum % 10;
        period.push(sum);
        if (a === 0 && b === 1) {
            period.pop();
            period.pop();
            return period;
        }
    } while (1)


};

const solution = n => {
    const period = findPisanoPeriodForSum(10);
    const periodNum = Math.floor(n % period.length);

    return period[periodNum];
};


const naive = n => {
    if (n < 2) {
        return n;
    }

    let a = 0;
    let b = 1;
    let sum = 1;

    for (let i = 2; i <= n; i++) {
        [a, b] = [b, (b + a) % 10];
        sum += b;
        sum = sum % 10;
    }

    return sum;
};

const testData = [...Array(Math.pow(10, 7)).keys()];

exports.default = {
    solution,
    naive,
    testData
}