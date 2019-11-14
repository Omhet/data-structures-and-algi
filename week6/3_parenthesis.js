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
        console.log(solution(lines[0][0]));
        process.exit();
    }
}

/**************************************************************** */




const solution = s => {
    const digits = [];
    const ops = [];

    for (let i = 0; i < s.length; i++) {
        if (i % 2 !== 0) {
            ops.push(s[i]);
        } else {
            digits.push(Number(s[i]));
        }
    }


    const n = digits.length;
    const m = [];
    const M = [];

    const minMax = (i, j, ops) => {
        let min = Infinity;
        let max = -Infinity;


        for (let k = i; k < j; k++) {
        // console.log({ i, k, M })

            const op = ops[k];

            const Mik = M[i][k];
            const mik = m[i][k];
            const Mkj = M[k + 1][j];
            const mkj = m[k + 1][j];

            // console.log({ op, Mik, mik, Mkj, mkj });


            const a = eval(`${Mik} ${op} ${Mkj}`);
            const b = eval(`${Mik} ${op} ${mkj}`);
            const c = eval(`${mik} ${op} ${Mkj}`);
            const d = eval(`${mik} ${op} ${mkj}`);

            min = Math.min(min, a, b, c, d);
            max = Math.max(max, a, b, c, d);


            // console.log({ op, Mik, mik, Mkj, mkj });
            // console.log({ a, b, c, d, min, max });
        }

        return [min, max]
    };


    for (let i = 0; i < n; i++) {
        m[i] = m[i] === undefined ?  new Array(n) : m[i];
        M[i] = M[i] === undefined ? new Array(n) : M[i];

        m[i][i] = digits[i];
        M[i][i] = digits[i];
    }

    // console.log({ M, m })

    for (let s = 0; s < n; s++) {
        for (let i = 0; i < n - s; i++) {
            let j = i + s;

            // console.log({ i, s, j})

            const [min, max] = minMax(i, j, ops);

            // console.log({ i, j, min, max });

            m[i][j] = i === j ?  m[i][j] : min;
            M[i][j] = i === j ?  M[i][j] : max;
        }

    }

    return M[0][n - 1];
};

const naive = s => {

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

