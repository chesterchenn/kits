import { trimNode } from "./utils";
import { NODE_TYPE } from "./constants";

/**
 * 使用递归方式先序遍历 DOM 树
 * @param node 要遍历的节点
 */
export function traversal(node, obj) {
  var flag = true;
  if (node && node.nodeType === NODE_TYPE.ELEMENT_NODE) {
    console.log(node.tagName.toLowerCase());
    obj = Object.assign({}, obj, {
      type: node.tagName.toLowerCase(),
    });
  }
  if (node && node.nodeType === NODE_TYPE.TEXT_NODE) {
    const val = trimNode(node);
    if (val) {
      console.log(val);
    }
  }
  var childNodes = node.childNodes;
  if (childNodes.length > 0) {
    flag = false;
  }
  for (var i = 0; i < childNodes.length; i++) {
    var item = childNodes[i];
    if (
      item.nodeType === NODE_TYPE.ELEMENT_NODE ||
      item.nodeType === NODE_TYPE.TEXT_NODE
    ) {
      return traversal(item, obj);
    }

  }
  if (flag) {
    return obj;
  }
}

/**
 * 使用迭代方式先序遍历 DOM 树
 * @param node 要遍历的节点
 */
export function traversalIteration(node) {
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
export function eachNode(rootNode, callback) {
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
