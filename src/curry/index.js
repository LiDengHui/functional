import _, { curry, split, reduce, reduceRight } from "lodash";

const match = curry((what, str) => str.match(what));

const replace = curry((what, replacement, str) =>
    str.replace(what, replacement)
);

const filter = curry((f, ary) => ary.filter(f));

const map = curry((f, ary) => ary.map(f));

console.log(`match(/\s+/g, "hello Word"):`, match(/\s+/g, "hello Word"));
console.log(`match(/\s+/g)("hello Word"):`, match(/\s+/g)("hello Word"));

const hasSpaces = match(/\s+/g);
console.log(`hasSpaces("hello world"):`, hasSpaces("hello world"));
console.log(`hasSpaces("spaceless"):`, hasSpaces("spaceless"));

console.log(
    `filter(hasSpaces, ["tori_spelling", "tori amos"]):`,
    filter(hasSpaces, ["tori_spelling", "tori amos"])
);

const findSpaces = filter(hasSpaces);

console.log(
    `findSpaces(["tori_spelling", "tori amos"]):`,
    findSpaces(["tori_spelling", "tori amos"])
);

const noVowels = replace(/[aeiou]/gi);

const censored = noVowels("*");

console.log(`censored("Chocolate Rain"):`, censored("Chocolate Rain"));

let words = (str) => _.split(str, " ");

console.log(
    `words("Jingle bells Batman smells")1:`,
    words("Jingle bells Batman smells")
);

words = _.partialRight(_.split, " ");
console.log(
    `words("Jingle bells Batman smells")2:`,
    words("Jingle bells Batman smells")
);

const filterQs = filter(match(/q/i));

console.log(
    `filter(["quick", "camels", "quarry", "over", "quails"]):`,
    filterQs(["quick", "camels", "quarry", "over", "quails"])
);

const _keepHighest = (x, y) => (x >= y ? x : y);

const max = _.partialRight(reduce, _keepHighest, -Infinity);

console.log(
    `max([323, 523, 554, 123, 5234]):`,
    max([323, 523, 554, 123, 5234])
);
