const { stressTest } = require('../stress-test');
const knapsack = require('./2_knapsack').default;
const carFuel = require('./3_carFuel').default;

// const res = knapsack.solution(knapsack.testData[0]);
const res = carFuel.solution(carFuel.testData[2]);
console.log(res);
process.exit();