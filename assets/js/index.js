'use strict'

// // let animal = 'animal';

// // console.log(animal);

// // const animal = {
// //     name: 'Animal',
// //     age: 5,
// //     hasTail: true
// // }

// class Animal {

// static type = 'ANIMAL';

//   constructor(options) {
//       this.name = options.name;
//       this.age = options.age;
//       this.hasTail = options.hasTail;
//   }

//   voice() {
//       console.log('I am Animal!');
//   }
// }

// // const animal = new Animal({
// //     name: 'Animal',
// //     age: 5,
// //     hasTail: true
// // })

// class Cat extends Animal {

//     static type = 'CAT';

//     constructor(options) {

//         super(options);

//         this.color = options.color;
// }

// voice() {
// console.log('I`m cat');
// }

// get ageInfo() {
//     return this.age * 7;
// }

// set ageInfo(newAge) {
//     this.age = newAge;
// }
// }

// const cat = new Cat ({
//     name: 'Cat',
//     age: 7,
//     hasTail: true,
//     color: 'yellow'
// })


// class RangeValidator {

// constructor(options) {
//     this.from = options.from
//     this.to = options.to
// }

// get getterRange() {
//     return [1,10];
// }

// }

// const rangeValidator = new RangeValidator({
//     from = 1,
//     to = 10,
// })


class RangeValidator {
    get to() {
        return this._to;
    }
set to(number) {
    this._to = number;
}
get from() {
    return this._from;
}
set from(number){
    this._from = number;
}

validate(number) {
    return this._from < number && number < this._to;
}
}


let test = new RangeValidator();

test.from = 2;
test.to = 4

console.log(test.validate(3));


const array = [100, 200, 300];

console.log(array.includes(200));


const array2 = ['dog', 'cat', 'mouse'];

function check(array2) {
for (let i = 0; i<array.length; i++){
    if(array2.includes('dog')) return true
}
return false
}

const array3 = [1,5];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array3.reduce(reducer));

console.log(array3.reduce(reducer, 6));


function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
  
  let strings = ["dog", "dog", "cat", "cat",
    "cat", "55", "55", "77777777", "Hello"
  ];
  
  console.log( unique(strings) ); 