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

