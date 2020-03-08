/**
 * 事件总线：一处更改操作，触发多处事件响应
 * 核心思想：先监听，后派发；因此 $on 把回调存储起来
 */
class Bus {
	constructor() {
		this.cb = {};
	}
	$on(name, fn) {
		this.cb[name] = this.cb[name] || [];
		this.cb[name].push(fn);
	}
	$emit(name, args) {
		if (this.cb[name]) this.cb[name].forEach(fn => fn(args));
	}
}