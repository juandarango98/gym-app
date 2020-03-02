"use strict";

const mongodb = require('mongodb');
const getDb = require('../util/dbManager').getDb;

class Routine {

    constructor(name, trainment, focus, exercises, id) {
        this.name = name;
        this.trainment = trainment;
        this.focus = focus;
        this.exercises = exercises;
        this._id = id?new mongodb.ObjectID(id):undefined;
    }

    save() {
        const db = getDb();
        let dbOp;
        if (this._id) {
            //Update
            dbOp = db.collection('routines')
                .updateOne({ _id: this._id }, { $set: this });
        } else {
            //Create
            dbOp = db.collection('routines')
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
            .collection('routines')
            .find()
            .toArray()
            .then((routines) => {
                return routines;
            })
            .catch(err => {
                console.log(err);
            });
    }

    fetchFilter(name, focus) {
        let query = {};
        if (name) {
            query.name = name;
        }
        if (focus) {
            query.focus = focus;
        }
        const db = getDb();
        return db
            .collection('routines')
            .find(query)
            .toArray()
            .then(routines => {
                return routines;
            })
            .catch(err => {
                console.log(err);
            });
    }

    deleteById(id) {
        const db = getDb();
        return db
            .collection('routines')
            .deleteOne({ _id: new mongodb.ObjectID(id) })
            .then(() => {
                //Nothing to show
            })
            .catch(err => {
                console.log(err);
            });
    }

}

module.exports = Routine;