function moveZeros(flag, inputArray){
    let nonZeros = inputArray.filter((x, i)=>{
        return x != 0
    })
    let zerosCount = inputArray.filter(x=>  x==0)
    flag ? nonZeros.unshift(...zerosCount) : nonZeros.push(...zerosCount)
    console.log(nonZeros);
    return nonZeros
}
moveZeros(true, [2,3,4,1,2,3,1,0,4,0,12,3,0,1])