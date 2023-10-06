//importamos la funcion
 const { sum } = require('./app.js');

const { fromEuroToDollar } = require("./app");

// //prueba
 test ('adds 14 + 9 to equal 23', () => {
   let total = sum(14, 9);
   expect(total).toBe(23);
 });


test("One euro should be 1.2 dollars", () => {
    const { fromEuroToDollar } = require('./app.js');
    expect(fromEuroToDollar(3.5)).toBe(4.2);
});

test("One dollar should be 106.58333333333334 yens", () => {
    const {fromDollarToYen } = require('./app.js');
    expect(fromDollarToYen(3)).toBe(319.75);
})

test("Two hundred yens should be 1.2509773260359656 pounds", () => {
    const {fromYenToPound} = require('./app.js');
    expect(fromYenToPound(10000)).toBe(62.54886630179828);
})