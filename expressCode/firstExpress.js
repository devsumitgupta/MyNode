var express = require('express');
var app = express();
var value = app.get('env');
app.get('/', function(req, res) {
res.json({message:'hey we got you '+ value
});
});
app.listen(8000);
