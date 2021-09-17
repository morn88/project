// function sayHello(firstName = "Default", lastName) {
//     console.log(firstName, lastName);
//     return `Hello ${firstName} ${lastName}`;
// }

// let res = sayHello("Denis", "Pupkin");
// let res2 = sayHello("Anna", "Pupkina");

// console.log(res, res2);

const square = function (x) {
    return x * x;
};

(function (msg) {
    console.log(msg);
})(`Hello world`);

console.log(square(5));