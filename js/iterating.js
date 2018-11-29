"use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ['Moss', 'Jen', 'Roy', 'Douglas'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    names.forEach(function(names) {
        console.log(names);
    })

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */



    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function first(array) {
        return array[0];
    }

    console.log(first(names));

    function second(array) {
        return array[1];
    }

    console.log(second(names));

    function last(array) {
        return array[3];
    }

    console.log(last(names));



/*
Exercise 1:
Write a function named oneHundred() that returns an array with integers starting at 1 and ending at 100;
*/

function oneHundred() {
    var array = [];
    for (var i = 0; i <= 99; i++) {
        array[i] = i+1;
    }
}

var array = oneHundred();

/*
Exercise 2:
Write a function named reverse() that takes in an array and returns a reversed copy of the provided array. This function should not alter the orignal array sent into it.
*/

function reverse(input) {
    var output = [];
    for (var i = input.length - 1; i>=0; i--){
        output.push(input[i]);
    }
        return output;
}

console.log(reverse(oneHundred()));

/*
Exercise 3:
Write a function named sumAll() that takes in an array of numbers and returns the sum of all the numbers. Use sumAll() on oneHundred() to get the sum of all numbers 1 + 2 + 3... + 100
*/

function sumAll(array) {
    var sum = 0;
    array.forEach(function (number) {
        sum = sum + number;
    });
    return sum;
}

/*
Exercise 4:
Write a function named multiplyAll() that takes in an array of numbers and returns the product of all numbers. Use multiplyAll on oneOnehundred() to get the product of 1*2*3*...100strict
*!/*/

function multiplyAll(numbers) {
    var product = 1;
    numbers.forEach(function (number) {
        product *= number;
    });
    return product;
}

console.log(multiplyAll(oneHundred()));