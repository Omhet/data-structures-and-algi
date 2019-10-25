const _ = require('lodash');

exports.stressTest = (naive, testing, args = []) => {
    let i = 0;

    while (true) {
        const arg = args[i];

        if (arg === undefined) {
            console.log('No bugs, nice!')
            return;
        }

        for (const item of arg) {
            console.log(`Arg: ${item}`);
        }

        const a = naive(...arg);
        const b = testing(...arg);


        if (!_.isEqual(a, b)) {
            console.log('FAILED', `Naive: ${a}`, `Testing: ${b}`);
            return;
        }

        console.log(`Naive: ${a}`, `Testing: ${b}`);
        i++;
    }
};

