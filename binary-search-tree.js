class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);
    if(!this.root){
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while(current) {
      if(val === current.val) return undefined;
      if(val < current.val) {
        if(!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if(!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }

  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if(this.root === null){
      this.root = new Node(val);
      return this;
    };
    
    if(val < current.val) {
      if(current.left === null) {
        current.left = new Node(val)
        return this;
      }
      return this.insertRecursively(val, current.left)
    }
    else if(val > current.val) {
      if(current.right === null) {
        current.right = new Node(val)
        return this;
      }
      return this.insertRecursively(val, current.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    let found = false;
    if(current.val === val) return current;

    while(current && !found) {
      if(current.val > val) {
        current.val = current.left;
      } else if(val > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if(!found) return undefined;
    return current;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if(current === null) return undefined;

    if(val < current.val) {
      if(current.left === null) {
        return undefined;
      }
      return this.findRecursively(val, current.left);
    } else if(val > current.val){
      if(current.right === null){
        return undefined;
      }
      return this.findRecursively(val, current.right);
    }
    return current;

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node) { 
    let arr = [];
    if(!this.root){
      this.root = node;
      console.log('this.root', this.root)
    }
    let current = this.root;

    function traverse(node){
      arr.push(node.val);
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    }

    traverse(current);
    return arr;

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let arr = [];
    if(!this.root) return;
    let current = this.root;

    function traverse(node){
      node.left && traverse(node.left);
      arr.push(node.val);
      node.right && traverse(node.right);
    };
    traverse(current);
    return arr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let arr = [];
    if(!this.root) return;
    let current = this.root;

    function traverse(node){
      node.left && traverse(node.left);
      node.right && traverse(node.right);
      arr.push(node.val);
    };
    traverse(current);
    return arr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let arr = [];
    let que = [];
    if(!this.root) return arr;
    que.push(this.root);

    while(que.length > 0){
      let current = que.shift();
      arr.push(current.val);
      if(current.left) {
        que.push(current.left)
      }
      if(current.right) {
        que.push(current.right);
      }
    }
    return arr;
  }



  
  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
