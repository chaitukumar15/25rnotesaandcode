var fs= require("fs");
var http=require("http");
const { log } = require("util");



// timers 
// io task 
// setImmediate
// closed call backs 



// microtask que 
// nexttick


function hello(){

    return new Promise((resolve,reject)=>{


        if(true){
            resolve("promise")
        }else{
            reject("reject")
        }
    })
}






setTimeout(() => {
    
    console.log("settimeoout")
}, 0);



setImmediate(()=>{
    console.log("setimmediate");
    
})


fs.readFile("index.js","utf-8",(err,data)=>{

    console.log("filesystem")
})




hello().then((val)=>{

    console.log(val);
    
})


process.nextTick(()=>{
    console.log("hello next tick");
    
})
