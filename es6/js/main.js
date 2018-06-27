require.config({
  baseUrl: 'js',
  paths: {
    jquery: './lib/jquery.min'
  }
});

require(['jquery'], ($) => {
  runner(function* () {
    const arr = yield $.ajax({
      url: './files/arr.txt',
      dataType: 'json'
    }); // 异步操作，执行完才往下

    console.log('数组数据：', arr);

    const json = yield $.ajax({
      url: './files/json.txt',
      dataType: 'json'
    });

    console.log('json数据', json);
  });
});