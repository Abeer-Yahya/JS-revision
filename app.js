/*Ex1: Write a function that takes a number as input and returns true if the number is less than or equal to zero, otherwise return false.*/
function Zero(num) {
  if (num <= 0) {
    return "true";
  } else {
    return "false";
  }
}
console.log(Zero(-1));

/*Ex2: Print the Next integer from the input number (ex: input= 1 -> next int= 2, input= 12 -> next int= 13)*/
function Plus(x) {
  return x + 1;
}
console.log(Plus(12));

/*Ex3: Write a function that takes an array of strings and returns only the strings with numbers in it as an array. And return an empty array, If there are no strings containing numbers. */
function numInStr(arr) {
  return arr.filter(function (element) {
    return element.match(/\d/);
  });
}
console.log(numInStr(["0range", "c0ding", "academy"]));

/*Ex4: Develop a JS Code to check if a number is even or odd using recursion*/
let isEven = (num) => {
  if (num < 0) return "Number is negative";
  else if (num == 0) return "Number is even";
  else if (num == 1) return "Number is odd";
  else return isEven(num - 2);
};

console.log(isEven(9));

/*Ex5: Write a function to swap all instances of string ch1 with string ch2 and vice versa  (charSwap( "aaddeee", "a", "d") ➞ "ddaaeee")*/
let text = "aaddeee";
let char1 = "a";
let char2 = "d";

let newStr = "";
function charSwap(str, char1, char2) {
  for (let x = 0; x < str.length; x++) {
    if (str[x] == char1) {
      newStr = newStr + char2;
      continue;
    }
    if (str[x] == char2) {
      newStr = newStr + char1;
      continue;
    }
    newStr = newStr + str[x];
  }
  return newStr;
}
console.log(charSwap(text, char1, char2));

/*Ex6: Return all the names in this array  [“Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", “Dareen”]*/
const names = ["Rawan", "Jafar", "Muhammad", "Ibrahim", "Esraa", "Dareen"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
/*Ex7: Use forEach to  Return all the names in the previous array*/
names.forEach((element) => {
  console.log(element);
});

/*Ex8: Project an array of series into an array of {id, title} pairs using forEach()*/

let newSeries = [
  {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
];

console.log(newSeriesArray(newSeries));

function newSeriesArray() {
  let newArray = [];
  newSeries.forEach((element) => {
    newArray.push({ id: element.id, title: element.title });
  });
  return newArray;
}

/* Ex 9: Use map() now to implement the same previous functionality*/

let newMap = newSeries.map((item) => {
  return { id: item.id, title: item.title };
});
console.log(newMap);

/*Ex 10: Use filter() to return the series with a rating under 5 */
let newFilter = newSeries.filter((ele) => {
  if (ele.rating < 5) {
    return ele;
  }
});
console.log(newFilter);

/*Ex 11: Use reduce()  function to return the longest string in an array of strings.
["Java", "JavaScript", "Python", "C++", "PHP"]*/

let multi = ["Java", "JavaScript", "Python", "C++", "PHP"];

let longest = multi.reduce((acc, element) => {
  if (element.length > acc.length) {
    return element;
  } else {
    return acc;
  }
});

console.log(longest);

/*Ex 12: Create a function displayName that, given the pokemon data, below, uses reduce to return an array containing the names of the characters*/
/*Ex13: Write a function that takes the following array of objects, uses binary search to search for certain email input from the user, and return its value.*/
/*Ex14: What is the output of the following JS code segments? and Why? */
