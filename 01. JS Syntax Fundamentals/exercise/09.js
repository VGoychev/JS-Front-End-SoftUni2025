function solve(fruit, weight, pricePerKg){
    let calculatedMoney = 0.00;
    let calculatedKg = 0.00;

    calculatedKg = weight / 1000;

    calculatedMoney = calculatedKg * pricePerKg;

    console.log(`I need $${calculatedMoney.toFixed(2)} to buy ${calculatedKg.toFixed(2)} kilograms ${fruit}.`);
}