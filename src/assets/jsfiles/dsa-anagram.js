// anagram is word or phrase formed by rearranging letters of different words or phrase

// approach 1 - normal strings
// function anagram(s,t){
//     return s.split('').sort().join('') === t.split('').sort().join('')
// }
// console.log('anagram => ', anagram('anand', 'nanda'))

// approach 2 - normal strings
// function anagram1(s, d){
//     if(s.length != d.length) return false
//     let obj1 ={}
//     let obj2 ={}
//     for(i =0; i < s.length; i++){
//         obj1[s[i]] = (obj1[s[i]] || 0 ) + 1;
//         obj2[d[i]] = (obj2[d[i]] || 0) + 1;
//     }
//     for(const key in obj1){
//         if(obj1[key] !== obj2[key]) return false
//     }
//     return true
// }
// console.log('==> ', anagram1('anand', 'nanda'))

// approach 3 - grouping of anagrams in array of strings
strArray1 = ['anand', 'nanda', 'eat', 'tea','ate', 'ramah', 'maroki']

function groupingAnagram(strArray){
    let obj = {};
    for(let val of strArray){
        let cleanItem = val.split('').sort().join('');
        if(obj[cleanItem]){
            obj[cleanItem].push(val);
        } else {
            obj[cleanItem] = [val]
        }
    }
    return obj
}

console.log("output: ", Object.values(groupingAnagram(strArray1)));