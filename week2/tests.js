const { stressTest } = require('../stress-test');
const fibNum = require('./1_fib_num').default;
const fibNumLastDigit = require('./2_fibNumLastDigit').default;
const gcd = require('./3_gcd').default;
const lcm = require('./4_lcm').default;
const fibAgain = require('./5_fibAgain').default;
const fibSum = require('./6_fibSumLastDigit').default;

// stressTest(fibNum.naive, fibNum.solution, fibNum.testData);
// stressTest(fibNumLastDigit.naive, fibNumLastDigit.solution, fibNumLastDigit.testData);
// stressTest(gcd.naive, gcd.solution, gcd.testData);
// stressTest(lcm.naive, lcm.solution, lcm.testData);
// stressTest(fibAgain.naive, fibAgain.solution, fibAgain.testData);
stressTest(fibSum.naive, fibSum.solution, fibSum.testData);

process.exit();
