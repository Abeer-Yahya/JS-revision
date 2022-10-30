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

/*Ex6: Return all the names in this array  [“Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", “Dareen”]*/
const names = ["Rawan", "Jafar", "Muhammad", "Ibrahim", "Esraa", "Dareen"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
/*Ex7: Use forEach to  Return all the names in the previous array*/
names.forEach((element) => {
  console.log(element);
});
