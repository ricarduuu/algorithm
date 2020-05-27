// LRU least recent used
// @1 Map的实现方法
function LRUCache(num) {
  this.capacity = num;
  this.caches = new Map()
}
LRUCache.prototype = {
  add: function (key, val) {
    // 压力入数据的时候，实行lru缓存策略
    const { caches, capacity } = this
    if (caches.size >= capacity) {
      const key = caches.keys().next().value
      caches.delete(key)
    }
    caches.set(key, val)
  },
  get:function (key) {
    // map是按照设置的顺序存储的
    const { caches } = this
    const val = caches.get(key)
    if (!key) return
    // 多了删除操作
    caches.delete(key)
    caches.set(key, val)
    return val
  }
}
const lru = new LRUCache(3)
lru.add(1, 1)
lru.add(2, 2)
lru.add(3, 3)
lru.add(4, 4)
console.log(lru.caches)


// @2 array + object 的实现方法

class LRUCache1{
  constructor(capacity){
      this.capacity = capacity;
      this.stack = [];
  }

  // 当前队列的长度
  get __length(){
      return this.stack.length;
  }
  
  // 查找元素下标
  _findIdx(key){
      const {stack} = this;
      for(let i=0; i<stack.length; i++){
          if(stack[i].key === key){
              return i;
          }
      }
      return -1;
  }

  // 末尾追加元素
  _push(key, value){
      this.stack.push({key, value});
  }

  // 访问数据
  get(key){
      const findIdx = this._findIdx(key);
      if(findIdx === -1) return -1;
      
      const [data] = this.stack.splice(findIdx, 1);
      this._push(data.key, data.value);
      return data.value;
  }
  
  // 增加数据
  put(key, value){
      const findIdx = this._findIdx(key);

      if(findIdx === -1){ // 元素不存在
          if(this.__length < this.capacity){ // 新增
              this._push(key, value);
          }else{ // 缓存容量将要溢出
              // 去掉最久未访问的元素
              const {key: delKey} = this.stack.shift();
              console.log(`该操作会使得密钥 ${delKey} 作废`)
              // 将最新的数据追加
              this._push(key, value);
          }
      }else{ // 元素存在，更新
          this.stack.splice(findIdx, 1);
          this._push({key, value})
      }
  }
}

