var http=require("http");

var server= http.createServer((req,res)=>{

    var body="";

req.on("data",(chunk)=>{

    console.log("hi this is data event");
    
    body+=chunk
})



req.on("end",()=>{


    res.end(body)
})

})



server.listen(3008,()=>{

    console.log("hi server has strted");
    

})