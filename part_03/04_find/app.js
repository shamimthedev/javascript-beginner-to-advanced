const friends = [
    {name: 'Mizu', age: 20},
    {name: 'Del', age: 25},
    {name: 'Ron', age: 18},
    {name: 'Mizu', age: 30},
  ]

  const res = friends.find(friend => friend.name === 'Mizu')
//   console.log(res)

const ages = [3, 10, 18, 20]

// console.log(ages.find(age => age > 18))

let products = [
    {name: 'Checkers', category: 'Toys'},
    {name: 'Harry Potter', category: 'Books'},
    {name: 'iPhone', category: 'Electronics'},
    {name: 'Learn PHP', category: 'Books'},
]

const result = products.find(product => product.category === 'Books')
console.log(result)