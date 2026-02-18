/*const add = require('./demo.js');
import add from './demo.js';
console.log(add(2,3));  
fs.writeFileSync('file.txt','this is an example file',(err)=>{
    if (err) console.log("error occured");

console.log("file created sucessfully");
});*/
function ayush(){
    console.log("hello")
}
setTimeout(()=>{
    ayush()
    console.log("Ayush")
},200)
setTimeout((=>{
    console.log("1")
}))




const fs=require("fs")
fs.readFile("file.txt", "utf-8" , function(err,data){
    if(err){
        console.log(data)
    }
    else{
        console.log(err)
    }
})



const nayapromie = new Promise((resolve, reject) => {
    let success = true; 
    if (success) {
        resolve("Operation successful!");
    } else {
        reject("Operation failed!");
    }
});

nayapromie
.then(() => console.log("ye hua resolve"))
.catch(() => console.log("ye hua resolve"))




new Promise((resolve, reject) => {
  resolve(10);
})
.then(number => {
  console.log(number);  
  return number * 2;
})
.then(result => {
  console.log(result); 
  return result + 5;
})
.then(final => {
  console.log(final); 
})
.catch(error => {
  console.log("Error:", error);
});
