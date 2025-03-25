function showCallFunc(fn){
   const num = 10
   fn(num)
}

function fn(num){
   console.log(`The value is ${num}`)
}
showCallFunc(fn)

