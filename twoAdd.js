// 两数想加
// (2 -> 4 -> 3) + (5 -> 6 -> 4)
//  输出：7 -> 0 -> 8， 原因：342 + 465 = 807
// 先写链表和链表的插入
let ListNode = function(val) {
  this.val = val;
  this.next = null;
}

let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

  /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
let res = new ListNode();
  let current = res;
  let carryFlag = 0; // 进位
  let val = 0;
  while (l1 || l2){
    let a = l1 ? l1.val || 0 : 0;
    let b = l2 ? l2.val || 0 : 0;

    val = (a + b + carryFlag ) % 10;
    carryFlag = Math.floor((a + b + carryFlag) / 10);
    current.next = new ListNode(val);
    current = current.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  // 缺少 进位，但是下一个位置没有值相加的情况。因为进位都是在下一次才计算的
  if (carryFlag) {
    current.next = new ListNode(carryFlag);
    current = current.next;
  }
  return res.next
};
console.log(addTwoNumbers(l1, l2))