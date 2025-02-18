var http = require("http");


var obj=[
    {id:1,
    name : "sattibabu",
    image:"https://i.pinimg.com/originals/eb/e8/32/ebe83252acdaa508c67a435d31c0a09d.jpg"
    },
    {
    id:2,
    name : "babai hotel",
    image:"https://i.pinimg.com/originals/eb/e8/32/ebe83252acdaa508c67a435d31c0a09d.jpg"
    },
    {
    id:3,
    name : "budget babai",
    image:"https://i.pinimg.com/originals/eb/e8/32/ebe83252acdaa508c67a435d31c0a09d.jpg"
    },{
    id:4,
    name : "10000- items",
    image:"https://i.pinimg.com/originals/eb/e8/32/ebe83252acdaa508c67a435d31c0a09d.jpg"
    
    }
    
    ]
    

var server=http.createServer((req,res)=>{

console.log(req);


    res.write(JSON.stringify(obj));

    res.end()

})


server.listen(3005,()=>{

    console.log("server is running");
    
})