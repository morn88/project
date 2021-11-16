let obj1 = {
    name: 'Vasja',
    info: {
        skills: ['html', 'css'],
    },
};

let obj2 = {
    name: 'Ivan',
    age: 20,
};

let newObj = Object.assign({}, obj2, obj1);
newObj = Object.assign({}, obj1);
//console.log(newObj);

newObj = JSON.parse(JSON.stringify(obj1));