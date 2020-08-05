// 两数想加
// (2 -> 4 -> 3) + (5 -> 6 -> 4)
//  输出：7 -> 0 -> 8， 原因：342 + 465 = 807
// 先写链表和链表的插入
let Node = function(element) {
  this.element = element;
  this.next = null;
}

let l1 = new Node(2);
l1.next = new Node(4);
l1.next.next = new Node(3);

let l2 = new Node(5);
l2.next = new Node(6);
l2.next.next = new Node(4);

function add(l1, l2) {
  let res = new Node();
  let current = res;
  let carryFlag = 0; // 进位
  let element = 0;
  while (l1 || l2){
    let a = l1.element || 0;
    let b = l2.element || 0;

    element = (a + b + carryFlag ) % 10;
    carryFlag = Math.floor((a + b + carryFlag) / 10);
    current.next = new Node(element);
    current = current.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  return res.next
}
console.log(add(l1, l2))