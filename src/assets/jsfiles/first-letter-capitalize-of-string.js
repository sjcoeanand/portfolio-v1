function abc(a){
    let b = a.split(' ');
    for(let a1= 0; a1<b.length; a1++){
        b[a1] = b[a1].charAt(0).toUpperCase() + b[a1].substr(1);
    }
    console.log(b)
}
abc('Hi my name is anand');

// ========================================promise==============


let prom = new Promise((res, rej)=>{
    res('Hello')
})

prom.then((item)=>{
    console.log("item", item);
})