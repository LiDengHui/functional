import { Functor } from "./Functor.js";
export class Maybe extends Functor {
    map(f) {
        return this.isNothing() ? Maybe.of(f(this.val)) : Maybe.of(null);
    }

    isNothing() {
        return this.val == null;
    }

    static of(val) {
        return new Maybe(val);
    }
}
