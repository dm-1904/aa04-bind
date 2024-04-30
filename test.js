const Employee = require('./employee')
const empReq = require('./employee')


const johnW = new Employee('John Wick', 'Dog Lover')

// setTimeout(() => {
//     johnW.sayName()}, 2000)

// let sayJohn = sayName.bind(johnW)

// setTimeout(() => {
//     sayJohn
// }, 2000)


let func = johnW.sayName

let bound = func.bind(johnW)

setTimeout(() => {
    bound()
}, 2000)

let func2 = johnW.sayOccupation
let bound2 = func2.bind(johnW)

setTimeout(() => {
    bound2()
}, 3000)
