// The syntax for the reduce method is array.reduce(function(total,currentValue,currentIndex,arr),initialValue)
// total is required = the initial value or the previously returned value of the function
// currentValue is required = The value of the current element
// currentIndex is optional = The index of the current element
// arr is optional = the array the current element belongs to

// initialValue = a value to be passed to the function as the initial value

const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = batteryBatches.reduce((sum, batch) => {
  return sum + batch;
});
console.log(totalBatteries); // the return value is 31

/* const totalBatteries = batteryBatches.reduce((sum, batch) => {
  return sum - batch;
}, 0);
console.log(totalBatteries); ======> the return value is -31 */

/* const totalBatteries = batteryBatches.reduce((sum, batch) => {
  return sum - batch;
});
console.log(totalBatteries); =======> The return value is -23, with batteryBatches[0] as the initialValue */

// The final result of running the reducer across all elements of the array is a single value
