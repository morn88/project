const numArr = [2, 32, 1234, 54, 323];

let value;

value = Array.isArray(numArr);
value = numArr[2];
numArr[2] = 12;
value = numArr.indexOf(32);

value = numArr.push(100);
value = numArr.pop();
value = numArr.unshift(111);
value = numArr.shift();
value = numArr.slice(0, 2);
value = numArr.splice(1, 2, 'One', 'Two', 'Three');
value = numArr.reverse();
value = numArr.concat(numArr);
value = numArr.join(" ");
value = "hello world".split(' ');

let users = [{
        id: 1,
        name: 'Innokentij'
    },
    {
        id: 2,
        name: 'Sema'
    },
    {
        id: 3,
        name: 'Fedja'
    },
    {
        id: 4,
        name: 'Aljena'
    }
];

let someUsers = users.filter(item => item.id < 4);
console.log(someUsers.length);

let lenghts = users.map(item => item.name.length);
console.log(lenghts);

console.log(value, numArr);