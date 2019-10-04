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
        console.log(solution(lines));
        process.exit();
    }
}

/**************************************************************** */

const solution = lines => {
    let nums = lines[1];
    nums.sort((a, b) => b - a);

    return nums[0] * nums[1];
};