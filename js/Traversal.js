// 遍历 dom 树
function traversal(node) {
  if (node && node.nodeType === 1) console.log(node)
  const { childNodes } = node
  if (childNodes && childNodes.length) {
    for (let i = 0; i < childNodes.length; i++) {
      const item = childNodes[i]
      if (item.nodeType === 1) console.log(item)
    }
  }
}