// 链表，查找/插入/删除       复杂度分析
// https://juejin.im/post/5e8defe95188257a6a0bc870#heading-12
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
  this.isEmpty = function(){ return length === 0 } 
  this.size = function(){ return length }
// 复杂度 O(n)

}
// 双向链表

function doubleLinkedList() {
  let Node = function (element) {
    this.prev = null ;
    this.next = null;
    this.element = element;
  }
  let head = null;
  let length = 0;
  let tail = null; // 记录尾节点,便于添加删除操作，提升效率，算是牺牲空间换取时间
  // 插入节点
  this.insert = function (position, element) {
    let node = new Node(element)
    let prev = head,
        cur = head,
        index = 0;
    if (position === 0) {
      if (!head) {
        head = node;
        tail = node;
        }else {
          node.next = head;
          head.prev = node
          head = node
        }
    } else if (position === length) {
      node.prev = tail;
      tail.next = node;
      tail = node;
    } else if (position < length) {
      while (index < position){
        prev = cur
        cur = cur.next
        index ++
      }
      prev.next = node;
      node.prev = prev;
      cur.prev = node;
      node.next = cur;
    }
  }

    // 删除某个位置的节点
    this.remove = function(position) {
      if (position >= 0 && position < length && length >0) {
        let index = 0;
        let prev = head,
        curr = head;
        if (position === 0) {
          if (length === 1) {
            head = null;
            tail = null;
          } else {
            head = curr.next
            head.prev = null;
          }
        }
        while(index < position) {
          prev = curr;
          curr = curr.next
          index ++
        }
        // 删除prev
        prev.next = curr.next;
        curr.next.prev = prev;

        length--
        return curr.element
      } else {
        return null
      }
    }

    // 查找

    // 复杂度分析

}

// 循环链表（单链表循环）
// 对循环链表的特点了解还不够暂且搁置------------------后续对链表有一翻认识后补上

function cycleLinkedList() {
  let Node = function (element) {
    this.element = element;
    this.next = null
  }
  // 初始头节点为 null
  let head = null
  
  // 链表长度
  let length = 0
  // 操作
  this.search = function(element) {

  }
  this.insert = function(positon, element) {
    if (position ) {

    }
  }
  this.removeAt = function(position){}
  this.isEmpty = function(){ return length === 0 } 
  this.size = function(){ return length }
}




// 合并两个有序的单向链表，并排序    递归极简
/**
 * 比如 1-2-3-4 1-3-5-6
 * 合并为 1-1-2-3-3-4-5-6
 */

 function mergeLinkedList(l1, l2) {
    if (!l1) {
      return l2
    }
    if (!l2) {
      return l1
    }

    if (l1.element <= l2.element) {
      l1.next = mergeLinkedList(l1.next, l2)
      return l1
    } else {
      l2.next = mergeLinkedList(l2.next, l1)
      return l2
    }
 }

 // hash表 解决查找符合两数之和的元素
 /**
  * arr: [0,2,7,1,6]    target: 9
  * res: [1,2]
  * 时间复杂度 O（n）
  **/

  function twoSum(arr, target) {
    const hash = new Map();
    for (let i = 0; i < arr.length; i++) {
      if (hash.has(arr[i])) {
        return [hash.get(arr[i]), i]
      }  
      hash.set(arr[i], i)
    }
    return []
  }



  // 数组扁平化去重排序
  flatArr = arr.flat() // flat() 方法对node版本有要求，至少需要12.0以上
  disArr = Array.form((new Set(flatArr)))
  disArr.sort((a, b) => a- b)


// 计算两个数组的交集

function intersection(arr1, arr2) {
  return [...new Set(arr1.filter(item => arr2.includes(item)))]
}

// 如果要计算多个数组的交集需要使用累加器 reduce
/**
 * ！！！！！！
 * 累加器的重要性和特点解释
 *  为啥一直对累加器很迷
 * 当累加器对一个数组进行操作的时候，累加器中的函数每次执行完成都返回一个值，下次还会对这个值进行操作的
 * 累加器对数组集合操作，返回的当然是一个数组了，下一次还是对上次返回的数组进行操作
 **/
function multIntersection (...args) {
  if (args.length === 0) {
    return
  }
  if (args.length === 1) {
    return args[0]
  }
  // /....
  return [...new Set(args.reduce((result, arg) => {
    return result.filter(item => arg.includes(item))
  }))]
}
