var http = require("http");


var server = http.createServer((req,res)=>{

console.log(req.headers);


if(req.method=="POST"){
    res.setHeader("chaitanya","25rbatch")
    res.statusCode=404;
    res.end()
}else{
    res.end("hello")
}





})


var port=30022

server.listen(port,()=>{

    console.log("hi listing server");
    
})