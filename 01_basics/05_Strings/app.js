let favActorFirstName = 'Keanu'
let favActorLastName = 'Reaves'
let fullName = favActorFirstName + ' ' + favActorLastName
let fullName2 = favActorFirstName.concat(favActorLastName)
let capFullName = fullName.toUpperCase()
let message = `My favorite actor is ${capFullName} and he is cool.`
message += ' His best show is John Wick.'

console.log(message)