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
        // console.log(dist, tank, stops)
        console.log(solution([dist, tank, stops]));
        process.exit();
    }
}

/**************************************************************** */

const solution = ([dist, tank, stops]) => {
    let res = 0;
    let curDist = 0;

    stops = [0, ...stops, dist]

    for (let i = 1; i < stops.length; i++) {
        const curStop = stops[i];
        const prevStop = stops[i - 1];
        const off = curStop - curDist;
        // console.log({ off, curStop, curDist })
        if (off > tank) {
            if (curStop - prevStop > tank) {
                return -1;
            }
            curDist = prevStop;
            res++;
        }
    }

    // console.log({ curDist, tank, dist, stops })
    return curDist + tank >= dist ? res : -1;
};

const naive = n => {

};

const testData = [[950, 400, [200, 375, 550, 750]], [10, 3, [1, 2, 5, 9]], [5, 1, [1, 2, 3, 4]]];

exports.default = {
    solution,
    naive,
    testData
}