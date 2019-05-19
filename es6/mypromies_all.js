class promise_all {
    constructor() {
        let arrRes = [];
        let _this = this;
    }

    all(arr) {
        console.log(arr);
        return new Promise((resolve, reject) => {
            let i = 0;
            let arrRes = [];
            next();
                
            function next() {
                arr[i].then(res => {
                    i++;
                    arrRes.push(res);
                    if (i == arr.length) {
                        resolve(arrRes);
                    } else {
                        next();
                    }
                })
            }
        })
    }


}

new promise_all().all(
    [
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('4s');
            }, 4000);
        }),
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('1s');
            }, 1000);
        }),
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('2s');
            }, 2000);
        }),
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('3s');
            }, 3000);
        })
    ]
).then(res => {
    console.log(res);
}, err => {});