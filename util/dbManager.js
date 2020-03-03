"use strict";

const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

let _db; 

const pass = process.env.MONGOPASSWORD;

const mongoConnect = (callback) => {
    MongoClient.connect(`mongodb+srv://gymservice:${pass}@productioncluster-gplvm.mongodb.net/gymService?retryWrites=true&w=majority`,{
    //MongoClient.connect('mongodb+srv://gymservice:ItBrJqIiVheLL7OI@productioncluster-gplvm.mongodb.net/dev?retryWrites=true&w=majority',{
        useUnifiedTopology: true })
    .then(client=>{
        console.log('Connected!');
        _db = client.db();
        callback();
    })  
    .catch(err => {
        console.log(err);
        throw err;
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