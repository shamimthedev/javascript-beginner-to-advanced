function myColors(a, b, c) {
  console.log("a:", a);
  console.log("b:", b);
  console.log("c:", c);
}

const colors = ["red", "green", "blue"];
// console.log(myColors(...colors))

const myStr = ["one", "two", "three"];
const mySecondStr = ["four", "five", "six"];
const concat = [...myStr, ...mySecondStr];

// console.log(concat)

const friends = ["Del", "Gazi", "Roni"];
const allFriends = ["Rabbi", ...friends, "Mizu"];

// console.log(allFriends)

const person = {
  name: "Mizu",
  age: 25,
  gender: "male",
};

const clone = { ...person };

// console.log(clone);

const arr = [1, 2, 3]
const arr2 = [4, 5]

const arr3 = [...arr, ...arr2]

const user = {
    name: 'Jen',
    age: 22
}

const userClone = {...user}

console.log(arr3)
console.log(userClone)
