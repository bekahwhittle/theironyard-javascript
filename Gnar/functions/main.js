// setting up some variables to use for our examples. no need to mess with this:
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Rhonda', teaches : 'iOS'},
    { firstname : 'Gil', teaches : 'Java'},
    { firstname : 'Ben', teaches : 'UI'},
    { firstname : 'Jess', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];

///////////////////////////////////////////////////////////////////////////////
//                                                      Explorer Mode                                                                    //
///////////////////////////////////////////////////////////////////////////////

// Write a function called `sum` that takes two parameters and returns the sum
// of those 2 numbers.
// write your code here:

function sum (a, b) {
  return a + b;
}

// write your console.log/asserts here:
// i've already written some console.logs and console.asserts for you.
// follow this pattern as you work on the rest of these problems.
console.log('sum of 2 and 3 is ', sum(2,3));
console.assert(sum(2,3), 5);
console.assert(sum(1,0), 1);
console.assert(sum(-48,5), 43);

// -------------------
// Write a function named `avg` that takes 3 parameters and returns the average
// of those 3 numbers.
// write your code here:

function avg (a, b, c) {
  return (a + b + c) / 3;
}

// write your console.log/asserts here:

console.log(avg(3, 3, 3));
console.assert(avg(3,3,3) === 4);

// -------------------
// Write a function called `getLength` that takes one parameter (a string) and
// returns the number of characters in that string
// write your code here:

function getLength (string) {
  return string.length;
}

// write your console.log/asserts here:

console.log(getLength("Hello"));
console.assert(getLength("Yo") == 3);

// -------------------
// Write a function called `greaterThan` that takes two parameters and
// returns true if the second parameter is greater than the first. Otherwise
// the function should return false.
// write your code here:

function greaterThan(a, b) {
  if (a < b) {
    return true;
  }
  else {
    return false;
  }
}

// write your console.log/asserts here:

console.log(greaterThan(2, 4));
console.assert(greaterThan(4, 2) == true);

// -------------------
// Write a function called `greet` that takes a single parameter and returns a
// string that is formatted like "Hello, Name!" where *Name* is the parameter
// that was passed in.
// write your code here:

function greet(name) {
  return "Hello " + name + "!";
}

// write your console.log/asserts here:

console.log(greet("Rebekah"));
console.assert(greet("Rebekah") == "Hello blah!");

// -------------------
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence. Finally the
// function should return that sentence.
// write your code here:

function madlib(person, place, thing, action) {
  return "My friend " + person + " ate a " + thing + " at a " + place + " while " + action + "!";
}

// write your console.log/asserts here:

console.log(madlib("james", "castle", "knife", "drowning"));

// -------------------
// Write a function called `max` that returns the larger of two numbers
// write your code here:

function max(a, c) {
  return Math.max(a, c);
}

// write your console.log/asserts here:
console.log(max(2,5));
console.assert(max(8, 3) === 3);
// -------------------
// Write a function called `maxOfThree` that returns the largest of three
// numbers
// write your code here:

function maxOfThree(a, c, d) {
  return Math.max(a, c, d);
}

// write your console.log/asserts here:
console.log(maxOfThree(3, 5, 9));
console.assert(maxOfThree(3, 5, 9) === 5);
// ---------------------
// Write a function called `isVowel` that receives a single character as a
// parameter and returns true if it is a vowel, false otherwise.
// write your code here:

function isVowel(l) {
  if (l == "a" || l =="e" ||l == "i" ||l == "o" || l =="u" ) {
    return true;
  }
  else {
    return false;
  }
}

// write your console.log/asserts here:

console.log(isVowel("i"));
console.log(isVowel("d"));
console.assert(isVowel("d") == true);
// ---------------------
// Write a function called `translate` that will translate a text into
// "Rovarspraket". That is, double every consonant and place an occurrence of
// "o" in between. For example, translate("this is fun") should return the
// string "tothohisos isos fofunon".
// write your code here:
function translate(text) {
  var translatedText = '';
  for (var i = 0; i < text.length; i++) {
    var letter = text.charAt(i);
    if (!isVowel(letter)) {
      translatedText += letter + "o" + letter;
    }
    else {
      translatedText += letter;
    }
  }
  return translatedText;
}
// write your console.log/asserts here:

console.log(translate("Hello my friend"));
console.assert(translate("Hello my friend") == "HoHelollolo o momyoy o fofrorienondod");

// ---------------------
// Write a function called `reverse` that computes the reversal of a string.
// For example, reverse("jag testar") should return the string "ratset gaj".
// write your code here:

function reverse(string) {
  var reversedString = '';
  for (var i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
}

// write your console.log/asserts here:

console.log(reverse("Hello"));
console.assert(reverse("Hello") == "hello");
// ---------------------
// Write a function called `largest` that takes an array of numbers and returns
// the largest number in the array.
// write your code here:

function largest(arr) {
  return Math.max(...arr); // 'spread operator' instead of .apply
}

// write your console.log/asserts here:
console.log('the largest number in the `numbers` array is ', largest(numbers));
console.assert(largest(numbers), 101);

// ---------------------
// Write a function called `longest` that takes an array of strings and returns
// the longest string in the array.
// write your code here:

function longest(arr) {
  var longestW = arr.split(' ').sort(function(a, b) {
    return b.length - a.length;
  });
  return longestW[0];
}

// write your console.log/asserts here:

console.log(longest("Jess is a cool instructor!"));
console.assert(longest("Jess is really darn fantastic!") == "darn");

// ---------------------
// Write a function called `getEvens` that takes an array of numbers and returns
// a new array with only the even numbers from the original array
// write your code here:

function getEvens(arr) {
  var evens = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]%2 === 0) {
        evens.push(arr[i]);
    }
  }
  return evens;
}

// write your console.log/asserts here:
console.log(getEvens([1,2,3,4,6]));

// ---------------------
// Write a function called `getOdds` that takes an array of numbers and returns
// a new array with only the odd numbers from the original array
// write your code here:

function getOdds(arr) {
  var odds = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]%2 !== 0) {
        odds.push(arr[i]);
    }
  }
  return odds;
}

// write your console.log/asserts here:
console.log(getOdds([1,2,3,4,6]));
console.assert(getOdds([1,2,3,4,6]) == [2, 4, 6]);
// ---------------------
// Write a function called `containsIs` that takes an array of strings and
// returns a new array with only the strings which contain the substring `is`
// write your code here:

function containsIs(arr) {
  var subIs = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].includes('is')) { // .contains doesn't exist in js?
      subIs.push(arr[i]);
    }
  }
  return subIs;
}

// write your console.log/asserts here:

console.log(containsIs(["this", "dog", "is", "cool"]));
console.assert(containsIs(["this", "dog", "is", "cool"]) == ["dog", "cool"]);

///////////////////////////////////////////////////////////////////////////////
//                                                      Adventurer Mode                                                              //
///////////////////////////////////////////////////////////////////////////////

// ---------------------
// Write a function called `contains` that takes an string AND an array of
// strings and returns a new array with only the strings which contain the
// substring specified string
// write your code here:

// write your console.log/asserts here:


// ---------------------
// Write a function called `teachersOf` that takes a subject returns only the
// teachers who teach the specified subject.
// write your code here:

// write your console.log/asserts here:


// ---------------------
// Write a function called `objectMatches` that takes 2 strings and an array of
// objects as parameters. The first string is the value to find inside an
// object. The second string string is the key where you want to look for the
// value inside the objects. The array is the array of objects through which to
// search. The function should return a new array of objects that have the
// specified value in the specified key.
// write your code here:

// write your console.log/asserts here:
console.log('the objects that match javascript teachers are', objectMatches('JavaScript', 'teaches', instructors))

///////////////////////////////////////////////////////////////////////////////
//                                                      Epic Mode                                                                            //
///////////////////////////////////////////////////////////////////////////////

// ---------------------
// Write a function called `getAge` that takes a string in one of these formats:
// '12-25-2016' OR '12/25/2016'. If the input is a valid format, it should
// return the years since the date (aka tell how old someone with that birthday
// would be). If the input is invalid OR if the date is after today's date,
// throw an error in the console that describes what the user did wrong when
// calling the function.
// write your code here:

// write your console.log/asserts here:


// ---------------------
// Write a function called `isValidPassword` that takes a string password. If
// the password meets the following criteria return true. otherwise return
// false.
    // at least 8 characters
    // contains at least one number
    // contains at least one of the following: . , ! $ &
    // contains at least one capital letter and one lowercase letter
// write your code here:

// write your console.log/asserts here:
