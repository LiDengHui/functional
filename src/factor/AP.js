import { Functor } from "./Functor.js";

export class AP extends Functor {
    ap(f) {
        return AP.of(this.val(f.val));
    }
}
