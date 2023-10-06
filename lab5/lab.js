"use strict";

// 1.
const max = (x, y) => x > y ? x : y;
console.log('1.');
console.log(max(4, 2));
console.log(' ');

// 2.
const maxOfThree = (...digits) => {
    if (digits && digits.length > 0) {
        let max = digits[0];
        for (let x of digits) {
            if (max < x)
                max = x;
        }
        return max;
    }
    return null;
}
console.log('2.');
console.log(maxOfThree(4, 5, 6));
console.log(' ');

// 3.
const isVowel = value => {
    const vowels = [ 'a', 'e', 'i', 'o', 'u' ];
    return vowels.includes(value);
}
console.log('3.');
console.log(isVowel('r'));
console.log(' ');

// 4.
const sum = (array) => {
    if (!array || array.length == 0 || !Array.isArray(array))
        return -1;

    let sum = 0;
    for (let i of array) 
        sum += i;
    return sum;
}
console.log('4.');
console.log(sum([10]));

const multiply = (array) => {
    if (!array || array.length == 0 || !Array.isArray(array))
        return -1;

    let result = 1;
    for (let i of array) 
        result *= i;
    return result;
}
console.log(multiply([2, 3, 4]));
console.log(' ');

// 5.
const reverse = str => {
    if (!str || str.length === 0)
        return null;

    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
};
console.log('5.');
console.log(reverse('hello'));
console.log(' ');

// 6.
const findLongestWordLength = array => {
    if (!array || array.length === 0)
        return -1;

    let longest = array[0].length;
    for (let i = 1; i < array.length; i++) {
        if (longest < array[i].length)
            longest = array[i].length;
    }
    return longest;
};
console.log('6.');
console.log(findLongestWordLength(['hi', 'hello', 'Mouse', 'May']));
console.log(' ');

// 7.
const filterLongWords = (words, length) => {
    if (!words || words.length === 0)
        return null;

    return words.filter(word => word.length > length);
};
console.log('7.');
console.log(filterLongWords([ 'May', 'June', 'July' ], 3));
console.log(' ');

// 8.
const computeSumOfSquares = array => {
    if (!array || array.length === 0)
        return -1;

    return array.map(num => num * num)
                .reduce((x, y) => x + y);
};
console.log('8.');
console.log(computeSumOfSquares([ 3, 1, 2 ]));
console.log(' ');

// 9.
const printOddNumbersOnly = numbers => {
    numbers.forEach(num => {
        console.log('num ' + num);
        // if (num % 2 !== 0) console.log(num);
    });
};
console.log('9.');
printOddNumbersOnly([ 3, 4, 5, 6 ]);
console.log(' ');

10.
const computeSumOfSquaresOfEvensOnly = array => {
    return array.filter(x => x % 2 === 0)
                .map(x => x * x)
                .reduce((x, y) => x + y);
};
console.log('10.');
console.log(computeSumOfSquaresOfEvensOnly([ 1, 2, 3, 4, 5 ]));
console.log(' ');

// 11.
const sumFunApproach = array => {
    if (!array || array.length == 0 || !Array.isArray(array))
        return -1;

    return array.reduce((x, y) => x + y);
};
console.log('11.');
console.log(sumFunApproach([10, 2, 1]));

const multiplyFunApproach = array => {
    if (!array || array.length == 0 || !Array.isArray(array))
        return -1;

    return array.reduce((x, y) => x * y);
};
console.log(multiplyFunApproach([2, 3, 4]));
console.log(' ');

// 12.
const printFibo = (n, a, b) => {
    if (n === 1) {
        console.log(a);
        return;
    }

    let fibos = [a, b];
    for (let i = 0; i < n - 2; i++) {
        let len = fibos.length;
        fibos.push(fibos[len - 1] + fibos[len - 2]);
    }
    console.log(fibos);
};
console.log('12.');
printFibo(10, 0, 1);