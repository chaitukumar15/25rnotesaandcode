var express = require("express");

var app = express();





app.get("/llm",express.json(),(req,res)=>{

var key="AIzaSyBzGqgnxcKP9NiZHDXeEWH-ptUQiHCvHXY"
    var url="https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key="+key
    fetch(url,{

        method:"post",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            "contents": [{
              "parts":[{"text": req.body.msg}]
              }]
             })
    }).then((val)=>{

        return val.json()
    }).then((val)=>{

        console.log(val);

        res.send(val)
        

    })

})




app.get("/qu", async (req, res) => {
  var data = await fetch("https://fakestoreapi.com/products");

  var data_json = await data.json();

  // res.send(req.query)

  if (req.query.cat == "m") {
    var filtereddata = data_json.filter((val) => {
      val["category"] == "men's clothing";
    });

    res.send(filtereddata);
  } else {
    res.send(data_json);
  }
});

app.get("/", (req, res) => {
  res.send(req.body);
});

app.get("/regsiter", express.json(), (req, res) => {
  res.send(req.body);
});

app.get("/regsiter/:id", async (req, res) => {
  var data = await fetch("https://fakestoreapi.com/products");

  var data_json = await data.json();

  // route params

  var dataroute = data_json.filter((val) => {
    return val.id == req.params.id;
  });

  console.log(req.params.id);

  console.log(req.query);

  res.send(dataroute);
});

app.post("/", (req, res) => {
  res.send("hi this is raj kumar rao");
});

var port = 4007;

app.listen(port, () => {
  console.log("serevr has been started");
});
