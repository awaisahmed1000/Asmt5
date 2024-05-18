//1. Hello World
console.log("Hello, World!");


//2. Temperature variable, below 20 degrees is cold
let temperature = 19;
if(temperature < 20) {
    console.log("It's cold!")
};


//3. Total 10 Apples, give away 3 apples. Remaining
let totalApples = 10;
let givenAway = 3;
let applesLeft = totalApples - givenAway;
console.log(applesLeft);


//4. FullName from First and LastName...
let firstName = "Awais";
let lastName = "Ahmed";
let fullName = `${firstName} ${lastName}`;
console.log(fullName);

//5. Is 5 greater than 3?
if(5 > 3) {
    console.log("Yes");
}
else {
    console.log("No");
};

//6. Function to calculate area of circle
 
function circleArea(radius:number) {
  console.log((22/7)*radius**2 );
};
circleArea(6);


//7. loop for logging 1 to 50 `Fizz for multiple of 3, Buzz for multiples of 5
for(let i=1; i <= 50 ; i++) {
    if(i%3 == 0) {
        console.log("Fizz");
    }
    else if (i%5 == 0) {
        console.log("Buzz");
    }
    else {
      console.log(i);  
    };
    };

//8. Temperature array, log highest temp
let tempArray = [25, 24, 28, 32, 30];
let maxValue = tempArray[0];
for (let i=0; i<tempArray.length; i++) {
    if (tempArray[i]>maxValue) {
        maxValue = tempArray[i]
    } ;
};
console.log(maxValue);

//9. script to enter age and then show user is minor or adult

let age = 17;
if (age < 18) {
    console.log("The user is minor")
}
else {
    console.log("The user is adult")
     };



//10. function that takes array of numbers and returns the count of positive numbers
function positiveNumbersCount (numbersArray:Array<number>) {
    let positiveNumbersCount = 0;
    for (let i=0; i<numbersArray.length; i++) {
        if (numbersArray[i] > 0) {
            positiveNumbersCount++;
        };
    };
    return positiveNumbersCount;
};
console.log(positiveNumbersCount([12, 45, -45, -90, -98, 74, 99, -1000]));


//11. Function that takes array of words and returns only words that start with letter "a"

function arrayLettersStartingWithA(wordsArray:Array<string>) {
    let newArray:Array<string> = [];
    for (let i=0; i<wordsArray.length; i++) {
        if(wordsArray[i].startsWith("a")) {
            newArray.push(wordsArray[i]);
        };
    };
    return newArray;
};
console.log(arrayLettersStartingWithA(["Awais", "ali", "yahya", "Usman", "asma", "hira"])); 


//12. Script to log second from last element of array name fruits
let fruits = ["Apple", "Banana", "Orange", "Mango", "Guava"];
let SecondLastElementIndex = fruits.length-2;
console.log(fruits[SecondLastElementIndex]);

//13. Function that takes array of numbers and returns new array with each number squared

function getSquaredNumbersArray (numbersArray:Array<number>) {
    let squaredArray = []
    for (let i=0; i<numbersArray.length; i++) {
        squaredArray.push(numbersArray[i]**2);
    };
    return squaredArray;
};
console.log(getSquaredNumbersArray([1,2,3,4,5,6,7,8,9]));


//14. Functions that accepts an array and reverses its element without using .reverse() method

function reverseArray (givenArray:Array<number>) {
    let reversedArray = [];
    for (let i=givenArray.length-1; i>=0; i--) {
        reversedArray.push(givenArray[i]);
    };
    return reversedArray;
};
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9])); 


//15. function that logs the number of times the score exceeds max score and it fell below min score




function maxAndMinScore (scores:Array<number>) {
    let scoreExceedsMax = 0;
    let scoreFallsBelowMin = 0;
    let maxScore = scores[0];
    let minScore = scores[0];
    for (let i=0; i<scores.length; i++) {
        if (scores[i]> maxScore) {
            scoreExceedsMax++;
            maxScore = scores[i];
        }
        else if (scores[i]<minScore) {
            scoreFallsBelowMin++;
            minScore = scores[i];
        };
    };
    console.log ("No of Times Score exceeds max: " + scoreExceedsMax);
    console.log ("No of Times Score exceeds min: " + scoreFallsBelowMin);
};
maxAndMinScore([10, 5, 20, 20, 4, 5, 2, 25, 1]);


//16. function to remove all falsey values from an array (false, null, 0, "", undefined and NaN)

function removeFalseyValues(arr:Array<any>) {
    return(arr.filter(Boolean));
}; 
console.log(removeFalseyValues([1, NaN, false, true, "", null, 0, undefined]));


//17. script to concatenate 2 arrays [1,2,3] and [4,5,6]
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let concatArray = arr1.concat(arr2);
console.log(concatArray);


//18. function sumOfElements to calculate the sum of all elements in an array that are either even or odd , based on a parameter


function sumOfElements (numbersArray:Array<number>, evenOrOdd:string) {
    let EvenArray = [];
    let oddArray = [];
    for(let i=0; i<numbersArray.length;i++) {
        if (evenOrOdd == "Even" && numbersArray[i]%2==0) {
            EvenArray.push(numbersArray[i]);
        }
        else if (evenOrOdd == "Odd" && numbersArray[i]%2 != 0) {
            oddArray.push(numbersArray[i]);
        }
    };
    if (evenOrOdd == "Even") {
        console.log("Even Sum: " + EvenArray.reduce((a, b) => a + b))
    }
    else if (evenOrOdd == "Odd") {
        console.log("odd Sum: " + oddArray.reduce((a, b) => a + b));    
    };
};

sumOfElements([1,2,3,4,5,6,7,8,9], "Odd");






//19. function to check if an element exists in an array. If exists, return the index of element, otherwise return -1



function elementExistOrNot (element:any, givenArray:Array<any>) {
    let returnValue:number;
    if (givenArray.includes(element)) {
        returnValue = givenArray.indexOf(element);
    }
    else {
        returnValue = -1
    };
    return returnValue;
};
console.log(elementExistOrNot(null, [2, 8, 9]));


//20. function to find and return smallest number in an array of integers

function findSmallestNumber (givenArray:Array<number>) {
    let smallestNumber = givenArray[0];
    for (let i=0; i<givenArray.length;i++) {
        if (givenArray[i] < smallestNumber) {
            smallestNumber = givenArray[i];
        };
    };
    return smallestNumber; 
};
console.log(findSmallestNumber([1,2,3,-8,9,-2,5,-1]));


//21. function "calculateProduct" that takes an array of numbers and return the product of all elements

function calculateProduct (numbersArray:Array<number>) {
    let product = numbersArray[0];
    for (let i=1; i<numbersArray.length;i++) {
        product=product*numbersArray[i];
    };
    return product;
};          
console.log(calculateProduct([1,2,3,4,5]));



//22. function "filterByLength" that takes an array of strings and a number n. function must return an array containing only strings those are longer than n characters


function filterByLength (arrayOfStrings:Array<string>, n:number) {
    let newArray = [];
    for (let i=0;i<arrayOfStrings.length;i++) {
        if (arrayOfStrings[i].length > n) {
            newArray.push(arrayOfStrings[i]);
        };
    };
    return newArray;
};
console.log(filterByLength (["Awais Ahmed", "Ali", "Raza Sohail", "Faris Ali"], 8));


//23. function "findDuplicates" that finds and logs all duplicates in an array

function findDuplicates (duplicateArray:Array<any>) {
    let checkedElements:Array<any> = [];
    for (let i=0; i<duplicateArray.length; i++) {
        let newArray = duplicateArray.slice(i+1, duplicateArray.length);
        if (newArray.includes(duplicateArray[i]) && !(checkedElements.includes(duplicateArray[i]))) {
            checkedElements.push(duplicateArray[i]);
            console.log ("Duplicate Element: " + duplicateArray[i]);
        };
    };
};

findDuplicates([8,1,1,1,2,3,5,8,1,9,6,4,2,8, 9]);


//24. function  incrementAll that takes an array of integers and increments each element by 1.

function incrementAll (numbersArray:Array<number>) {
    let newArray= [];
    for (let i=0; i<numbersArray.length;i++) {
        newArray.push(numbersArray[i] + 1);
    };
    return newArray;
};
console.log(incrementAll([0,50,20,341,45,500]));


//25. function countOfOccurrances that counts how many types a specific element apprears in an array



function countOfOccurrances (elementArray:Array<any>,element:any) {
    let countofElement = 0;
    for(let i=0;i<elementArray.length;i++) {
        if(elementArray[i] == element) {
            countofElement++;
        };
    };
    return countofElement;    
};

console.log(countOfOccurrances([1, 2, 88, 9, 5, 1, "Awais", 2,"Awais", 88], "Awais"));

//26. function isSorted to check if an array is sorted in ascending order

function isSorted (givenArray:Array<number>) {
    let sortedOrNot = "";
    for (let i=0;i<givenArray.length;i++) {
        if(givenArray[i] <= givenArray[i+1]) {
            sortedOrNot = "Array is Sorted";
        }
        else if (givenArray[i] > givenArray[i+1]) {
            sortedOrNot = "Array is not sorted";
            break;
        };
    };
    return sortedOrNot;
};

console.log(isSorted([1,2,3,4,5,5,6,7,8,1]));


//27. function that receives an array and formats them into a string separated by commas, except for the last two names, which should be separated by "and"


function arraytoString (arrayOfNames:Array<string>) {
    let stringFromArray:string = "";
    for(let i=0;i<arrayOfNames.length;i++) {
        if (i<(arrayOfNames.length-2)) {
            stringFromArray = stringFromArray.concat(arrayOfNames[i], ",")
            console.log(arrayOfNames[i] + ",");
        }
        else if (i==(arrayOfNames.length-2)) {
            stringFromArray = stringFromArray.concat(arrayOfNames[i]) 
        }
        else if (i>(arrayOfNames.length-2)) {
            stringFromArray = stringFromArray.concat(" and ",arrayOfNames[i])
            console.log(arrayOfNames[i] + ",");
        };
    };
    return stringFromArray;
};

console.log(arraytoString(["Awais", "Ahmed", "Ali", "Hamza", "Umer", "Sehban", "Ismail"]));



//28. function that converts an array of fahrenheit temp to celcius and logs new temp

function fahrenheitToCelciusTemp (fahrenheitTempArray:Array<number>) {
    for (let i=0;i<fahrenheitTempArray.length; i++) {
        console.log((5/9)* (fahrenheitTempArray[i]-32));
    };
};
fahrenheitToCelciusTemp([99,98,95,100,100.5]);


//29 function minMaxAverage that takes an array of numbers and returns an object with properties for min, max and average of those numbers

function minMaxAverage (arrayOfNumbers:Array<number>) {
    let minNumber:number = Number.POSITIVE_INFINITY;
    let maxNumber:number = Number.NEGATIVE_INFINITY;
    let sumOfNumbers:number= 0;    
    for (let i=0; i<arrayOfNumbers.length;i++) {
        sumOfNumbers = sumOfNumbers + arrayOfNumbers[i];
        if (arrayOfNumbers[i] > maxNumber) {
            maxNumber = arrayOfNumbers[i];
        }
        if (arrayOfNumbers[i] < minNumber) {
            minNumber = arrayOfNumbers[i];            
        };
    };
    console.log ("Max Number: " + maxNumber);
    console.log ("Min Number: " + minNumber);
    console.log ("Average of Numbers: " + ((sumOfNumbers)/(arrayOfNumbers.length)));
};

console.log(minMaxAverage([1,3,4,8,9,200,8,6,-9,100]));

//30. function swapElements that swaps two specified indices in an array.

function swapElements(myCurrentArray:Array<any>, index1st:number, index2nd:number) {
    [myCurrentArray[index1st], myCurrentArray[index2nd]] = [myCurrentArray[index2nd], myCurrentArray[index1st]];
    console.log (myCurrentArray);
};
swapElements([1,2,3,4,5], 2, 4);


//31. function that takes 2 inputs, a string and a character and returns the number of times a character appears in that string


function characterFrequencyInString (stringValue:string, characterValue:string) {
    return(stringValue.split(characterValue).length - 1);
};
console.log(characterFrequencyInString("qdlhhqed,qdhoqodh.wkqw,dlq,wdn.jnwd,,", ","));

//32. create a 'to-do list' array of objects where each object has properties task and completed (a boolean). Write a function 
//to log only the tasks that are not yet completed.




let toDoList = [
    {
        task: "task1",
        completed: true, 
    },
    {
        task: "task2",
        completed: false, 
    },
    {
        task: "task3",
        completed: false, 
    },
    {
        task: "task4",
        completed: true, 
    },
    {
        task: "task5",
        completed: false, 
    },
];


function tasksNotYetCompleted () {
    for (let i=0;i<toDoList.length;i++) {
        if (toDoList[i].completed == false) {
            console.log(`The task ${toDoList[i].task} is not yet completed.`);
        };
    };
};
console.log(tasksNotYetCompleted());

//33. function that takes an array of integers and sorts them from smallest to largest.


function sortArray(unSortedArray:Array<number>) {
    return unSortedArray.sort((a, b) => a - b);
}
console.log(sortArray([1,8,99,56,7,2]));



//34. typescript program that logs every element of an array in reverse order without using .reverse() method


function orderReverse (inputArray:Array<any>) {
    let outputArray = [];
    for (let i=inputArray.length -1;i>=0;i--) {
        outputArray.push(inputArray[i]); 
    };
    return outputArray;
};
console.log(orderReverse(["Cloud", "Rain", "Umbrella"]));


//35  Write a script that simulates a basic calculator. It should take two operands and an operator ('+', '-', '*', '/') from 
//the user, perform the operation, and log the result.


function basicCalculator(operand1:number, operand2:number, operator:string) {
    let answer;
    if (operator == "+") {
        answer = operand1 + operand2;
    }
    else if (operator == "-") {
        answer = operand1 - operand2;
    }
    else if (operator == "*") {
        answer = operand1 * operand2;
    }
    else if (operator == "/") {
        answer = operand1 / operand2;
    }
    else if (operator == "**") {
        answer = operand1 ** operand2;
    }
    else if (operator == "%") {
        answer = operand1 % operand2;
    };
    return answer;
};
console.log(basicCalculator(8, 2, "**"));
