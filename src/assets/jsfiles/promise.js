// promise

function DellAvailable(){
    return false
}
function HpAvailable(){
    return false
}

let dellObj = {
    brand : 'Dell',
    ram : '4GB',
    storage : '2TB',
    color: 'Silver'
}
let hpObj = {
    brand : 'Hp',
    ram : '6GB',
    storage : '1TB',
    color: 'Black'
}
let notAvailable = {
    brand : 'Not Available',
    status : 'Failed'
}

const buyLaptop = new Promise((resolve, reject)=>{
    if(DellAvailable()){
        setTimeout(() => {
            // resolve('Dell Laptop Available');
            resolve(dellObj)
        }, 3000);
    } else if(HpAvailable()){
        setTimeout(() => {
            // resolve('Hp Laptop Available');
            resolve(hpObj)
        }, 3000);
    } else {
        setTimeout(() => {
            // reject('No Laptop Available'); 
            reject(notAvailable)
        }, 3000);
    }
})

buyLaptop.then((res)=>{
    console.log("then block ", res);
}).catch((res)=>{
    console.log('catch block ',res)
})