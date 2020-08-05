// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

// 笨办法
var twoSum = function(nums, target) {
    for (let i =0; i < nums.length - 1; i++) {
      for(let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          return[i, j]
        }
      }
    }
};
console.log(twoSum([11, 15, 9, 2, 7], 9 ))
// 减法 + 查找  hashMap 空间换时间
var twoSum1 = function(nums, target) {
  var temp = [];
  for(var i=0;i<nums.length;i++){
      var dif = target - nums[i];
      if(temp[dif] != undefined){
          return [temp[dif],i];
      }
      temp[nums[i]] = i;
  }
};
console.log(twoSum1([11, 15, 9, 2, 7], 9 ))