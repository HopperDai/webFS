/* require 配置 */
require.config({
    baseUrl: 'js',  // 文件加载路径
    paths: {
        jquery: './lib/jquery.min', // 配置常用的文件。其他模块引用 jquery
    }
});

/*  1.引入依赖模块，即自动调用依赖模块的执行函数.如：test
    2.如需通过事件触发依赖模块内的逻辑，可以在依赖模块中返回一个函数.如：fn
    3.模块方法，实现类似 2 -> 方法一个对象
*/
require(['jquery', 'test', 'fn', 'method'], function ($, test, fn, method) {
    $('#aa').on('click', () => {
        fn();
        method.BG('blue');
    });
});