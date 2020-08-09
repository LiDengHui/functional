class Car {
    constructor(color) {
        this.color = color;
    }

    static yideng = "京城一灯";
}

class Cruze extends Car {}

console.log(Cruze.yideng);

// function Car(color) {
//     this.color = color;
// }

// Car.myname = "京城一灯";

// Car.prototype.x = function () {
//     console.log("父类方法");
// };

// function Cruze(color) {
//     Car.call(this, color);
// }

// Cruze.prototype = Object.create(Car.prototype, {
//     constructor: {
//         value: Cruze,
//         writable: false,
//     },
//     test: {
//         value: function () {},
//     },
// });

// var staticKeys = Object.entries(Car);

// staticKeys.forEach(([key, value]) => {
//     Cruze[key] = value;
// });

// console.log(Cruze.myname);
