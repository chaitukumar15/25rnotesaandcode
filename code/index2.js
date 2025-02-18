var http = require("http");

var server = http.createServer((req,res)=>{


    if(req.method=="GET"){
        res.write("hi this is get")
    }else if(req.method=="POST"){
        res.write("hi this is post")
    }else{
        res.write("try to give get or post")
    }

    // console.log(req.method)

    // res.write("hi")

    res.end()

})


var port =3000;

server.listen(port,()=>{

    console.log("server is running  http://localhost:"+port)
})