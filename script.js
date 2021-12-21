
let phonenum = "12345689456";


//+1 (248) 524 5656

let tel = phonenum.split("");
console.log(tel)

tel.unshift ("+")
console.log(tel)

tel.splice (2,0," (")
console.log(tel)

tel.splice (6,0,") ")
console.log(tel)

tel.splice (10,0," ")
console.log(tel)

phonenum = tel.join("") 
console.log(phonenum)

