// const sum = (a,b) => {
//     return a + b
// }

// console.log(sum(7,3))

// module.exports = { sum };

 //one euro is:
 let oneEuroIs = {
     "JPY": 127.9, // japan yen
     "USD": 1.206, // us dollar
     "GBP": 0.8, // british pound
 }


 function fromEuroToDollar(euro) {
     return euro * oneEuroIs["USD"]
 }
//  let dollar = fromEuroToDollar(10);

function fromDollarToYen(dollar) {
    return dollar / oneEuroIs["USD"] * oneEuroIs["JPY"]
 }


 console.log(fromEuroToDollar(10))
 console.log(fromDollarToYen(1))


