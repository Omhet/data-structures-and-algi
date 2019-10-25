const { stressTest } = require('../stress-test');
const binSearch = require('./1_binSearch').default;
const majority = require('./2_majority').default;
const qs = require('./3_qs').default;

// const res = knapsack.solution(knapsack.testData[0]);
// const res = binSearch.solution(...binSearch.testData[0]);
// console.log(res);

// stressTest(binSearch.naive, binSearch.solution, binSearch.testData);

// const res = majority.solution(majority.testData[0]);
// console.log(res);

stressTest(qs.naive, qs.solution, qs.testData);


process.exit();