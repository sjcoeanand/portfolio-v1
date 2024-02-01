//closures is nothing but a function which is present inside another function and has access to its outer variables
// function outer(){
//     let a = 'first variable';
//     console.log('Its1 '+a);
//     function inner(){
//         console.log("Its2 "+a);
//     }
//     console.log("Its3 "+a);
//     a = 'second variable'
//     return inner
// }
// let c = outer()
// c()
// a = 'gbl'


// function retnFunc(){
//     let x = () => {
//         let a = '3a';
//         console.log(a)
//         let y = () => {
//             // a = '4y'
//             console.log(a)
//             let z = () => {
//                 // a = '5z'
//                 console.log(a)
//             }
//             z()
//         }
//         a = '9zz'
//         y()
//     }
//     return x    
// }
// let a2 = retnFunc()
// a2()


function areaOfSq(length){
    return function(width){
      console.log('firstClosure '+length*width)
      return function addLenWidthNPie(pie){
        console.log('secondClosure '+(length+width+pie))
      }
    }
}
let closure1 = areaOfSq(2)
let closure2 = closure1(3)
closure2(5)