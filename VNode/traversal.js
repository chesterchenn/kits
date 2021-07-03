/**
 * 使用递归方式先序遍历 DOM 树
 * @param node 要遍历的节点
 */
function traversal(node) {
  if (node && node.nodeType === 1) {
    console.log(node.tagName);
  }
  var i = 0,
    childNodes = node.childNodes,
    item;
  for (; i < childNodes.length; i++) {
    item = childNodes[i];

    if (item.nodeType === 1) {
      traversal(item);
    }
  }
}

/**
 * 使用迭代方式先序遍历 DOM 树
 * @param node 要遍历的节点
 */
function traversalIteration(node) {
  var array = [],
    i = 0,
    k = 0,
    elementCount = 0,
    len = 0,
    childNodes,
    item;

  while (node != null) {
    console.log(node.tagName);
    childNodes = node.childNodes;
    len = node.childNodes.length;
    elementCount = 0;
    if (len > 0) {
      for (var i = 0; i < len; i++) {
        item = childNodes[i];
        if (item.nodeType === 1) {
          elementCount++;
          node = item;
          break;
        }
      }
      for (k = len - 1; k > i; k--) {
        item = childNodes[k];
        if (item.nodeType == 1) {
          elementCount++;
          array.push(item);
        }
      }
      if (elementCount < 1) {
        node = array.pop();
      }
    } else {
      node = array.pop();
    }
  }
  console.log(elementCount);
}
