var http = require("http");

var fs= require("fs");

// Data,end

var server = http.createServer((req, res) => {
  var body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {

    console.log(body);


    console.log(__dirname);
    
    fs.writeFile("index.txt",body,"utf-8",(err)=>{

        if(err){
            res.write(err.message)
            res.end()
        }else{
            res.write(JSON.stringify({
                msg:"data stored"
            }))
            res.end()
        }

    })

  });
});

var port = 3007;
server.listen(port, () => {
  console.log("hi strted the server");
});
