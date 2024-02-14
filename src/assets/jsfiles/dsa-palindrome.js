//find the given number is palindrome or not like 121 43134 not less than 0
const isPalindrome = function(item){
   return item >= 0 ? (item === +item.toString().split('').reverse().join('')) : false
}
let res = isPalindrome(121);
console.log(`isPalindrome = ${res}`);
// -------------------------------
//find first palindrome string from array of strings
let firstPalindrome = function(words1) {
   console.log(words1.find(isPalindrome))
};
function isPalindrome(singleString){
let a;    
 if(singleString === singleString.split('').reverse().join('')) {
   a = singleString
 } else {
  a = ""
 }
 return a
}
firstPalindrome(["abc","car","ada","racecar","cool"])
firstPalindrome(["notapalindrome","racecar"])
firstPalindrome(["def","ghi"])