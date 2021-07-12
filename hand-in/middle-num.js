var findMedianSortedArrays = function (nums1, nums2) {
  // 保证num1是比较短的数组
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }
  const length1 = nums1.length;
  const length2 = nums2.length;
  let min = 0;
  let max = length1;
  let half = Math.floor((length1 + length2 + 1) / 2);
  while (max >= min) {
    const i = Math.floor((max + min) / 2);
    const j = half - i;
    if (i > min && nums1[i - 1] > nums2[j]) {
      max = i - 1; // 左侧数据过大 向左移动
    } else if (i < max && nums1[i] < nums2[j - 1]) {
      min = i + 1; // 左侧数据过小 向右移动
    } else {
      // 边界条件
      let left, right;
      if (i === 0) left = nums2[j - 1];
      else if (j === 0) left = nums1[i - 1];
      else left = Math.max(nums1[i - 1], nums2[j - 1]);

      if (i === length1) right = nums2[j];
      else if (j === length2) right = nums1[i];
      else right = Math.min(nums1[i], nums2[j]);

      return (length1 + length2) % 2 ? left : (left + right) / 2;
    }
  }
};
