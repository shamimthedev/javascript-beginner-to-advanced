const colors = ["red", "green", "blue", "yellow", "magento"];

const [color1, color2, color3] = colors;

// console.log(color1)
// console.log(color2)
// console.log(color3)

const person2 = { name: "Mizu", age: 28, gender: "male", country: "BD" };

const { name, age, country } = person2;

// console.log(name);
// console.log(age);
// console.log(country);

const { a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400 };

// console.log(a)
// console.log(rest)

const person = {
  name: "Mizu",
  age: 25,
  gender: "male",
};
function personInfo({ name, age, gender }) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Gender: ${gender}`);
}

personInfo(person);

const movie = {
    title: 'Titanic',
    year: 1995,
    lang: 'English'
  }

  function titanic({title, year: releaseYear, lang}){
    console.log(`${title} ${releaseYear}`)
  }

  titanic(movie)

  const movies = [
    {name: 'Titanic', lang: 'English'},
    {name: 'Kung Fu', lang: 'China'},
    {name: 'Anwar', lang: 'Bengali'},
    {name: 'Old Boy', lang: 'Korean'},
  ]

  const [, , {name: movieName}] = movies 

  console.log(movieName)