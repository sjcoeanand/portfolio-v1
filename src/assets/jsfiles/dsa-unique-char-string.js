//return occurance of string character in object and then return index of first unique character from string

const uniqArray = function(str){
    let obj = {};
    for(let i = 0; i <str.length; i++){
        !obj[str[i]] ? obj[str[i]] = 1 : obj[str[i]]++
    }
    console.log('count of all chars ', obj);
    for(let key of Object.keys(obj)){
        if(obj[key] === 1){
            console.log('uniq = ', str.indexOf(key))
            return str.indexOf(key);
        }
    }
    return -1
}
uniqArray('anandshendage');