function isEnoughCapacity(products, containerSize) {
    const sum = [];
    let sumAll = 0;
    for (const product in products) {
        // console.log(products[product]);  // перевірка циклу
        sum.push(products[product]);
    };
    for (const key of sum) {
        // console.log(key);  // перевірка циклу
        sumAll += key;
    };
    return containerSize >= sumAll ? true : false;
}


console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false