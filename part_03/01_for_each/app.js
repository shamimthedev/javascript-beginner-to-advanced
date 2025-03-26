const colors = ['red', 'blue', 'green']

colors.forEach(color => console.log(color))

const nums = [1, 2, 4, 5]

let sum = 0
function adder(num){
    sum += num
}

nums.forEach(adder)
console.log(sum)