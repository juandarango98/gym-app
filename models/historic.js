"use strict";

const mongodb = require('mongodb');
const getDb = require('../util/dbManager').getDb;

class Historical {

    constructor(date, data, user, event, id) {
        this.date = date;
        this.data = data;
        this.user = user;
        this.event = event;
        this._id = id?new mongodb.ObjectID(id):undefined;
    }

    save() {
        const db = getDb();
        let dbOp;
        if (this._id) {
            //Update
            dbOp = db.collection('historics')
                .updateOne({ _id: this._id }, { $set: this });
        } else {
            //Create
            dbOp = db.collection('historics')
                .insertOne(this);
        }
        return dbOp
            .then(() => {
                //Nothing tom show
            })
            .catch(err => {
                console.log(err);
            });
    }

    fetchAll() {
        const db = getDb();
        return db
            .collection('historics')
            .find()
            .toArray()
            .then((historics) => {
                return historics;
            })
            .catch(err => {
                console.log(err);
            });
    }

    fetchFilter(user, date, kinda) {
        let query = {};
        if (date) {
            query.date = date;
        }
        if (kinda) {
            query.kinda = kinda;
        }
        if (user) {
            const some = Number(user);
            if (!isNaN(some)) {
                query.user = some;
            }
        }
        const db = getDb();
        return db
            .collection('historics')
            .find(query)
            .toArray()
            .then(historics => {
                return historics;
            })
            .catch(err => {
                console.log(err);
            });
    }

    deleteById(id) {
        const db = getDb();
        return db
            .collection('historics')
            .deleteOne({ _id: new mongodb.ObjectID(id) })
            .then(() => {
                //Nothing to show
            })
            .catch(err => {
                console.log(err);
            });
    }

}

module.exports = Historical;