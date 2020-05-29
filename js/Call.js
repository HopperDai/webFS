Function.prototype.call2 = function(context) {
  const ctx = context || window // context 参数可能为 null
  const [, ...args] = Array.from(arguments) // 获取参数，剔除第一个 context 参数
  ctx.fn = this // this 指向调用 call2 的实例
  const res = eval(`ctx.fn(${args.join(',')})`)
  delete ctx.fn
  return res // 函数可能有 return
}

Function.prototype.apply2 = function(context, arr) {
  const ctx = context || window
  ctx.fn = this
  const res = eval(`ctx.fn(${arr.join(',')})`)
  delete ctx.fn
  return res
}