export class Functor {
    constructor(val) {
        this.val = val;
    }
    map(f) {
        return Functor.of(f(this.val));
    }

    static of(val) {
        return new Functor(val);
    }
}
