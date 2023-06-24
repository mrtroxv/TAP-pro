function twoSum(nums, target) {
    const hashMap = {};
  
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      const complement = target - num;
  
      if (hashMap.hasOwnProperty(complement)) {
        return [hashMap[complement], i];
      }
  
      hashMap[num] = i;
    }
  
    return [];
  }
  
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter the numbers (comma-separated): ', (input) => {
    const nums = input.split(',').map(num => parseInt(num, 10));
  
    readline.question('Enter the target number: ', (target) => {
      const result = twoSum(nums, parseInt(target, 10));
      console.log('Result:', result);
  
      readline.close();
    });
  });
  