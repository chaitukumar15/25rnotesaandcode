var http = require("http");



var servr=http.createServer((req,res)=>{


    if(req.method=="POST"){

        var body=""

    req.on("data",(chunk)=>{

        body+=chunk

    })

    req.on("end",()=>{


       if(req.headers["content-type"]=="application/json"){
        res.write(body)
        res.end()
       }else{
        res.write(
            "missing"
        )
        res.end()
       }



        

    })


    }else{
        res.end("hi send as post")
    }


})


servr.listen(3000,()=>{

    console.log("hi");
    
})