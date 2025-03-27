const numbers = [1, 2, 3, 4, 5]

  const sum = numbers.reduce((p, c)=>{
    return p + c
    // 0 + 1 = 1
    // 1 + 2 = 3
    // 3 + 3 = 6
    // 6 + 4 = 10
    // 10 + 5 = 15 
  }, 0)

  // console.log(sum)

  const friends = [
    {name: 'Mizu', age: 25},
    {name: 'Ron', age: 16},
    {name: 'Del', age: 20},
  ]

  const oldestFriend = friends.reduce((p, c)=>(c.age > p ? c.age : p), 0)
  console.log(oldestFriend)