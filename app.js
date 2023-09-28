// const sum = (a,b) => {
//     return a + b
// }

// console.log(sum(7,3))

// module.exports = { sum };

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.206, // us dollar
    "GBP": 0.8, // british pound
}

function fromEuroToDollar (euro) {
    return euro * oneEuroIs["USD"]
}

function fromDollarToYen (yen){
    return yen = (oneEuroIs["JPY"] / fromEuroToDollar) * (fromEuroToDollar / oneEuroIs["USD"])
}
console.log(fromEuroToDollar(fromDollarToYen(1)))

// 1 euro = 1.206 USD 1 euro = 127.9 JPY

// Por lo tanto,

// 1 USD = (127.9 JPY / 1 euro) * (1 euro / 1.206 USD) = 106.08 JPY.

// Por lo tanto, 1 dólar estadounidense (USD) equivale a 106.08 yenes japoneses (JPY
// let dollarToEuro = function(dollarValue) {
// 	return dollarValue * 0.89;
// }
// let euroToYen = function(euroValue) {
// 	return euroValue * 124.15;
// }
// ///***** YOUR CODE BELOW ↓ ******///

// console.log(euroToYen(dollarToEuro(137)))