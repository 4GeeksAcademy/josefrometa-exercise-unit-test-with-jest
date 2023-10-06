

 const sum = (a,b) => {
    return a + b
 }

 console.log(sum(7,3))

 module.exports = { sum };

 //one euro is:
 let oneEuroIs = {
     "JPY": 127.9, // japan yen
     "USD": 1.2, // us dollar
     "GBP": 0.8, // british pound
 }


// declaramos una funcion con el mismo nombre "formEuroToDollar"
// const fromEuroToDollar = function(valueInEuro){
//     // convertimos el valor a dolares
//     let valueInDollar = valueInEuro * 1.2;
//     // retornamos el valor
//     return valueInDollar;
// }


  function fromEuroToDollar(euro) {
     return euro * oneEuroIs["USD"]
 }


function fromDollarToYen(dollar) {
   return dollar / oneEuroIs["USD"] * oneEuroIs["JPY"]
 }

 function fromYenToPound(yen) {
   return yen / oneEuroIs["JPY"] * oneEuroIs["GBP"]
 }


 console.log(fromEuroToDollar(3.5))
 console.log(fromDollarToYen(1))
 console.log(fromYenToPound(200))

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};

