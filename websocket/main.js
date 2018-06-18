// 注册
$('#reg').on('click', () => {
    const username = $('#username').val();
    const password = $('#password').val();

    if (!/^.{6,32}$/.test(username)) {
        alert('请输入有效的用户名');
        return;
    } else if (!/^.{6,32}$/.test(password)) {
        alert('请输入有效的密码');
        return;
    }

    $.ajax({
        url: 'http://localhost:8080/reg',
        type: 'POST',
        data: {
            username,
            password
        },
        success(data) {
            console.log(data);
        },
        error(err) {
            console.log(err);
        }
    })
});