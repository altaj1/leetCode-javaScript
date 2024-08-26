// function mergeAlternately(word1, word2) {
//     let mergeString = '';
//     let i= 0, j = 0;
//     while (i < word1.length && j < word2.length) {
//         mergeString +=word1[i];
//         mergeString +=word2[j];
//         i++;
//         j++;
//     }
//     if (i < word1.length ) {
//         mergeString += word1.slice(i);
//     }else if(j < word2.length){
//         // console.log(word2.slice(j))
//         mergeString += word2.slice(j)
//     }
//     return mergeString;
// }

// let word1 = "ab";
// let word2 = "pqrs";
// let result = mergeAlternately(word1, word2);
// var mergeAlternately = function(word1, word2) {
//     let result = '';
//      for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
//        if (i < word1.length) result += word1[i];
//        if (i < word2.length) result += word2[i];
//      }
//      return result;
//    };

// function kidsWithCandies(candies, extraCandies){
//   const maxCandies = Math.max(...candies)
//   return candies.map(candy=> candy + extraCandies >= maxCandies)
 
// }

// // উদাহরণ
// const candies1 = [4,2,1,1,2]
// const extraCandies1 =1
// const result = kidsWithCandies(candies1, extraCandies1)
// console.log(result)

// function canPlaceFlowers (flowerbed, n){
//   count = 0;
//   for (let i = 0; i < flowerbed.length; i++) {
//     if (
//       (flowerbed[i] === 0)  && (i=== 0 || flowerbed[i -1] === 0) && (i === flowerbed.length - 1 || flowerbed[i + 1] ===0)
//     ) {
//       flowerbed[i] = 1;
//      count ++
//     }
  
    
//   }
//   return count >= n;
// }
// const result = canPlaceFlowers([1,0,0,0,1], 1)
// console.log(result)

// function reverseVowels(s){
//   const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
//   let chars = s.split('');
//   let positions = [];
//   let vowelChars = [];
//   for (let i= 0; i< chars.length; i++) {
//     if (vowels.has(chars[i])) {
//       positions.push(i);
//       vowelChars.push(chars[i]);
//     } 
//   }
//   for (let i = 0; i < positions.length; i++) {
//     chars[positions[i]] = vowelChars[vowelChars.length - 1 - i];
// }

// return chars.join('');
// }

// const result = reverseVowels("leetcode")
// console.log(result)

// function reverseWords (s){
//   let word = s.trim().split(/\s+/);
//   return word.reverse().join(' ');
// }
// const result = reverseWords("the sky is blue");
// console.log(result)
// function productExceptSelf (nums){
//   const n = nums.length;
//   const result = new Array(n).fill(1)
 
//   let prefix = 1;
//   for (let i = 0; i <n; i++) {
//     result[i] = prefix;
//     prefix *= nums[i]
    
//   }
  
//   let suffix = 1
//   for (let i = n - 1; i >=0; i --) {
//     result[i] *= suffix;
//     suffix *= nums[i]
    
//   }
//   return result
// }
// const result = productExceptSelf([1, 2, 3, 4])
// console.log(result)

// function increasingTriplet(nums) {
//   let min1 = Infinity;
//   let min2 = Infinity;
  
//   for (let num of nums) {
//       if (num <= min1) {
        
//           min1 = num;
//       } else if (num <= min2) {
        
//           min2 = num;
//       } else {
          
//           return true;
//       }
//   }
  
//   return false;
// }
// function isSubsequence (s, t) {
//     sPointer = 0;
//     sLength = s.length;
//     for (let i = 0; i < t.length; i++) {
//         if (sPointer< sLength && s[sPointer] === t[i]) {
//             sPointer++;
//         }
        
//     }
//     console.log(sPointer, sLength)
//     return sPointer === sLength

// }
// const resut = isSubsequence("abc", "ahbgdc")
function palindromeFun (val){
    if (val < 0) {
        return false
    }
    const valueStr = val.toString()
    const rev = valueStr.split('').reverse().join('')
    return rev == val
}
const resut = palindromeFun(121)
console.log(resut)
