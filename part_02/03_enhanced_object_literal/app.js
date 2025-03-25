let a = 2;
let b = 3;
let c = 4;

let obj = {
  a,
  b,
  c,
};

// console.log(obj)

const lib = {
  sum: (a, b) => a + b,
  mult: (a, b) => a * b,
};

// console.log(lib.sum(2, 3));
// console.log(lib.mult(2, 3));

function getPersonES6(name, age, height){
    return {
        name, age, height 
    }
}

console.log(getPersonES6('Shamim', 28, 5.6))