import { partialRight, reduce } from "lodash";
console.log("compose");

const compose = (f, g) => (x) => f(g(x));

const toUpperCase = (x) => x.toUpperCase();

const exclaim = (x) => x + "!";

const shout = compose(exclaim, toUpperCase);

console.log(`shout("send in the clowns"):`, shout("send in the clowns"));

const head = (x) => x[0];

const reverse = partialRight(reduce, (acc, x) => [x].concat(acc), []);

const last = compose(head, reverse);

console.log(last(["junpkick", "roundhouse", "uppercut"]));

//结合律

// const associative = (compose(f, compose(g, h)) = compose(compose(f, g), h));
/**
 * f(g(h()))
 */

 
