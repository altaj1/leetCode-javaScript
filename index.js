// function mergeAlternately(word1, word2) {
//     let mergeString = '';
//     let i = 0, j = 0;
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
var mergeAlternately = function(word1, word2) {
    let result = '';
     for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
       if (i < word1.length) result += word1[i];
       if (i < word2.length) result += word2[i];
     }
     return result;
   };