/**
 * 判断空白节点
 */
export function trimNode(node) {
  const val = node.nodeValue;
  if (val && !/\s+$/.test(val)) {
    return val;
  }
}
