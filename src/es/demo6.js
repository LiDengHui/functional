function cloneReg(target, isDeep) {
    var regFlag = /\w*$/;
    var result = new target.constructor(target.source, regFlag.exec(target));
    if (isDeep) {
        result.lastIndex = 0;
    } else {
        result.lastIndex = target.lastIndex;
    }
    return result;
}

var regex = /yideng/g;

var reg2 = cloneReg(regex, true);

console.log(reg2.test("yideng"));
console.log(reg2.test("yideng"));
console.log(reg2.test("yideng"));
console.log(reg2.test("yideng"));
console.log(reg2.test("yideng"));
