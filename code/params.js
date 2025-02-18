var http = require("http");

var url = require("url");

var port = 3009;

var server = http.createServer(async (req, res) => {
  console.log(req.url);

  var parsdurl = url.parse(req.url, true);

  var data = await fetch("https://fakestoreapi.com/products");

  var data_json = await data.json();

  var result = [];

  if (parsdurl.query.cat == "m") {
    var mens = data_json.filter((val) => {
      return val.category == "men's clothing";
    });

    result = [...mens];

    // res.write(JSON.stringify(mens));

    // res.end()
  } else if (parsdurl.query.cat == "w") {
    var womens = data_json.filter((val) => {
      return val.category == "women's clothing";
    });

    result = [...womens];
    //  res.write(JSON.stringify(womens));

    //  res.end()
  } else if (parsdurl.query.cat == "j") {
    var jel = data_json.filter((val) => {
      return val.category == "jewelery";
    });

    result = [...jel];
    //  res.write(JSON.stringify(jel));

    //  res.end()
  } else if (parsdurl.query.cat == "e") {
    var ele = data_json.filter((val) => {
      return val.category == "electronics";
    });

    result = [...ele];
    //  res.write(JSON.stringify(ele));

    //  res.end()
  } else {
    res.write(JSON.stringify(data_json));

    res.end();
  }

  if (parsdurl.query.sort == "lh") {
    result.sort((a, b) => {
      return a.price - b.price;
    });
    
  res.write(JSON.stringify(result));

  res.end();
  } else if(parsdurl.query.sort == "hl") {
    result.sort((a, b) => {
      return b.price - a.price;
    });
    
  res.write(JSON.stringify(result));

  res.end();
  }else{

  res.write(JSON.stringify(result));

  res.end();
  }

});

server.listen(port, () => {
  console.log("hi started the server");
});
