// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4

function List() {
  let Node = function (e) {
    this.val = e;
    this.next = null;
  };
  this.insert = function (lc, val) {};
}

function combineTwoList(l1, l2) {
  if (!l1 && !l2) return null;
  if (!l1) return l2;
  if (!l2) return l1;
  let newList = null;
  if (l1.val <= l2.val) {
    newList = l1;
    newList.next = combineTwoList(l1.next, l2);
  } else {
    newList = l2;
    newList.next = combineTwoList(l2.next, l1);
  }
}
// 合并k个有序的链表
// 1·二分法，两个两个配对比较比较
// 2 对比每个链表的头部将最小的值放入新的链表中去
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  function combineTwoList(l1, l2) {
    if (!l1 && !l2) return null;
    if (!l1) return l2;
    if (!l2) return l1;
    let newList = null;
    if (l1.val <= l2.val) {
      newList = l1;
      newList.next = combineTwoList(l1.next, l2);
    } else {
      newList = l2;
      newList.next = combineTwoList(l2.next, l1);
    }
    return newList;
  }
  const merge = (lists1) => {
    if (lists1.length === 0) return null;
    if (lists1.length === 1) return lists1[0];
    const a = [];
    for (let i = 0; i < lists1.length; i += 2) {
      if (lists1[i] || lists1[i + 1]) {
        // 存在数组中前面的值为空的情况
        a.push(combineTwoList(lists1[i], lists1[i + 1]));
      }
    }
    return merge(a);
  };
  return merge(lists);
};

// 合成k个有序链表为1个有序链表
