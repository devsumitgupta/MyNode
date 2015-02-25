var cluster = require('cluster');
var http = require('http');

if(cluster.isMaster) {
for(var i=0; i<3 ; i++) cluster.fork();

cluster.on('listening', function(worker, address) {
console.log("Listening working " + worker.id);
}); 
} else {
http.createServer(function(req, res) {
res.writeHead(200);
res.end("Hello from : " + cluster.worker.id + " \n"); 
}).listen(1234);

}
