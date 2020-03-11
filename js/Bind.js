/**
 * 实现 bind 方法
 */
function bind(fn, obj) {
    if (fn.bind) {
        return fn.bind(obj);
    } else {
        return function() { // bind 不是立即执行，因此需要返回 function
            return fn.apply(obj, arguments);
        }
    }
}

/**
 * 实现 bind 方法，并附带 "柯里化" 的应用
 * 柯里化：把接受多个参数的函数变成接受单一参数(最初函数的第一个参数)，并且返回接受剩余参数和返回结果的新函数的技术
 * ECMAScript 3 版本的 Function.bind 方法
 */
if(!Function.prototype.bind) {
    Function.prototype.bind = function(o) {
        const _ = this;
        const boundArgs = arguments;
        return function() {
            const args = [];
            for (let i=1; i<boundArgs.length; i++) args.push(boundArgs[i]);
            for (let i=0; i<arguments.length; i++) args.push(arguments[i]);
            return _.apply(o, args);
        }
    }
}
