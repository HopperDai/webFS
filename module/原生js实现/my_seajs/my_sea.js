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
                    // 执行模块的回调。fn 的参数为 require, exports, module
                    let module = {
                        exports: {}
                    }
                    fn(function () {}, module.exports, module);

                    // 步骤一：读取模块中嵌入的其它模块文件。即找出 require 引用的文件
                    const temp = fn.toString();
                    const start = temp.indexOf('{') + 1;
                    const end = temp.indexOf('}');
                    const fnBody = temp.substring(start, end); // 函数体
                    // 模块路径列表
                    const pathArr = fnBody.match(/require\([^\(\)]+\)/g).map(item => {
                        return item.substring(item.search(/\"|\'/)+1, item.search(/[\'|\"]\)$/));
                    });

                    // 把获取到的 module 输出给最外层的回调
                    fn_end(module.exports);
                }

                // 第二步，使用 eval 运行模块的代码
                eval(m_code);
            },
            error(err) {
                console.log('读取失败', err);
            }
        })
    }
}