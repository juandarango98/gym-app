const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

let _db; 

const pass = process.env.MONGOPASSWORD;

const mongoConnect = (callback) => {
    MongoClient.connect(`mongodb+srv://gymservice:${pass}@productioncluster-gplvm.mongodb.net/test?retryWrites=true&w=majority`)
    .then(client=>{
        console.log('Connected!');
        _db = client.db();
        callback(client);
    })  
    .catch(err => {
        console.log(err);
    });
};

const getDb = () => {
    if(_db){
        return _db;
    }
    throw 'Not database found';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;