exports.stressTest = (naive, testing, args = []) => {
    let i = 0;

    while (true) {
        const arg = args[i];
        
        console.log(`Arg: ${arg}`);

        if (arg === undefined) {
            console.log('No bugs, nice!')
            return;
        }

        const a = naive(arg);
        const b = testing(arg);

        if (a !== b) {
            console.log('FAILED', `Arg: ${arg}`, `Naive: ${a}`, `Testing: ${b}`);
            return;
        }

        console.log(`Arg: ${arg}`, `Naive: ${a}`, `Testing: ${b}`);
        i++;
    }
};

