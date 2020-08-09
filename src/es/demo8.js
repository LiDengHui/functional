const allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
const buf = Buffer.from("laoyuan");

function cloneBuffer(buffer, isDeep) {
    if (!isDeep) {
        return buffer.slice();
    }
    const length = buffer.length,
        result = allocUnsafe
            ? allocUnsafe(length)
            : new buffer.constructor(length);

    return result;
}

const buf2 = cloneBuffer(buf, true);

buf2.write("nodejs");
buf2.write("22");

console.log("buf", buf.toString("utf-8"));
console.log("buf2", buf2.toString("utf-8"));
