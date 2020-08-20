export class Either extends Functor {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }

    map(f) {
        return this.right
            ? Either.of(this.left, f(this.right))
            : Either.of(f(this.left), this.right);
    }

    static of(left, right) {
        return new Either(left, right);
    }
}

export class Left extends Functor {
    static of(val) {
        return new Left();
    }
    map(f) {
        return this;
    }
}
export class Right extends Functor {
    static of(val) {
        return new Right();
    }
    map(f) {
        return Right.of(f(this.val));
    }
}
