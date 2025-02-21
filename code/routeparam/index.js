var http = require("http");

var url = require("url");

var port = 3009;

var server = http.createServer(async (req, res) => {

  console.log(req.url);

  var parsdurl = url.parse(req.url, true);

  var data = await fetch("https://fakestoreapi.com/products");

  var data_json = await data.json();


  if(parsdurl.pathname=="/products"){

    res.write(JSON.stringify(data_json));

    res.end()


  }else if(parsdurl.pathname.startsWith("/products/")){


    var id=parsdurl.pathname.split("/")


    console.log(id);

    var route=id[id.length-1];

    console.log(route);
    
  var respon=data_json.filter((val)=>{

        return val.id=route

    })


    

    res.write(JSON.stringify(respon));

    res.end()

  }else if(parsdurl.pathname=="/bodyy"){
    var body="";

    // implicit vs explicit 
    req.on("data",(chunk)=>{

        body+=chunk

    })
    req.on("end",()=>{

        console.log(body);
        res.end(body)

    })
  } 
  
  
  else{
    res.write("JSON.stringify(data_json)");

    res.end()


  }




//   res.write(JSON.stringify(parsdurl));

//   res.end();
});

server.listen(port, () => {
  console.log("hi started the server 90000");
});

// URL.parse(URL,true);
