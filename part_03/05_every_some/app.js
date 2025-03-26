const songs = [
  {name: 'Lucky You', duration: 4.34},
  {name: 'Just Like You', duration: 3.23},
  {name: 'The Search', duration: 2.33},
  {name: 'Old Town Road', duration: 1.43},
  {name: 'The Box', duration: 5.23},
]

const everyRes = songs.every(song => song.duration > 3) // false 
const someRes = songs.some(song => song.duration < 3) // true  

console.log(everyRes)
console.log(someRes)