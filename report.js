const {Farm, animalsAndCrops} = require('./index')
const {Wheat, Sugarcane} = require('./crops')
const {Cow, Pig, Horse} = require('./animals')

const myFarm = new Farm("FARM")

myFarm.addAnimal(new Cow(10))

console.log(myFarm.getReport())
// console.log(`Farm: ${myFarm.name}`)
// console.log("------------------")
// console.log(`- Farm: ${myFarm.name} -`)
// console.log( `- No. of crops: ${myFarm.crops} -`)
// console.log(`- No. of animals: ${myFarm.animals} -`);
// console.log(`- Total income: ${myFarm.calculateIncome()} -`);
// console.log("------------------")
