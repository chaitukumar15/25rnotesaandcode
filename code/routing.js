var http = require("http");

var server = http.createServer((req, res) => {
  if (req.url == "/fake" && req.method == "GET") {
    fetch("https://fakestoreapi.com/products/1")
      .then((val) => {
        return val.json();
      })
      .then((val) => {
        res.write(JSON.stringify(val));

        res.end();
      });
  } else if (req.url == "/dummy" && req.method == "POST") {
    fetch("https://dummyjson.com/carts/1")
      .then((val) => {
        return val.json();
      })
      .then((val) => {
        res.write(JSON.stringify(val));

        res.end();
      });
  } else {
    res.write("not found");

    res.end();
  }
});

// http://localhost:3000

server.listen(3000, () => {
  console.log("hi started the server");
});
