var mongoDb = require('mongodb');
var url = "mongodb://localhost:27017";

MongoClient = mongoDb.MongoClient;

MongoClient.connect(url, function(err, DB) {
  if (err) throw err;
  console.log('database connected successfull!!!');

  //create collection
  var db = DB.db('EmployeeDB');
  var query = { name: 'Gift '};
//   var newValues = {$set:{name: 'Gift', address: 'William nicole drive'}};

//   db.collection('Employee').updateOne(query, newValues, (err, res)=>{
//     if(err)throw err;
//     console.log(res);
//     console.log('Document updated');


    db.collection('Employee').deleteOne(query, (err, res)=>{
        if(err) throw err;
        console.log('Document deleted');
        console.log(res);
        DB.close();
    })
//     DB.close();
//   });
//   var employee = {
//       name: 'Thulane',
//       address: '2 Rivonia road'
//   };


    // db.collection('Employee').find({}).toArray((err, res)=>{
    //     if(err) throw err
    //     console.log(res);

    //     DB.close();
    // });
     
    // dbo.collection('Employee').insertOne(employee, (err, res)=>{
    //     if(err)throw err
    //     console.log("document inserted");
    //     DB.close();
    // });
    //////CREATE COLLECTION
    //   dbo.createCollection('Employee', (err, res)=>{
    //     if(err) throw err;
    //     console.log('Collection created');
    
    //   });
    
   
});