const http = require("http")
const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end("ye mera home page h")
    }
    else if (req.url ==="/about"){
        res.end("ye mera about page h")
    }
    res.end("ye wrong route h ")
})
server.listen(3000,()=>{
    console.log("hii")
})