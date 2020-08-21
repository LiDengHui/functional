export class MyPromise {
    static PENDING = "PENDING";
    static FULFILLED = "FULFILLED";
    static REJECTED = "REJECTED";

    constructor(fn) {
        this.state = MyPromise.PENDING;
        this.value = undefined;

        // 异步缓存
        this.resolveCallbacks = [];
        this.rejectCallbacks = [];

        const resolve = (value) => {
            if (this.state === MyPromise.PENDING) {
                this.state = MyPromise.FULFILLED;
                this.value = value;
                this.resolveCallbacks.forEach((fn) => fn(this.value));
            }
        };
        const reject = (value) => {
            if (this.state === MyPromise.PENDING) {
                this.state = MyPromise.REJECTED;
                this.value = value;
                this.rejectCallbacks.forEach((fn) => fn(this.value));
            }
        };

        fn(resolve, reject);
    }

    then(onFulfilled, onRejected) {
        const promise = new MyPromise((resolve, reject) => {
            if (this.state === MyPromise.PENDING) {
                this.resolveCallbacks.push((value) => {
                    resolve(onFulfilled(value));
                });

                this.rejectCallbacks.push((value) => {
                    resolve(onRejected(value));
                });
            } else if (this.state === MyPromise.FULFILLED) {
                resolve(onFulfilled(this.value));
            } else if (this.state === MyPromise.REJECTED) {
                this.rejectCallbacks.push((value) => {
                    resolve(onRejected(value));
                });
            }
        });

        return promise;
    }
}
