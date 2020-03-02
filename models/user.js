"use strict";

const mongodb = require('mongodb');
const getDb = require('../util/dbManager').getDb;

class User {

    constructor(name, email,pass, age, gender, weight, height, id) {  
        this.name = name;
        this.email = email;
        this.pass = pass;
        this.age = age;
        this.gender = gender;
        this.weight = weight;
        this.height = height;
        this._id = id?new mongodb.ObjectID(id):undefined;
    }

    save() {
        const db = getDb();
        let dbOp;
        if (this._id) {
            //Update
            dbOp = db.collection('users')
                .updateOne({ _id: this._id }, { $set: this });
        } else {
            console.log('Create')
            //Create
            dbOp = db.collection('users')
                .insertOne(this);
        }
        return dbOp
            .then(() => {
                //Nothing to show
            })
            .catch(err => {
                console.log(err);
            });
    }

    fetchAll() {
        const db = getDb();
        return db
            .collection('users')
            .find()
            .toArray()
            .then(users => {
                return users;
            })
            .catch(err => {
                console.log(err);
            });
    }

    fetchFilter(name, email) {
        let query = {};
        if (name) {
            query.name = name;
        }
        if (email) {
            query.email = email;
        }
        const db = getDb();
        return db
            .collection('users')
            .find(query)
            .toArray()
            .then(users => {
                return users;
            })
            .catch(err => {
                console.log(err);
            });
    }

    deleteById(id) {
        const db = getDb();
        return db
            .collection('users')
            .deleteOne({ _id: new mongodb.ObjectID(id) })
            .then(() => {
                //Nothing to show
            })
            .catch(err => {
                console.log(err);
            });
    }

}




module.exports = User;