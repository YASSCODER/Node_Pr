const http = require('http');

const server = http.createServer((req,res)=> {
    if(req.url === '/'){
        res.end("this is our home page");
    }
    if(req.url === '/about'){
        res.end("this is our history")
    }
    res.end(`
    <h1>Ooops !</h1>
    <p>can't find the page you looking for !</p>
    <a href="/">back home</a>
    `);
})
server.listen(3000);