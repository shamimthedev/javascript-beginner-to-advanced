let person = {
  name: 'Mizu',
  age: 25,
  gender: 'male'
}

for (let keys in person){
  console.log(keys, person[keys])
}

let list = ['one', 'two', 'three', 'four']

  for (let index in list){
    console.log(`${index}: ${list[index]}`)
  }


const obj = {
  a: 1,
  b: 2,
  c: 3
}

for(let properties in obj){
  // console.log(properties, obj[properties])
  console.log(`${properties}: ${obj[properties]}`)
}