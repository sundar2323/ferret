/* 
* This example uses the node MongoDB module to connect to the local
* mongodb database on this virtual machine
*
* More here: http://mongodb.github.io/node-mongodb-native/markdown-docs/insert.html
*/

//require node modules (see package.json)
var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

//connect away
MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
  if (err) throw err;
  console.log("Connected to Database");

  //simple json record
	var document = {name:"David", title:"About MongoDB"};
  console.log("Data to insert is of person named:" + document.name)
	//insert record
	db.collection('testcollection').insert(document, function(err, records) {
		if (err) throw err;
		//records = db.collection('testcollection').find().pretty();
		console.log("Record added as "+JSON.stringify(records));
		console.log("Result is "+JSON.stringify(records.result));
		console.log("Record id is "+records.ops[0]._id);
		console.log("Record id inserted is "+records.insertedIds[0]);
		//console.log("Record id is "+records.ops[0]._id);
		
	});
});
