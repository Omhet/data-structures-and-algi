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


const findPisanoPeriod = m => {
    const period = [];
    let a = 0;
    let b = 1;

    period.push(a);
    period.push(b);

    do {
        [a, b] = [b, (b + a) % m];
        period.push(b);
        if (a === 0 && b === 1) {
            period.pop();
            period.pop();
            return period;
        }
    } while (1)


};

const solution = ([n, m]) => {
    const period = findPisanoPeriod(m);
    const periodNum = Math.floor(n % period.length);

    return period[periodNum];
};

const naive = ([n, m]) => {
    let a = 0;
    let b = 1;

    for (let i = 2; i <= n; i++) {
        [a, b] = [b, b + a];
    }

    const res = n < 2 ? n : b;

    return res % m;
};

const random = (n) => {
    return Math.floor(Math.random() * n);
};

const testData = Array(100).fill(0).map(() => [random(Math.pow(10, 3)), random(Math.pow(10, 1)) + 2]);


exports.default = {
    solution,
    naive,
    testData
}