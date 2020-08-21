import { MyPromise } from "@/promise/index";
describe("MyPromise", () => {
    it("同步resolve(1) ", (done) => {
        const promise = new MyPromise((resolve, reject) => resolve(1));
        promise
            .then((data) => {
                expect(data).toBe(1);
                return 2;
            })
            .then((data) => {
                expect(data).toBe(2);
                done();
            });
    });

    it("异步resolve(1) ", (done) => {
        const promise = new MyPromise((resolve, reject) =>
            setTimeout(resolve, 0, 1)
        );
        promise
            .then((data) => {
                expect(data).toBe(1);
                return 2;
            })
            .then((data) => {
                expect(data).toBe(2);
                done();
            });
    });

    it("异步resolve(1),同一实例多次 then", (done) => {
        const promise = new MyPromise((resolve, reject) =>
            setTimeout(resolve, 0, 1)
        );

        promise.then((data) => {
            expect(data).toBe(1);
        });
        promise.then((data) => {
            expect(data).toBe(1);
            done();
        });
    });

    it("resolve 只有第一次生效, 多次在实例化 promise 时后面的 resolve 不生效", (done) => {
        const promise = new MyPromise((resolve, reject) => {
            setTimeout(resolve, 0, 1);
            setTimeout(resolve, 0, 1);
        });

        const arr = [];
        promise.then((data) => {
            arr.push(data);
        });

        setTimeout(() => {
            expect(arr.toString()).toBe("1");
            done();
        }, 100);
    });

    it("reject 只有第一次生效, 多次在实例化 promise 时后面的 reject 不生效", (done) => {
        const promise = new MyPromise((resolve, reject) => {
            setTimeout(reject, 0, 1);
            setTimeout(reject, 0, 1);
        });

        const arr = [];
        promise.then(
            () => {},
            (data) => {
                arr.push(data);
            }
        );

        setTimeout(() => {
            expect(arr.toString()).toBe("1");
            done();
        }, 100);
    });
});
