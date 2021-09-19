const arr = ['Denis', 'Ivan', 'Maks', 'Olga', 'Sveta'];


function mapArray(arr, fn) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(fn(arr[i]));
    }
    return res;
}

function nameLenght(el) {
    return el.length;
}

function nameToUpperCase(el) {
    return el.toUpperCase();
}

let result1 = mapArray(arr, nameLenght);
let result2 = mapArray(arr, nameToUpperCase);

// console.log(result1);
// console.log(result2);

function greeting(firstName) {
    return function (lastName) {
        return `Hello, ${firstName} ${lastName}`;
    }
}

// const testGreetings = greeting('Denis');
// const fullName = testGreetings('Pupkin');
const fullName = greeting('Denis')('Pupkin');
console.log(fullName);

function question(job) {
    const jobDictionary = {
        developer: 'what is JS?',
        teacher: 'which subject?'
    };

    return function (name) {
        return `${name}, ${jobDictionary[job]}?`;
    }
}

const developerQuestion = question('developer');
console.log(developerQuestion('Denis'));
const teacherQuestion = question('teacher');
console.log(teacherQuestion('Denis'));