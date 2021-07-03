/**
 * 判断空白节点
 */
function trimNode(node) {
  const val = node.nodeValue;
  if (val && !/\s+$/.test(val)) {
    return val;
  }
}

/**
 * 使用递归方式先序遍历 DOM 树
 * @param node 要遍历的节点
 */
function traversal(node) {
  if (node && node.nodeType === 1) {
    console.log(node.tagName.toLowerCase());
  }
  if (node && node.nodeType === 3) {
    const val = trimNode(node);
    if (val) {
      console.log(val);
    }
  }
  var childNodes = node.childNodes;
  for (var i = 0; i < childNodes.length; i++) {
    var item = childNodes[i];

    if (item.nodeType === 1 || item.nodeType === 3) {
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

/**
 * 来自 MDN 的遍历节点的例子
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Node
 */
function eachNode(rootNode, callback) {
  if (!callback) {
    const nodes = [];
    eachNode(rootNode, function (node) {
      nodes.push(node);
    });
    return nodes;
  }

  if (false === callback(rootNode)) {
    return false;
  }

  if (rootNode.hasChildNodes()) {
    const nodes = rootNode.childNodes;
    for (let i = 0, l = nodes.length; i < l; ++i) {
      if (false === eachNode(nodes[i], callback)) {
        return;
      }
    }
  }
}

