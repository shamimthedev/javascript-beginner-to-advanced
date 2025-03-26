let password = 9;
function passChecker(ps) {
  //   if(ps === 8){
  //     console.log(`Strong password`)
  //   } else{
  //     console.log(`Password should be 8 characters`)
  //   }
  return ps === 8 ? `Strong password` : `Password should be 8 characters`;
}

const res = passChecker(password);
console.log(res)

let haveMoney = true
let personMoney = haveMoney === true ? 'Buy products' : 'Bring some money';

console.log(personMoney)