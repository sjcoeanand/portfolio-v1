//find the given number is palindrome or not like 121 43134 not less than 0
const isPalindrome = function(item){
   return item >= 0 ? (item === +item.toString().split('').reverse().join('')) : false
}
let res = isPalindrome(121);
console.log(`isPalindrome = ${res}`);
// -------------------------------