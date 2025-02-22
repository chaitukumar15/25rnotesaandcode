var http = require("http");


var a="student"

var servr=http.createServer((req,res)=>{





    console.log(req.headers["chaitanya"])

    if(req.headers["chaitanya"]==a){
        res.end("approved")
    }else{
        res.end("hi")
    }

   


})


servr.listen(3000,()=>{

    console.log("hi");
    
})