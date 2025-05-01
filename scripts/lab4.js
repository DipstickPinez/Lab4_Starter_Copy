/**
 * 
 * @param {*} num1, first number to add. 
 * @param {*} num2, second number to add. 
 * @param {*} add, boolean value to tell the function what to do. 
 * @returns The sum of the two numbers if add is true and false otherwise.
 */
function sumValues(num1, num2, add) {
    if (add) {
        let result = 0;
        trueNum1 = Number(num1);
        trueNum2 = Number(num2);
        if (isNaN(trueNum1) || isNaN(trueNum2)) {
            return false;
        }

        result = trueNum1 + trueNum2;

        return result;
    }
    else {
        return false;
    }
}

/**
 * 
 * @param {*} prices, an array of the original price.
 * @param {*} discount, a number between 0-1 to represent the discount. 
 * @returns An array of each price's new price, after the discount is applied. Or false, if prices array is empty.
 */
function discountPrices(prices, discount) {
    const discounted = []
    const length = prices.length;
    if (length == 0) {
        return false;
    }
    let discountedPrice = 0
    for (let i = 0; i < length; i++) {
        numPrices = Number(prices[i]);
        numDiscount = Number(discount);
        if (isNaN(numPrices) || isNaN(numDiscount)) {
            return false;
        }
        discountedPrice = numPrices * (1 - numDiscount);
        discounted.push(discountedPrice);
    }

    return discounted;
}

console.log(sumValues('not a number', 5, true));
console.log(discountPrices([], 'hello'));
console.log(discountPrices('i\'m not an array', 0.5));

module.exports = { sumValues, discountPrices };