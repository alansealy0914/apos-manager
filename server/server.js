var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var  port = process.env.PORT || 9001

var app = express();

require('./expressConfig')(app);
require('./routes')(app);

app.listen(port);
console.log('Listening on port ' + port + '...');





/*const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://alan:C#Admin1!@cluster0-fhlcg.azure.mongodb.net/aposDB";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("aposDB").collection("user");
  // perform actions on the collection object
  client.close();
});
*/
