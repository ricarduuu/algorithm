// 链表，查找/插入/删除       复杂度分析

// 单向链表
function List() {
  let Node = function () {
    this.element = element;
    this.next = null;
  }
  // 初始节点
  let head = null;
  let length = 0;
  
  this.getList = function () {
    return head
  }
  // 查找
  this.search = function (element) {
    let p = head
    if (!p) return false
    while(p) {
      // 也可以增加一个index返回一个位置
      if (p.element === element) return true
    }
    return false
  }
  // 插入
  this.insert = function (element, position) {
    let node = new Node(element);
    if (position >= 0 && position <= length) {
      if (position === 0) {
        node.next = head
        head = node
        return node
      }
      let prev = head
      let cur = head
      let index = 0
      while(index < position) {
        prev = cur;
        cur = cur.next;
        index ++
      }
      prev.next = node;
      node.next = cur;
      length += 1;
    } else {
      return null
    }
  }
  // 追加
  this.append = function (element) {
    let node = new Node(element);
    let p = head;
    if (!head) {
      head = node
    } else {
      while(p.next) {
        p = p.next
      }
      p.next = p.node
    }
    length += 1;
  }
  // 删除
  this.remove = function (element) {
    // 哎呀有点点绕脑子
    let p = head;
    let pev = head;
    while(p) {
      if (p.element === element) {
        p = p.next
        pev.next = p;
      } else {
        pev = p
        p = p.next
      }
    }
  }
  // 判空

  // size

}
// 双向链表

// 循环链表

