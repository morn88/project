function getThis() {
    console.log(this);
}

// getThis();

function getPrice() {
    return this;
}

function getName() {
    return this;
}

const prod1 = {
    name: `Intel`,
    price: 100,
    getPrice,
    getName: function () {
        return this.name;
    },
};

prod1.getPrice();

const prod2 = {
    name: `AMD`,
    price: 50,
    getPrice,
};

console.log(prod1.getPrice());
console.log(prod2.getPrice());
console.log(prod1.getName());

prod2.getName = prod1.getName;
console.log(prod2.getName());


let str = 'Hello world';

const reversStr = str.split('').reverse().join('');
console.log(reversStr);

const prod3 = {
    name: 'ARM',
    price: 200,
    getPrice,
    getName,
};


const getPriceBind = prod3.getPrice.bind(prod3);

console.log(getPriceBind);

setTimeout(getPriceBind, 1000);