var http = require("http");

var url= require("url");

var server = http.createServer((req,res)=>{

    var parsedurl=url.parse(req.url,true);

    console.log(parsedurl.query);

    console.log(parsedurl.pathname.split("/"));

    var idd=parsedurl.pathname.split("/");

    var routevalue= idd[idd.length-1]
    
    console.log(routevalue);
    
    parsedurl.query.id=Number(routevalue);

    console.log(parsedurl.query);
    

    res.end(JSON.stringify(parsedurl.query))

})


server.listen(3000,()=>{

    console.log("hi");
    
})