var express = require("express");

var app = express();

var cors=require("cors");

app.use(cors())

app.use(express.json())


app.use(express.urlencoded({extended:true}))


// raw -> json format

app.post("/", (req, res) => {

    console.log(req.body);
    
  res.send({
    data:req.body,
    status:200
  });
});

app.get("/reg" ,(req, res) => {
  console.log();

  res.send(req.body);
});

app.listen(3008, () => {
  console.log("hi server started");
});
