// let a = false;
// let a = 'hello kahn'
// let a = 23;
// console.log(typeof a);

// Javascript have 7 types of data:
// Primitive/ primary data types: (1. number; 2. string; 3. boolean; 4. undefined; 5.null; 6.symbol)
// None Primitive data types: (object)
// const a = { job: 'web deve' };
// const b = a;
// console.log(a, b)
// a = { job: 'senior web dev' };
// a.job = 'senior web dev'
// console.log(a, b)

// const isTrue = 'false';

// if (!isTrue) {

//     console.log('hello');

// }

// else {
//     console.log('world');

// }
// function sum(p, q) {

//     console.log(p + q);

// }

// const result = sum(2, 3);

// console.log(result);
// if ('2' === 2) {

//     console.log('inside if');

// }

// else {

//     console.log('“Inside else ”');

// }
function work(x, y = 4) {

    return x + y;

}

console.log(work(32))
