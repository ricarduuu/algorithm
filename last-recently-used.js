// LRU least recent used
// @1 Map的实现方法 效率低 占用空间多
function LRUCache(num) {
  this.capacity = num;
  this.caches = new Map();
}
LRUCache.prototype = {
  add: function (key, val) {
    // 压力入数据的时候，实行lru缓存策略
    const {caches, capacity} = this;
    if (caches.size >= capacity) {
      const key = caches.keys().next().value;
      caches.delete(key);
    }
    caches.set(key, val);
  },
  get: function (key) {
    // map是按照设置的顺序存储的
    const {caches} = this;
    const val = caches.get(key);
    if (!key) return;
    // 多了删除操作
    caches.delete(key);
    caches.set(key, val);
    return val;
  },
};
const lru = new LRUCache(3);
lru.add(1, 1);
lru.add(2, 2);
lru.add(3, 3);
lru.add(4, 4);
console.log(lru.caches);

// @2 array + object 的实现方法

class LRUCache1 {
  constructor(capacity) {
    this.capacity = capacity;
    this.stack = [];
  }

  // 当前队列的长度
  get __length() {
    return this.stack.length;
  }

  // 查找元素下标
  _findIdx(key) {
    const {stack} = this;
    for (let i = 0; i < stack.length; i++) {
      if (stack[i].key === key) {
        return i;
      }
    }
    return -1;
  }

  // 末尾追加元素
  _push(key, value) {
    this.stack.push({key, value});
  }

  // 访问数据
  get(key) {
    const findIdx = this._findIdx(key);
    if (findIdx === -1) return -1;

    const [data] = this.stack.splice(findIdx, 1);
    this._push(data.key, data.value);
    return data.value;
  }

  // 增加数据
  put(key, value) {
    const findIdx = this._findIdx(key);

    if (findIdx === -1) {
      // 元素不存在
      if (this.__length < this.capacity) {
        // 新增
        this._push(key, value);
      } else {
        // 缓存容量将要溢出
        // 去掉最久未访问的元素
        const {key: delKey} = this.stack.shift();
        console.log(`该操作会使得密钥 ${delKey} 作废`);
        // 将最新的数据追加
        this._push(key, value);
      }
    } else {
      // 元素存在，更新
      this.stack.splice(findIdx, 1);
      this._push({key, value});
    }
  }
}

// @3 hash表+双向链表实现
function Node(key, val) {
  this.key = key;
  this.val = val;
}
function linkNode(key, val) {
  this.key = key;
  this.val = val;
  this.prev = null;
  this.next = null;
}
class DoubleLink {
  constructor() {
    this.head = new linkNode(-1, -1);
    this.tail = new linkNode();
    this.size = 0;
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  addFirst = function (node) {
    const next = this.head.next;
    this.head.next = node;
    next.prev = node;
    node.prev = this.head;
    node.next = next;
  };
  remove = function (node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  };
  removeTail = function () {
    const node = this.tail.prev;
    this.tail.prev = node.prev;
    node.prev.next = this.tail;
    return node;
  };
}
function LRUCache(capacity) {
  this.capacity = capacity;
  // 初始化hash映射表
  this.map = new Map();
  // 初始化双向链表
  this.cache = new DoubleLink();
}
LRUCache.prototype.get = function (key) {
  const {map} = this;
  const mapNode = map.get(key);
  if (!mapNode) return -1;
  else {
    this.cache.remove(mapNode);
    //再插入第一个
    this.cache.addFirst(mapNode);
    const {val} = mapNode;
    return val;
  }
};
LRUCache.prototype.put = function (key, val) {
  const {map} = this;
  const mapNode = map.get(key);
  if (!mapNode) {
    // 不存在key
    const node = new Node(key, val);
    this.cache.addFirst(node);
    this.map.set(key, node);
    this.cache.size++;
    if (this.cache.size > this.capacity) {
      const {key} = this.cache.removeTail();
      // map删除
      this.map.delete(key);
      this.cache.size--;
    }
  }
  if (mapNode) {
    // 先删除
    console.log(173, mapNode);
    this.cache.remove(mapNode);
    //再插入第一个
    mapNode.val = val;
    this.cache.addFirst(mapNode);
    this.map.set(key, mapNode);
  }
};
