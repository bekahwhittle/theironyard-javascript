// example function calls and their expected outputs:
// take a string - ingnore casing and spacing
// isPalindrome( "apple" ) == false
// isPalindrome( "javascript" ) == false
// isPalindrome( " god  dog" ) == true // -- ingore spacing
// isPalindrome( "Taco Cat 47" ) == true // -- ignore letter case and numbers
// take a string that can do "cac"



function isPalindrome(string) {
  strLength = string.length;
  for (var i = 0; i < string.length; i++) {
    console.log(string);
  }
  // if (string.charAt(i) != string.charAt(strLength-i)) {
  //     console.log("yes");
  // }
}

navigator.getBattery().then(console.log);

isPalindrome("cac");
