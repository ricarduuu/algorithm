// 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。

// 请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

// 你可以假设 nums1 和 nums2 不会同时为空。


// 二分法
let findMiddleNum = function (m, n) {
  if (!m && !n) { retutn }
  let arr = []
  let brr = []
  const mLen = m && m.length || 0
  const nLen = n && n.length || 0
  if (mLen % 2 === 0 && mLen) {
    arr = [m[m/2 - 1], m[m/2]]
  }else {
    arr = [m[parseInt(m / 2)]]
  }
  if (nLen % 2 === 0 && nLen) {
    brr = [n[n/2 - 1], n[n/2]]
  }else {
    brr = [n[parseInt(n / 2)]]
  }
  let crr = arr.concat(brr)
  crr = crr.sort();
}