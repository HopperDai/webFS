/* jquery 入口文件 
    1. 给 window 绑定一个全局属性 $/jQuery
    2. 可以直接调用 $/jQuery 的属性或方法
*/

(function (global) {
    // $('div')
    function jQuery(selector) {
        return new jQuery.fn.init(selector);
    }

    // jQuery 原型对象
    jQuery.fn = jQuery.prototype = {
        // 初始化 -> 获取元素
        init: function (selector) {
            const elements = document.querySelectorAll(selector);
            elements.forEach((item, index) => { // 箭头函数，this -> init 实例
                this[index] = item; // 创建伪数组，$('div')[0] 形式访问某个 DOM
            });
        },
        test: function () {
            console.log(1);
        }

    };

    /* extend 方法
    1. $.extend(target,...objs)
        - 一个实参：把参数对象的属性依次拷贝到 $ 
        - 多个实参：把第二参数及后面参数的属性拷贝到第一个参数

    2. $.fn.extend(target,...objs)  -> 拓展方法
        - 一个实参：把参数对象的属性依次拷贝到 $
        - 多个实参：同上

    小结：
    - 拷贝对象 -> 实现拷贝继承
    */
    jQuery.fn.extend = jQuery.extend = function (...args) {  // 不能使用箭头函数，否则 this -> window
        // 注意：箭头函数不存在 arguments 参数，用 ...rest 参数代替
        if (!args.length) {
            return;
        }

        if (args.length === 1) {
            const [source] = args;
            Object.assign(this, source);
            return this;
        } else {
            const [target, ...source] = args;
            source.forEach(value => {
                Object.assign(target, value);
            });
            return target;
        }
    }

    jQuery.fn.init.prototype = jQuery.fn;

    // 形参名为 global , 避免 window 混淆使用
    global.$ = global.jQuery = jQuery;  // $('div')
})(window);