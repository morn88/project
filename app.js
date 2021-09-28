const plus = (x = 0, y = 0) => x + y;
const plusRes = plus(1, 2);
console.log(plusRes);


const withoutArgs = () => console.log("Hello world");
const singleArg = x => x * 2;

console.log(plus());


const moreActions = (a, b) => {
    a *= 2;
    b *= 3;
    return a + b;
}

const returnObj = (str = '') => ({
    value: str,
    length: str.length,
})

const sum = (...props) => {
    const params = Array.prototype.slice.call(props);
    if (!params.length) return 0;
    return params.reduce((prev, next) => prev + next);
}

console.log(sum(1, 2, 3, 4));
console.log(sum());