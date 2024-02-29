const array1 = [1,2,3,4,6,8,5]
function findSingleMissingNumber(array1){
    let n = array1.length + 1;

    // use formula
    let summOfN = (n * (n+1))/2;
    let sumOfArray = 0;
    for(let i=0; i<n-1; i++){
        sumOfArray = sumOfArray + array1[i]
    }
    return missingNumber = summOfN - sumOfArray;
}
console.log("missingNumber = ", findSingleMissingNumber(array1));
