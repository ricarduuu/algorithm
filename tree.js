/* 为什么是二叉树，而不是N叉
*
* 大多数数据的解析比较好二分，二叉树比较简单，
* n叉树也是由二叉树组合起来的
* 努力的说服自己，等--------------进一步了解和应用之后再说吧
*
*
*
*
* 仅有唯一一个根节点，没有节点则为空树
* 除根节点外，每个节点都有并仅有唯一一个父节点
* 节点间不能形成闭环
*
* 二叉树的遍历
* -- 前序遍历--- 打印    节点/左子树/右子树
* -- 中序遍历---- 打印   左子树/节点/右子树
* --  后序遍历--- 打印   左子树/右紫子树/节点
* */

// 前序遍历
  // 递归实现
  // 前序遍历
var preorderTraversal = (root) => {
  let result = []
  var preOrderTraverseNode = (node) => {
      if(node) {
          // 先根节点
          result.push(node.val)
          // 然后遍历左子树
          preOrderTraverseNode(node.left)
          // 再遍历右子树
          preOrderTraverseNode(node.right)
      }
  }
  preOrderTraverseNode(root)
  return result
};

  // 迭代实现 利用栈来记录递归的过程

  // 前序遍历
  const preorderTraversal = (root) => {
    const list = [];
    const stack = [];
    
    // 当根节点不为空的时候，将根节点入栈
    /**
     * 根结点被处理后，右节点/左节点
     * 右节点入栈后会一直被压在栈底，等左节点内的节点纷纷入栈，出栈，处理完成之后，才会处理
     * ***/
    if(root) stack.push(root)
    while(stack.length > 0) {
        const curNode = stack.pop()
        // 第一步的时候，先访问的是根节点
        list.push(curNode.val)
        
        // 我们先打印左子树，然后右子树
        // 所以先加入栈的是右子树，然后左子树
        if(curNode.right !== null) {
            stack.push(curNode.right)
        }
        if(curNode.left !== null) {
            stack.push(curNode.left)
        }
    }
    return list
  }


  // 给定一个二叉树，返回它的 中序 遍历。
  const inorderTraversal = (root) => {
      let list = []
      let stack = []
      let node = root
      
      while(node || stack.length) {
      // 遍历左子树
        while(node) {
        stack.push(node)
          node = node.left
        }
        
        node = stack.pop()
        list.push(node.val)
        node = node.right
      }
      return list
  }