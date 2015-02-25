var http = require("http");

var myServer = http.createServer(function(req, res) {
res.writeHead(200, {"Content-Type" : "text/plain"});
res.end("Hello \n");
});

myServer.listen(8888);
