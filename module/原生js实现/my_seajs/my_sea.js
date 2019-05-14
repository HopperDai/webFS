// seajs  命名空间，隔离变量
const seajs = {
    use(path, fn_end) {
        // 读取模块文件，使用 ajax
        // fn_end 最外层的回调函数

        $.ajax({
            url: path,
            success(m_code) {
                // m_code 读取到的模块的代码

                // 模块的代码格式为：define(cb) ;
                // 通过 eval 方法执行读取 path 路径文件的代码字符串；
                // 定义 define 函数，把初始化的参数传递给模块；把模块导出的数据导入到 use 方法的回调中
                function define(fn) {
                    /* 
                        调用执行模块里的回调
                        fn 的三个参数：require、exports、module
                    */

                    let module = {
                        exports: {}
                    }

                    fn(function () {}, module.exports, module); // 把初始化的参数传递给模块

                    // 把获取到的 module 输出给最外层的回调
                    fn_end(module.exports);
                }

                // 第一步，把 require 都找出来
                let tmp = m_code.substring(m_code.indexOf('{') + 1, m_code.lastIndexOf('}'));
                let modArr = tmp.match(/require\([^\(\)]+\)/g).map(item => {
                    return item.substring(item.search(/\"|\'/) + 1, item.search(/[\'|\"]\)$/));
                });
                console.log(modArr);

                // 第二步，使用 eval 运行模块的代码
                eval(m_code);
            },
            error(err) {
                console.log('读取失败', err);
            }
        })
    }
}