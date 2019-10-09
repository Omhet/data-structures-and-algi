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
    if (lines.length === 4) {
        const dist = Number(lines[0][0]);
        const tank = Number(lines[1][0]);
        const stops = lines[3].map(stop => Number(stop));

        console.log(solution([dist, tank, stops]));
        process.exit();
    }
}

/**************************************************************** */

const solution = ([dist, tank, n, stops]) => {
    let res = 0;
    let curDist = 0;

    stops = [0, ...stops, dist]

    for (let i = 1; i < stops.length; i++) {
        const off = stops[i] - curDist;
        console.log( { off, curStop: stops[i]})
        if (off > tank) {
            curDist = stops[i - 1];
            res++;
        }
    }

    console.log({curDist, tank, dist, stops})
    return curDist + tank >= dist ? res : -1;
};

const naive = n => {

};

const testData = [[950, 400, 4, [200, 375, 550, 750]], [10, 3, 4, [1, 2, 5, 9]]];

exports.default = {
    solution,
    naive,
    testData
}